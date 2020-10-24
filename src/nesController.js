const shiftRegister = require('../lib/libshiftregister')
const latchingShiftRegister = require('../lib/liblatchingshiftregister')
const ic555 = require('../lib/lib555')
const buttonClockPulse = 200
const latchClock = new ic555(buttonClockPulse * 13)
const buttonClock = new ic555(buttonClockPulse)
const register1 = new latchingShiftRegister(8)
const BUTTONS = [
    'A',
    'B',
    'SELECT',
    'START',
    'UP',
    'DOWN',
    'LEFT',
    'RIGHT'
]
register1.addData([1, 1, 0, 1, 0, 0, 1, 0])
latchClock.on('pulse', () => {
    let pulseCount = 0
    console.log('latch trigger')
    register1.latch()
    let data = Array.from(register1.data)
   // data = data.concat(register1.data)
    buttonClock.on('pulse', () => {
        if (pulseCount === 8) {
            buttonClock.stop()
        } else {
            const currBit = data.pop()
            data.unshift(0)
            console.log(`Bit ${BUTTONS[pulseCount]}: ${currBit}`, pulseCount)
            pulseCount++
        }
    })
    // start button polling
    buttonClock.start()
})
latchClock.start()
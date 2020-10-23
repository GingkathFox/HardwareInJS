const gates = require('../lib/libgates')
const shiftRegister = require('../lib/libshiftregister')
const latchingShiftRegister = require('../lib/liblatchingshiftregister')
const multiplexer = require('../lib/libmultiplexer')
const sevenSegmentDisplay = require('../lib/libsevensegmentdisplay')
const libbinary = require('../lib/libbinary')
const LED = require('../lib/libled')

function gateDemo() {
    console.log(`=====GATE DEMO=====`)
    let bool1 = 0
    let bool2 = 1
    console.log(`Gates:`)
    console.log(`Starting Values:    ${bool1}  ${bool2}`)
    console.log(`And:                 ${gates.and(bool1, bool2)}`)
    console.log(`Nand:                ${gates.nand(bool1, bool2)}`)
    console.log(`Xand:                ${gates.xand(bool1, bool2)}`)
    console.log(`Or:                  ${gates.or(bool1, bool2)}`)
    console.log(`Xor:                 ${gates.xor(bool1, bool2)}`)
    console.log(`Nor:                 ${gates.nor(bool1, bool2)}`)
    console.log(`Xnor:                ${gates.xnor(bool1, bool2)}`)
    console.log(`Yes:                ${gates.yes(bool1)}  ${gates.yes(bool2)}`)
    console.log(`Not:                ${gates.not(bool1)}  ${gates.not(bool2)}`)
}

function latchingShiftRegisterDemo() {
    console.log(`=====LATCHING SHIFT REGISTER DEMO=====`)
    const register1 = new latchingShiftRegister(8)
    const data = [0, 0, 1, 0, 0, 0, 0, 0]
    console.log(`Starting Data:            ${register1.data.join(', ')}`)
    console.log(`Adding data to buffer:`)
    register1.addData(data)
    console.log(`Data Added:               ${data.join(', ')}`)
    console.log(`Outputs:                  ${register1.data.join(', ')}`)
    console.log(`Triggering Latch:`)
    register1.latch()
    console.log(`Outputs:                  ${register1.data.join(', ')}`)
}
function shiftRegisterDemo() {
    console.log(`=====SHIFT REGISTER DEMO=====`)
    const register1 = new shiftRegister(8)
    const data = [0, 0, 1, 0, 0, 0, 0, 0]
    console.log(`Starting Data:            ${register1.data.join(', ')}`)
    console.log(`Adding data to buffer:`)
    register1.addData(data)
    console.log(`Data Added:               ${data.join(', ')}`)
    console.log(`Outputs:                  ${register1.data.join(', ')}`)
    console.log(`Outputs:                  ${register1.data.join(', ')}`)
}
function ledDemo() {
    console.log(`=====LED DEMO=====`)
    const led = new LED()
    console.log(`LED State: ${led.status}`)
    led.changeValue(1)
    console.log(`LED State: ${led.status}`)
}
function multiplexerDemo() {
    const INPUTS = [1, 1, 1, 1]
    console.log(`=====MULTIPLEXER DEMO=====`)
    console.log(`INPUTS: ${INPUTS}\nEXPECTED OUTPUT: 15`)
    const plex = new multiplexer(INPUTS)
    console.log(plex.run())
    console.log(`=====DEMULTIPLEXER DEMO=====`)
    console.log(`INPUT: 15\nEXPECTED OUTPUT: ${INPUTS.join('')}`)
    const deplex = new multiplexer(15, true)
    console.log(deplex.run())
}
function sevenSegmentDisplayDemo() {
    console.log(`=====SEVEN SEGMENT DISPLAY DEMO=====`)
    const one = [0, 1, 1, 0, 0, 0, 0]
    const two = [1, 1, 0, 1, 1, 0, 1]
    const three =  [1, 1, 1, 1, 0, 0, 1]
    const four = [0, 1, 1, 0, 0, 1, 1]
    const five = [1, 0, 1, 1, 0, 1, 1]
    const six = [1, 0, 1, 1, 1, 1, 1]
    const seven = [1, 1, 1, 0, 0, 0, 0]
    const eight = [1, 1, 1, 1, 1, 1, 1]
    const nine = [1, 1, 1, 1, 0, 1, 1]
    const zero = [1, 1, 1, 1, 1, 1, 0]
    const arr = [one, two, three, four, five, six, seven, eight, nine, zero]
    let ssd = new sevenSegmentDisplay()
    arr.forEach((v, i) => {
        ssd.write(v)
        console.log(`Number: ${i === 9 ? '0' : i + 1}`)
        console.log(ssd.value)
    })
}
shiftRegisterDemo()
latchingShiftRegisterDemo()
gateDemo()
ledDemo()
multiplexerDemo()
//sevenSegmentDisplayDemo()
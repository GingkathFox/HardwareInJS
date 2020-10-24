// broken seven segment display test
/*const sevenSegmentDisplay = require('../lib/libsevensegmentdisplay')
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
let ssd1 = new sevenSegmentDisplay(one)
let ssd2 = new sevenSegmentDisplay(two, true, ssd1.rawInput)

//console.log(ssd1.raw)
console.log(ssd2.raw.join('\n'))
console.log(ssd2.value)*/

const ic555 = require('../lib/lib555')
const triple5 = new ic555(1000)
triple5.on('pulse', () => {
    console.log('555 Pulse')
})
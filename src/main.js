const shiftRegister = require('../lib/libshiftregister')

function randNum(max, min) {
    return min ? (Math.floor(Math.random() * (+max++ - +min)) + +min) : (Math.floor(Math.random() * Math.floor(max++)))
}

const register1 = new shiftRegister(8)
const register2 = new shiftRegister(8)
let data = []

// set up listeners
register1.on('carryout', bit => {
    // chain the registers
    register2.addData(bit)
    console.log(`Bit ${bit} sent to register 2`)
})
register2.on('carryout', bit => {
    console.log(`CARRYOUT: ${bit}`)
})
// generate numberzzz
for (let i = 0; i < 64; i++) {
    data.push(randNum(2))
}

// run data
for (bit of data) {
    register1.addData(bit)
}
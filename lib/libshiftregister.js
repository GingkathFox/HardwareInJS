const {EventEmitter} = require('events')
/**
 * libShiftRegister
 */
class shiftRegister extends EventEmitter {
    /**
     * @param {number} bits The size of the register, in bits. Defaults to 8.
     */
    constructor(bits) {
        super()
        this._register = []
        if (typeof bits !== 'number' || bits === 0) {
            bits = 8
        }

        for (let i = 0; i < bits; i++) {
            this._register[i] = 0
        }
    }
    /**
     * 
     * @param {(number[]|number)} d The bit (or bytes) to push into the register.
     */
    addData(d) {
        if (typeof d === 'object') {
            for (let i = 0; i < d.length; i++) {
                //this._register[i] = d[i]
                this._register.push(d[i])
                this._register.shift()
            }
            return
        }
        if (isNaN(parseInt(d)) || d === 0) {
            d = 0
        } else {
            d = 1
        }
        this._register.unshift(d)
        this.emit('carryout', this._register.pop())
    }
    get data() {
        return this._register
    }
}
module.exports = shiftRegister
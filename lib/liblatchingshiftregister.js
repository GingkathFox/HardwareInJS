const {EventEmitter} = require('events')
/**
 * libLatchingShiftRegister
 */
class latchingShiftRegister extends EventEmitter {
    /**
     * @param {number} bits The size of the register, in bits. Defaults to 8.
     */
    constructor(bits) {
        super()
        this._register = []
        this._buffer = []
        if (typeof bits !== 'number' || bits === 0) {
            bits = 8
        }

        for (let i = 0; i < bits; i++) {
            this._register[i] = 0
            this._buffer[i] = 0
        }
    }
    /**
     * @param {(number[]|number)} d The bit (or bytes) to push into the register.
     */
    addData(d) {
        if (typeof d === 'object') {
            for (let i = 0; i < d.length; i++) {
                this._buffer.push(d[i])
                this._buffer.shift()
            }
            return
        }
        if (isNaN(parseInt(d)) || d === 0) {
            d = 0
        } else {
            d = 1
        }
        this._buffer.unshift(d)
        this.emit('carryout', this._buffer.pop())
    }
    /**
     * Trigger the latch of the register.
     */
    latch() {
        this._register = this._buffer
        this.emit('latch-trigger', this._register)
    }
    get data() {
        return this._register
    }
}
module.exports = latchingShiftRegister
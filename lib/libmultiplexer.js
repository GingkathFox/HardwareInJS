const {
    addition,
    binaryToInt,
    intToBinary
} = require('../lib/libbinary')
const {EventEmitter} = require('events')
class multiplexer extends EventEmitter{
    /**
     * @param {number[]|number} inputs The input bits. Max 4.
     * @param {boolean} demultiplexer Whether to demux or not. Defaults to false.
     * If set to true, "inputs" should be a single integer.
     * If "inputs" is a array, this will attempt to convert it to a integer.
     * @emits out
     */
    constructor(inputs, demultiplexer = false) {
        super()
        // grab only the first 4 bits
        this._inputs = []
        this._demultiplexer = demultiplexer
        if (this._demultiplexer) {
            if (typeof inputs === 'object') {
                inputs = binaryToInt(inputs.join(''))
            }
            this._inputs = inputs
        } else {
            for (let i = 0; i < 4; i++) {
                if (!inputs[i]) {
                    inputs[i] = 0
                }
                this._inputs.push(inputs[i])
            }
        }

    }
    run() {
        let sum = this._inputs
        if (this._demultiplexer) {
            sum = intToBinary(sum)
        } else {
            sum = this._inputs.join('')
            sum = binaryToInt(sum)
        }
        this.emit('out', sum)
    }
}
module.exports = multiplexer
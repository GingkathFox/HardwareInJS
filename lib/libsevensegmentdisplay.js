class sevenSegmentDisplay {
    /**
     * Create a seven segment display.
     * @param {number[]} v The 7 inputs, from A to G. Layout below:
     * @example
     *  AA
     * F  B
     *  GG
     * E  C
     *  DD
     * @param {boolean} chained Whether this display is chained or not.
     * @param {number[]} from If the display is chained, this is the raw output from the preceeding display.
     */
    constructor(v, chained = false, from) {
        if (!v) {
            v = [0, 0, 0, 0, 0, 0, 0]
        }
        this._v = v
        this._chained = chained
        if (chained) {
            this._A = []
            this._B = []
            this._C = []
            this._D = []
            this._E = []
            this._F = []
            this._G = []
            this._currValue = []
            this.write(from)
            this._A.push(0,0,0,0,0)
            this._B.push(0,0)
            this._C.push(0,0)
            this._D.push(0,0,0,0,0)
            this._E.push(0,0,0,0,0)
            this._F.push(0,0)
            this._G.push(0,0,0,0,0)
            this.__write()
        }
        this.write(v)
    }
    write(v) {
        // reset everything
        if (!this._chained) {
            this._A = []
            this._B = []
            this._C = []
            this._D = []
            this._E = []
            this._F = []
            this._G = []
            this._currValue = []
        }
        // Ugly but it works
        if (v[0] === 1) {
            this._A.push(0, 1, 1, 0)
        } else {
            this._A.push(0, 0, 0, 0)
        }
        if (v[1] === 1) {
            this._B.push(0, 0, 1)
        } else {
            this._B.push(0, 0, 0)
        }
        if (v[2] === 1) {
            this._C.push(0, 0, 1)
        } else {
            this._C.push(0, 0, 0)
        }
        if (v[3] === 1) {
            this._D.push(0, 1, 1, 0)
        } else {
            this._D.push(0, 0, 0, 0)
        }
        if (v[4] === 1) {
            this._E.push(1)
        } else {
            this._E.push(0)
        }
        if (v[5] === 1) {
            this._F.push(1)
        } else {
            this._F.push(0)
        }
        if (v[6] === 1) {
            this._G.push(0, 1, 1, 0)
        } else {
            this._G.push(0, 0, 0, 0)
        }
    }
    get value() {
        this.__write()
        let output = []
        this._currValue.forEach(v => {
            v.forEach((w, i) => {
                w === 1 ? w = `█` : w = ' '
                v[i] = w
            })
            output.push(v.join(''))
        })
        return output.join('\n')
    }
    get rawInput() {
        return this._v
    }
    get raw() {
        this.__write()
        return this._currValue
    }
    __write() {
        this._currValue = [this._A, this._F.concat(this._B), this._G, this._E.concat(this._C), this._D]
    }
}
module.exports = sevenSegmentDisplay
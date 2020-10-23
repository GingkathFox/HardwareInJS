class LED {
    /**
     * libLED
     * @param {number} v The value to set. Should be either 0 or 1.
     */
    constructor(v) {
        this._v = 0
        this.changeValue(v)
    }
    changeValue(v) {
        if (v === 0) {
            this._v = 0
        } else {
            this._v = 1
        }
        this.on = this._v
    }
    get status() {
        if (this.on === 1) {
            return `█`
        } else {
            return ` `
        }
    }
}
module.exports = LED
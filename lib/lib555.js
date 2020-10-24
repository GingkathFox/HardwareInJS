const {
    EventEmitter
} = require('events')

/**
 * 555 IC simulator.
 * Start with `ic555.start()`.
 * @emits pulse
 */
class ic555 extends EventEmitter {
    /**
     * @param {number} pulseTime Pulse time, in ms.
     */
    constructor(pulseTime) {
        super()
        this._pulseTime = pulseTime
        this._clock;
    }
    stop() {
        clearInterval(this._clock)
    }
    start() {
        this._clock = setInterval(() => {
            this.emit('pulse')
        }, this._pulseTime)
    }
}
module.exports = ic555
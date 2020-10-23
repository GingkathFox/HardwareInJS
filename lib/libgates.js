module.exports = {
    not(v) {
        if (!v === false) {
            return 0
        }
        return 1
    },
    yes(v) {
        return v
    },
    and(v1, v2) {
        if (v1 && v2) {
            return 1
        }
        return 0
    },
    nand(v1, v2) {
        if (v1 !== v2) {
            return 1
        }
        return 0
    },
    xand(v1, v2) {
        if (v1 === v2) {
            return 1
        }
        return 0
    },
    or(v1, v2) {
        if (v1 || v2) {
            return 1
        }
        return 0
    },
    xor(v1, v2) {
        if ((v1 || v2) && v1 !== v2) {
            return 1
        }
        return 0
    },
    nor(v1, v2) {
        if (!v1 || !v2) {
            return 1
        }
        return 0
    },
    xnor(v1, v2) {
        if ((!v1 || !v2) && v1 !== v2) {
            return 1
        }
        return 0
    },
}
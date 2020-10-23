module.exports = {
    addition(a, b) {
        let carry = 0
        let result = ""

        let i = 0
        let j = 0

        while (i <= a.length - 1 || j <= b.length - 1) {
            let num1 = i < 0 ? 0 : a[i] | 0
            let num2 = j < 0 ? 0 : b[j] | 0
            carry += num1 + num2 // sum of the two single digits
            result = carry % 2 + result //concat string in proper order
            carry = carry / 2 | 0 // remove fractionals
            i++
            j++
        }
        if (carry) {
            result = carry + result
        }
        return result
    },
    binaryToInt(bin) {
        let digits = bin.split('').reverse() // revers so we're doing it in order
        let sum = 0
        for (let i = 0; i < digits.length; i++) {
            let digit = parseInt(`${digits[i]}`)
            sum += (digit * Math.pow(2, i))
        }
        return sum
    },
    intToBinary(int) {
        let res = ""
        let remainders = []
        let working = true
        while (working) {
            let quotient = Math.floor(int / 2)
            let remainder = int % 2
            if (quotient === 0) {
                working = false
            } else {
                int = quotient
            }
            remainders.push(remainder)
        }
        res = remainders.reverse().join('')
        return res
    }
}
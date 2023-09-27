function toReadable(number) {

    const simpleNumbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const teensNumbers = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty']
    const tensNumbers = ['', '', "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]

    if (number >= 0 && number <= 9) {
        return simpleNumbers[number]
    } else if (number >= 10 && number <= 19) {
        return teensNumbers[number - 10]
    } else if (number >= 20 && number <= 99) {
        const n = Math.floor(number / 10)
        if (number % 10 === 0) {
            return tensNumbers[n]
        } else {
            return `${tensNumbers[n]} ${toReadable(number % 10)}`
        }
    } else if (number >= 100 && number <= 999) {
        const n = Math.floor(number / 100)
        if (number % 100 === 0) {
            return `${simpleNumbers[n]} hundred`
        } else {
            return `${simpleNumbers[n]} hundred ${toReadable(number % 100)}`
        }
    }
}

module.exports = toReadable

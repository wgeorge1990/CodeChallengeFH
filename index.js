function runProgram() {
    getUserInput()
}

runProgram()

function createRange(start, end) {
    const range = (start, end) => [...Array(end - start + 1)]
        .map((v, i) => start + i)
    return range(start, end)
}

function filterRangeForPrimes(range) {
    return range.filter(num => isPrime(num) === true)
}

function isPrime(num) {
    if (num === 1) return false
    if (num === 2) return true
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false
    }
    return true;
}

const getFreqOfDigits = (primesArray) => primesArray.reduce((acc, currVal) => {
    return acc.toString().concat(currVal.toString())
}).split("").reduce((acc, currVal) => {
    if (currVal in acc) {
        acc[currVal]++
    } else {
        acc[currVal] = 1
    }
    return acc
}, {})

const formatAndValidateInput = (input) => {
    const trimmedInput = input.trim()
    const rangePoints = {
        start: Number(trimmedInput.split(" ")[0]),
        end: Number(trimmedInput.split(" ")[1])
    }
    const {start, end} = rangePoints;
    const isValid =
        trimmedInput.toString().length >= 3 &&
        trimmedInput.split(" ").length === 2 &&
        start > 0 &&
        end[0] !== 0 &&
        end > start &&
        !(isNaN(end) && !(isNaN(start)))

    if (!isValid) {
        console.log("Input was not valid, Please try again")
        process.exit()
    }

    return rangePoints
}

function getUserInput() {
    const ReadLine = require("readline").createInterface({
        "input": process.stdin,
        "output": process.stdout
    })
    ReadLine.question(`Please enter start and end of range using (example: 1 20) with one space in between: `, (input) => {

        const userInputPoints = formatAndValidateInput(input)
        const range = createRange(userInputPoints.start, userInputPoints.end);
        const primes = filterRangeForPrimes(range);
        const freqOfDigits = getFreqOfDigits(primes)

        let freqArr = []

        for (const property in freqOfDigits) {
            freqArr.push(freqOfDigits[property])
        }

        const highestOccurrence = Math.max(...freqArr)

        let listOfHighestOccurringDigits = []
        for (const digit in freqOfDigits) {
            if (freqOfDigits[digit] === highestOccurrence) {
                listOfHighestOccurringDigits.push(digit)
            }
        }

        const hightestOccurringDigit = Math.max(...listOfHighestOccurringDigits)
        console.log("\nThe Highest Occurring Digit from the primes found in provided range is: ", hightestOccurringDigit)
        ReadLine.close()
        process.exit()
    })
}
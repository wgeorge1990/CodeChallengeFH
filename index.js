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

const ReadLine = require("readline").createInterface({
        "input": process.stdin,
        "output": process.stdout
    })

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

function getUserInput() {
    ReadLine.question(`Please enter start and end of range using (example: 1 20) with one space in between: `, (input) => {

            const start = parseInt(input.split(" ")[0])
            const end = parseInt(input.split(" ")[1])
            const range = createRange(start, end);
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
            }}

            const answer = Math.max(...listOfHighestOccurringDigits)
            console.log("\nAnswer: ", answer)
            ReadLine.close
    })
};

getUserInput()

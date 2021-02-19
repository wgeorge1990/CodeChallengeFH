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
        while(num === 2) return true
        for (let x = 2; x < num; x++) {
            if (num % x === 0) return false
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

        console.warn("Input starts and ends with a number => ( ",
        input.trim().startsWith(0, typeof Number).toString().endsWith(typeof Number) + " )")

            let start = parseInt(input.split(" ")[0])
            let end = parseInt(input.split(" ")[1])
            let range = createRange(start, end);
            let primes = filterRangeForPrimes(range);
            let freqOfDigits = getFreqOfDigits(primes)
            
                console.log("Frequency of Prime numbers: ", freqOfDigits)
                
                let freqArr = []
                
                for (const property in freqOfDigits) {
                freqArr.push(freqOfDigits[property])
                }
                
                let highestOccurrence = Math.max(...freqArr)
                console.log("Highest Occurrence: ", highestOccurrence)
                
                let listOfHighestOccurringDigits = []
                for (const digit in freqOfDigits) {
                if (freqOfDigits[digit] === highestOccurrence) {
                    listOfHighestOccurringDigits.push(digit)
                }
                }
                console.log("List of Highest Occurring Digits: ", listOfHighestOccurringDigits)
                
                const answer = Math.max(...listOfHighestOccurringDigits)
                console.log("\nAnswer: ", answer)
            
    })
};

getUserInput()

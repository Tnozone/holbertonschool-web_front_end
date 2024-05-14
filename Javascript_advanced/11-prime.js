function countPrimeNumbers() {

    let count = 0;
    for (let i = 2; i<= 100; i++) {
        let prime = i > 1;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j == 0) {
                prime = false;
                break;
            }
        }
        if (prime) {
            count += 1;
        }
    }
    return count;
}

function hundredCount() {
    for (let n = 1; n <= 100; n++) {
        countPrimeNumbers();
    }
}

const t0 = performance.now();
setTimeout(hundredCount(), 0);
const t1 = performance.now();
console.log(`Execution time of calculating prime numbers 100 times was ${t1 - t0} milliseconds.`);
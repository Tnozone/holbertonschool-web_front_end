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

const t0 = performance.now();
countPrimeNumbers();
const t1 = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`)
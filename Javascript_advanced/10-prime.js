function countPrimeNumbers() {
    for (let i = 2; i<= 100; i++) {
        let prime = i > 1;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j == 0) {
                prime = false;
                break;
            }
        }
        if (prime) {
            console.log(i);
        }
    }
    console.log(`Execution time of printing countPrimeNumbers was ${performance.now()} milliseconds.`);
}

function hundredCount() {
    for (let n = 1; n <= 100; n++)
        countPrimeNumbers();
    console.log(`Execution time of calculating prime numbers 100 times was ${performance.now()} milliseconds.`);
}
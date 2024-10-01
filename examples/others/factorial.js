function factorialIterative(number) {
    if (number < 0) undefined;
    let total = 1;
    for (let i = number; i > 1; i--) {
        total *= i;
    }
    return total;
}

console.log("factorialIterative(5): ", factorialIterative(5));
console.log("factorialIterative(3): ", factorialIterative(3));

function factorial(number) {
    if (number === 1 || number === 0) return 1;
    return number*factorial(number - 1);
}

console.log("factorial(5): ", factorial(5));
console.log("factorial(3): ", factorial(3));

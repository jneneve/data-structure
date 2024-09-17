import Stack from "../data-structures/stack.js";

export function decimalToBinary(decimalNumber) {
    const stack = new Stack();
    let number = decimalNumber;
    while(number > 0) {
        let remainder = Math.floor(number % 2);
        stack.push(remainder);
        number = Math.floor(number/2);
    }
    let binaryString = "";
    while(!stack.isEmpty()) {
        binaryString += stack.pop().toString();
    }
    return binaryString;
}

export function baseConverter(decimalNumber, base) {
    const stack = new Stack();
    let number = decimalNumber;
    const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (!(base >= 2 && base <= 36)) {
        return "";
    }
    while(number > 0) {
        let remainder =  Math.floor(number % base);
        stack.push(remainder);
        number = Math.floor(number/base);
    }
    let baseString = "";
    while(!stack.isEmpty()) {
        baseString += digits[stack.pop()];
    }
    return baseString;
}

console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 8));
console.log(baseConverter(100345, 16));
console.log(baseConverter(100345, 35));
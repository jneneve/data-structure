import Deque from "../data-structures/deque.js";

export function palindromeChecker(phrasal) {
    if (phrasal === undefined || phrasal === null || phrasal !== null && phrasal.length === 0) {
        return false;
    }
    const deque = new Deque();
    const lowerString = phrasal.toLocaleLowerCase().split(" ").join("");
    for (let i = 0; i < lowerString.length; i++) {
        deque.addBack(lowerString.charAt(i));
    }

    let firstChar;
    let lastChar;
    while (deque.size() > 1) {
        firstChar = deque.removeFront();
        lastChar = deque.removeBack();
        if (firstChar !== lastChar) {
            return false;
        }
    }
    return true;
}

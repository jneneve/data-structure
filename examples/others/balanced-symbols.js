import { parenthesesChecker } from "../../others/balanced-symbols.js";

console.log('{([])}', parenthesesChecker('{([])}'));
console.log('{{([][])}()}', parenthesesChecker('{{([][])}()}'));
console.log('[{()]', parenthesesChecker('[{()]'));

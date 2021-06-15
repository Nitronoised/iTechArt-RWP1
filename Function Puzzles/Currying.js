function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args)
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2))
            }
        }
    };
}

function multiplied(A, B, C) {
    return [A / 2 * C, B + 120, C * C].reduce((a, b) => a * b)
}

let curriedMultiply = curry(multiplied);

let firstCalc = curriedMultiply(1);
let secondCalc = firstCalc(2);

console.log(curriedMultiply(1, 2)(3));
console.log(secondCalc(2));
console.log(firstCalc(3)(5));



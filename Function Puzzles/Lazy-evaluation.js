function makeCalculation(...args) {
    return args.reduce((acum, current) => {
        return acum * current
    });
}

let lazy = function (func, ...rest) {
    return function () {
        return func.apply(this, rest);
    }
}

let lazyCalc = lazy(makeCalculation, 1, 2, 3, 4)

console.log(lazyCalc())


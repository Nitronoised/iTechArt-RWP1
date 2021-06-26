function makeCalculation(...args) {
    return args.reduce((acum, current) => {
        return acum * current
    });
}

const lazy = function (func, ...rest) {
    return function () {
        return func.apply(this, rest);
    }
}

//const instead of let
const lazyCalc = lazy(makeCalculation, 1, 2, 3, 4)

console.log(lazyCalc())


const partial = function (func, ...argsBound) {
    return function (...args) {
        return func.call(this, ...argsBound, ...args)
    }
}

const G = function (...args) {
    return args.reduce((a, b) => a + b)
}

/*let B = partial(G, 4, 5);

console.log(B(1, 2))*/

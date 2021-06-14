function multiply(...args) {
    let accum = 1;
    for (let arg of args) {
        accum *= arg
    }
    return accum
}

console.log(multiply(2, 2, 2, 2, 2, 2, 2, 2, 2))

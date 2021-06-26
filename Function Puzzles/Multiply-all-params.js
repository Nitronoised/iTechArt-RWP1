function multiply(...args) {
    let accum = 1;
    for (const arg of args) {
        accum *= arg
    }

    return accum;
}

//console.log(multiply(2, 2, 2, 2, 2, 2, 2, 2, 2))

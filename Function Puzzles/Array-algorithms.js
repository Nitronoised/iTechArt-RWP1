

function map(arr, callback) {
    // let newArr = []; should be const cause variable is never rewrited
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i]))
    }

    return newArr
}

function linearFold(arr, callback, initVal) {
    // let accum = initVal === undefined ? arr[0] : initVal; can be replaced with code below
    let accum = initVal || arr[0]
    // let i = initVal === undefined ? 1 : 0; can be moved inside of first part of a loop
    for (let i = initVal === undefined ? 1 : 0; i < arr.length; i++) {
        accum = callback(accum, arr[i])
    }
//empty line before return
    return accum
}

function filter(arr, callback) {
    // let newArr = [];
    const newArr = [];
    for (let i = 0; i <= arr.length - 1; i++) {
        callback(arr[i]) && newArr.push(arr[i])
    }

    return newArr
}

function getAverage(arr) {
    // let even = filter(arr, function (e) { return e % 2 == 0 });
    const even = filter(arr, function (e) { return e % 2 == 0 });

    // let reduced = linearFold(even, function (a, b) { return a + b });
    const reduced = linearFold(even, function (a, b) { return a + b });

    return Math.round(reduced / even.length)
}

// console.log(getAverage([2, 6, 7, 3, 5, 8]))
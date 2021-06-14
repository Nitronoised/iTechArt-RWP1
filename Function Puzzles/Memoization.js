function heavyCPU(a) {
    if (typeof a !== 'number') { throw new TypeError('A number is expected.') }
    return (a / Math.pow(a, 5)) + 1500 - a
}

function cacher(func, hash) {
    let cache = new Map();
    return function () {
        let key = hash(arguments);
        if (cache.has(key)) {
            return cache.get(key)
        }
        let result = func(...arguments);
        cache.set(key, result)
        return result

    }
}
function hashGen(args) {
    let hash = '';
    for (let arg of args) {
        hash += arg
    }
    return hash

}

heavyCPU = cacher(heavyCPU, hashGen);

try {
    console.log(heavyCPU(11, null))
    console.log(heavyCPU(undefined, 80, 10))
}
catch (e) {
    console.info(e)
}

function heavyCPU(a) {
    if (typeof a !== 'number') {
        throw new TypeError('A number is expected.')
    }

    return (a / Math.pow(a, 5)) + 1500 - a
}

function cacher(func, hash) {
    const cache = new Map();
//we should have empty line before return
    return function () {
        const key = hash(arguments);
        if (cache.has(key)) {
            return cache.get(key)
        }
//empty line after "if" in case we don't have one more "if" statements followed
        const result = func(...arguments);
        cache.set(key, result)

        return result
    }
}

function hashGen(args) {
    /*let hash = '';
    
    can be simplified
    for (let arg of args) {
        hash += arg
    }*/
    return args.join('');
}

/*heavyCPU = cacher(heavyCPU, hashGen);

try {
    console.log(heavyCPU(11, null))
    console.log(heavyCPU(undefined, 80, 10))
}
catch (e) {
    console.info(e)
}*/

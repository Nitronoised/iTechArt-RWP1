let _Array = function () {
    function take(arr, n) {
        let newArr = [];
        for (let i = 0; i <= n; i++) {
            arr[i] <= n && newArr.push(arr[i])
        }
        return newArr
    }
    function skip(arr, n) {
        let newArr = [];
        for (let i = 0; i <= arr.length; i++) {
            arr[i] > n && newArr.push(arr[i])
        }
        return newArr
    }
    function map(arr, callback) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            newArr.push(callback(arr[i]))
        }
        return newArr
    }
    function reduce(arr, callback, initVal) {
        let accum = initVal === undefined ? arr[0] : initVal;
        let i = initVal === undefined ? 1 : 0;
        for (; i < arr.length; i++) {
            accum = callback(accum, arr[i])
        }
        return accum
    }
    function filter(arr, callback) {
        let newArr = [];
        for (let i = 0; i <= arr.length - 1; i++) {
            callback(arr[i]) && newArr.push(arr[i])
        }
        return newArr
    }
    function forEach(arr, callback) {
        for (let i = 0; i <= arr.length - 1; i++) {
            arr[i] = callback(arr[i])
        }
        return arr
    }
    function chain(arr) {
        return {
            take: function (n) {
                arr = take(arr, n);
                return this;
            },
            skip: function (n) {
                arr = skip(arr, n);
                return this;
            },
            reduce: function (callback, initVal) {
                arr = reduce(arr, callback, initVal);
                return this;
            },
            map: function (callback) {
                arr = map(arr, callback)
                return this;
            },
            forEach: function (callback) {
                arr = forEach(arr, callback)
                return this;
            },
            filter: function (callback) {
                arr = filter(arr, callback)
                return this;
            },
            value: function () {
                return arr;
            }
        }
    }
    return {
        take,
        skip,
        reduce,
        map,
        forEach,
        filter,
        chain,
    }
}

_Array.reduce([[1, 2], [3, 4], [5, 6]], (accum, current) => {
    return accum.concat(current);
});

console.log(_Array().chain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).take(6).skip(1).map(a => a * 10).filter(a => a > 30).forEach(a => a - 10).reduce((a, b) => a + b).value())


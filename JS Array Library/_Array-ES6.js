class _Array {
    static take(arr, n) {
        let newArr = [];
        for (let i = 0; i <= n; i++) {
            arr[i] <= n && newArr.push(arr[i]);
        }
        return newArr;
    }
    static skip(arr, n) {
        let newArr = [];
        for (let i = 0; i <= arr.length; i++) {
            arr[i] > n && newArr.push(arr[i]);
        }
        return newArr;
    }
    static map(arr, callback) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            newArr.push(callback(arr[i]));
        }
        return newArr;
    }
    static reduce(arr, callback, initVal) {
        let accum = initVal === undefined ? arr[0] : initVal;
        let i = initVal === undefined ? 1 : 0;
        for (; i < arr.length; i++) {
            accum = callback(accum, arr[i]);
        }
        return accum;
    }
    static filter(arr, callback) {
        let newArr = [];
        for (let i = 0; i <= arr.length - 1; i++) {
            callback(arr[i]) && newArr.push(arr[i]);
        }
        return newArr;
    }
    static forEach(arr, callback) {
        for (let i = 0; i <= arr.length - 1; i++) {
            arr[i] = callback(arr[i]);
        }
        return arr;
    }
    static chain(arr) {
        return {
            take: function (n) {
                arr = _Array.take(arr, n);
                return this;
            },
            skip: function (n) {

                arr = _Array.skip(arr, n);
                return this;
            },
            reduce: function (callback, initVal) {
                arr = _Array.reduce(arr, callback, initVal);
                return this;
            },
            map: function (callback) {
                arr = _Array.map(arr, callback);
                return this;
            },
            forEach: function (callback) {
                arr = _Array.forEach(arr, callback);
                return this;
            },
            filter: function (callback) {
                arr = _Array.filter(arr, callback);
                return this;
            },
            value: function () {
                return arr;
            },
        };
    }
}
console.log(_Array.take([1, 2, 3, 4, 5, 6], 3));
console.log(
    _Array
        .chain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        .take(6)
        .forEach((a) => a * 10)
        .value()
);

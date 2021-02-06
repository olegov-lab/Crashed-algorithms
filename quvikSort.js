function qSort(arr) {

    let less = [], big = [], pivot;
        if (arr.length < 2) {
            return arr;
        }

        if (arr.length == 2) {
            if (arr[0] < arr[1]) {
                return arr;
            } else {
                let a = arr[0];
                arr[0] = arr[1];
                arr[1] = a;
                return arr;
            }
        } else {
        pivot = arr[0];
        for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= pivot) {
        less.push(arr[i]);
        } else if (arr[i] > pivot) {
        big.push(arr[i]);
        }
        }
        }

        return qSort(less) + pivot + qSort(big);

    }

    console.log(qSort([2, 1, 4,5,6,7,8,9,10,11]));
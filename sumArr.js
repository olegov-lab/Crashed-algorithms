function sum(arr) {

    if (arr.length == 1) {
        return arr[0];
    } return arr[0] + sum(arr.slice(1));
}

console.log(sum([1,2,3,4,5,6,7,8,9,0]));
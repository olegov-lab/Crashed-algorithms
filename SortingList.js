function findSmallest(arr) {
    let smallest = arr[0];
    let smallestIndex = 0;

    for (i = 0; i < arr.length; i++) {

        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }


    } return smallestIndex;
}

function sortedArray(arr) {
    let newArr = [];

    for (let i = 0; arr.length; i++) {
        let smallest = findSmallest(arr);
        newArr.push(arr.splice(smallest, 1)[0]);
    }
    return newArr;
}


let arr = [1, 2, 3, 4, 0, 6, 7, 8, 2, 10];
console.log(sortedArray(arr));
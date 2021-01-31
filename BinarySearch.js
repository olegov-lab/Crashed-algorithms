//The binary search in a sorting list
function searchedBinary(list, item) {
       let low = 0;
       let high = list.length - 1;
       let guess = 0;

       while (low <= high) {
       let mid = Math.floor((low + high) / 2);
       guess = list[mid];

       if (guess == item) {
           return guess;
       } else if (guess > item) {
              high = mid - 1;
       } else if (guess < item) {
              low = mid +1;
       } else {
         return null;
         }
       }
       }


       let list = [1,2,3,4];
       console.log(searchedBinary(list, 3));
// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

const inputArray = [3, 5, 2, 6, 8, 1, 4];

function sortAscending(inputArray){
     inputArray.sort((a, b) => a-b);
    console.log(inputArray[1]);
}

sortAscending(inputArray);
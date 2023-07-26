// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 
const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];

function findMostFrequentElement(arr) {
    const frequency = {};
    let maxFrequency = 0;
    let mostFrequentElement;
  
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      frequency[element] = (frequency[element] || 0) + 1;
  
      if (frequency[element] > maxFrequency) {
        maxFrequency = frequency[element];
        mostFrequentElement = element;
      }
    }
    console.log(mostFrequentElement);
  }
  
findMostFrequentElement(inputArray);
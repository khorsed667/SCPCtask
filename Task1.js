// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

const str = "Hello World";

function reverse (str){
    let reverseStr = "";
    for(i=str.length; i>=0; i--){
        reverseStr += str.charAt(i);
    }
    console.log(reverseStr);
}
reverse(str);
  
const str = "Hello World";

function reverse (str){
    let reverseStr = "";
    for(i=str.length; i>=0; i--){
        reverseStr += str.charAt(i);
    }
    console.log(reverseStr);
}
reverse(str);
  
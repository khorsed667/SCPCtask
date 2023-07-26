const sampleArray  = [2, -5, 10, -3, 7];

let arraySum = 0;

function addelement (sampleArray){

    for(i=0; i<sampleArray.length; i++){
        if(sampleArray[i]>=0){
            arraySum += sampleArray[i];
        }
    }
    console.log(arraySum);
}
 addelement(sampleArray)
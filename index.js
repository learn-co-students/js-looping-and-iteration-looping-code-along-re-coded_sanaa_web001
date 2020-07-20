// Code your solutions in this file


let n="surprise";
let arr=["Ada", "Brendan", "Ali"];
function writeCards(array,n) {
  
  for (let i = 0; i < array.length; i++) {
    array[i]='Thank you, '+array[i]+', for the wonderful '+n+' gift!';
    console.log(array[i]);
    
  }
 return array;
}

function countDown(n){
  var i=n;
  while(i>=0){
    console.log(i);
    i--;
   
  }
}
writeCards(arr,n);
countDown(10);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);


// Code your solutions in this file

const arr = ["Ada", "Brendan", "Ali"];
const even = "surprise ";
let a = [];

function writeCards(arr,even) {
    for (let i = 0; i < arr.length; i++) {
      a[i] =`Thank you, ${arr[i]}, for the wonderful ${even} gift!`; 
    }
    return a;
}
 
writeCards( arr,even);

function countDown(count){
let i = count;
while (i>= 0) {
  console.log(i--);
}
}
countDown(10);
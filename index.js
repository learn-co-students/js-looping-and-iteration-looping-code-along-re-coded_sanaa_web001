// Code your solutions in this file

const arr = ["Ada", "Brendan",  "Ali"];
const event = "birthday";
let s=[];
function writeCards(arr, event) {
    for (let i = 0; i < arr.length; i++)
        s[i]=`Thank you, ${arr[i]}, for the wonderful ${event} gift!`;
        return s;
}
writeCards(arr, event);


function countDown(i){
  while(i>=0){
    console.log(i);
    i--;
  }
}
countDown(10);

// Code your solutions in this file// Code your solutions in this file
function writeCards(nameArray, eventName) {
    let thankMessage = [];
    for (let i = 0; i < nameArray.length; i++) {
        thankMessage.push(`Thank you, ${nameArray[i]}, for the wonderful ${eventName} gift!`);
          }

    return thankMessage;
}
let test=[];

test=writeCards(["Ada", "Brendan", "Ali"], "birthday");

function countDown(number) {
  let i =number;
  while (i >= 0) {
    console.log(i);
    i--; 
  }
}
 countDown(10);
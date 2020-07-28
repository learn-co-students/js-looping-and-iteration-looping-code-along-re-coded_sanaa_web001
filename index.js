// Code your solutions in this file

function countDown(n) {
  while(n>=0){
    console.log(n);
    n--;
  }
}
countDown(10);


function writeCards(cards ,birthday) {
    for (let i=0;i<cards.length;i++){

      console.log(`Thank you ,${cards[i]} for the wonderful ${birthday} gift! `);
    }
    return cards;
  }

let cards =["Lisa", "Kaitlin", "Jan"];
  writeCards(cards, "surprise");
// function writeCards(names, giftName) {
//   let output =[];
//     for (let i = 0; i < names.length; i++) {
//       output.push("Thank you, " + names[i] + ", for the wonderful " + giftName + " gift!");
//   }
//   return output;
// }
//
// console.log(writeCards(["Lisa", "Kaitlin", "Jan"],"surprise"));

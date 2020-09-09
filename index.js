// Code your solutions in this file

//const arr= ["Lisa", "Kaitlin", "Jan"];
//const event=["surprise"];

function writeCards(arr,event) {
  let thankYouCards=[];
  for (let i = 0; i < arr.length; i++){
    console.log(`Thank you ,${arr[i]} for the wonderful ${event} gift!`);
    thankYouCards.push(`Thank you, ${arr[i]}, for the wonderful ${event} gift!`)
  }
return thankYouCards;
}

function countDown(number){

  while( number>0){
      console.log(number)
    number--;

}
  console.log(number);
}
//writeCards(arr,event);



// function wrapGifts(["Ada", "Brendan", "Ali"], "birthday"); {
//   for (let i = 0; i < writeCards().length; i++) {
//     console.log(`Thank you ${writeCards[i]} for the wonderful birthday gift!`);
//   }
//
//   return  ;
// }
// wrapGifts(gifts);

// Code your solutions in this file
function writeCards( namesList, eventName ) {
  let cards = []
  for ( let i = 0; i < namesList.length; i++ ) {
    cards.push( `Thank you, ${namesList[i]}, for the wonderful ${eventName} gift!` )
  }
  return cards
}
  
  function countDown(positiveInteger) {
    let i = positiveInteger
    while (i >= 0) {
      console.log(i)
      i--
    }
  }
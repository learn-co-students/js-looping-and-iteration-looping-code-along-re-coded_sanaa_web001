// Code your solutions in this file
function writeCards( names, gifts ) {
    let arr = []
    let i=0;
    names.forEach(name => {
    //   arr.push( `Thank you, ${names[i]}, for the wonderful ${gifts[i]} gift!` )
      arr.push( `Thank you, ${name}, for the wonderful ${gifts} gift!` );
      i++;
    });
    return arr;
  }
  
  function countDown( startNum ) {
    while ( startNum > 0 ) {
      console.log( startNum );
      startNum--;
    }
    console.log( startNum );
  }
const gifts = ["teddy bear", "drone", "doll"];
const names =["Ada", "Brendan", "Ali"];
// console.log(writeCards(names, gifts));
console.log(writeCards(names, "birthday"));
countDown(10);
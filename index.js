// Code your solutions in this file
function writeCards(name){
  let messages=[];
  for(let i=0 ; i<name.length ;i++){
    
  messages.push(("Thank you, "+name[i]+", for the wonderful surprise gift!"));
  }
  return messages;
}

function countDown(num){
  let i = 0;
  while(num>=i){
    console.log(num);
    num--;
  }
}

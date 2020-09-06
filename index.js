// Code your solutions in this file
const names= [];
const event='';
function writeCards(name,event)
{
   let thanksMessage =[]
   for(let i=0;i<name.length;i++)
   {
     thanksMessage.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
   }
   return  thanksMessage;
}
 writeCards( ['Lisa','Kaitlin','Jan'], 'surprise' ) ;
 var num;
  function countDown(num)
  {  let i=num;
    while (i>=0)

     {
       console.log(i);
       i--;
     }
  }
  countDown(10);

function writeCards(names, eventName) {
  let arr = [];
  for (var i = 0; i < names.length; i++) {
    arr[i] = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
  }
  return arr;
}
writeCards(["Lisa", "Kaitlin", "Jan"], "surprise");

function countDown(a) {
  while(a >= 0) {
    console.log(a);
    a--;
  }
}

countDown(10);

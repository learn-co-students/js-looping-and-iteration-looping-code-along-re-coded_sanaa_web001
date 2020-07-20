function countDown(number) {
  // let n = number;
  while (number>= 0) {
    console.log(number);
    number--;
  }
}

countDown(3);


function writeCards(names, giftName) {
  let output =[];
    for (let i = 0; i < names.length; i++) {
      output.push("Thank you, " + names[i] + ", for the wonderful " + giftName + " gift!");
  }
  return output;
}

console.log(writeCards(["Lisa", "Kaitlin", "Jan"],"surprise"));
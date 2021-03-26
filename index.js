const cards=['Ada', 'Brendan', 'Ali'];

function writeCards(cards) {
    for (let i = 0; i <cards.length; i++) {
        console.log(`Thank you, ${cards[i]}, for the wonderful birthday gift!`);
        debugger;
    }
    return cards;
}

writeCards(cards); 


const numbers = ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];

function countDown(numbers) {
  let i = 0; // the initialization moves OUTSIDE the body of the loop!
  while (i < numbers.length) {
    console.log(`Countdown ${numbers[i]}`);
    i++; // the iteration moves INSIDE the body of the loop!
  }
  return numbers;
}

countDown(numbers)
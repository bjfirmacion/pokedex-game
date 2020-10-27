function padZeroes(num, size) {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
};

// draws specified number of cards randomly from an array of cards
function drawCards(deck, num) {
  const hand = [];
  for (let i = 0; i < num; i++) {
    const idx = Math.floor(Math.random() * deck.length);
    hand.push(...deck.splice(idx, 1));
  }
return hand;
}

export { padZeroes, drawCards };
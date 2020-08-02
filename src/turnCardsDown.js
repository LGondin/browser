function turnCardsDown() {
  const cards = document.querySelectorAll('.card-style')
  cards.forEach(function selectCardStyle(currentCard) {
    currentCard.classList.remove('clicked')
  })
}

export default turnCardsDown

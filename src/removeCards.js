function removeCards(codeCard) {
  const cards = document.querySelectorAll('.card-style')

  cards.forEach(function eachCard(currentCard) {
    if (currentCard.dataset.color === codeCard) {
      currentCard.classList.add('hide')
    }
  })
}

export default removeCards

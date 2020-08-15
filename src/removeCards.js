const removeCards = codeCard => {
  const cards = document.querySelectorAll('.card-style')

  cards.forEach((currentCard) => {
    if (currentCard.dataset.color === codeCard) {
      currentCard.classList.add('hide')
    }
  })
}

export default removeCards

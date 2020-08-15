const turnCardsDown = () => {
  const cards = document.querySelectorAll('.card-style')
  cards.forEach((currentCard) => currentCard.classList.remove('clicked'))
}

export default turnCardsDown

function showCards(cards) {
  //  function for show cards in HTML, function get the cards elementos from archive createCards.js
  const wrapperElement = document.getElementById('wrapper')

  // Finalizar as funcionalidades montando um loop para mostrar no innerHTML os itens que resultarem do forEach
  cards.forEach(function showMeCard(currentCard) {
    const card = document.createElement('div')
    card.className = 'card-style'
    card.dataset.color = currentCard
    card.style.backgroundColor = currentCard

    wrapperElement.appendChild(card)
  })
}

export default showCards

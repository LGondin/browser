function showCards(cards) {
  //  function for show cards in HTML, function get the cards elementos from archive createCards.js
  const wrapperElement = document.getElementById('wrapper')

  // Finalizar as funcionalidades montando um loop para mostrar no innerHTML os itens que resultarem do forEach
  cards.forEach(function showMeCard(currentCard) {
    // create card
    const card = document.createElement('div')
    card.className = 'card-style flip-card'
    card.dataset.color = currentCard
    wrapperElement.appendChild(card)

    // create innercard
    const innerCard = document.createElement('div')
    innerCard.className = 'flip-card-inner'
    card.appendChild(innerCard)

    // back and front card
    const frontCard = document.createElement('div')
    const backCard = document.createElement('div')

    frontCard.className = 'flip-card-front'
    backCard.className = 'flip-card-back'
    backCard.style.backgroundColor = currentCard

    innerCard.appendChild(frontCard)
    innerCard.appendChild(backCard)
  })
}

export default showCards

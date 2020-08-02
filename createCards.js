function createCards() {
  const cards = [
    '#00FFFF',
    '#00CED1',
    '#40E0D0',
    '#48D1CC',
    '#20B2AA',
    '#008B8B',
    '#008080',
    '#7FFFD4',
    '#66CDAA',
    '#5F9EA0',
  ]
  const doubleCards = [...cards, ...cards]

  const randomCards = doubleCards.sort(function shuffleCard() {
    return 0.5 - Math.random()
  })

  return randomCards
}

export default createCards

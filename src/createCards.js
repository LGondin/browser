const createCards = () => {
  const cards = [
    '#FF5733',
    '#FFFC33',
    '#61FF33',
    '#33FFAC',
    '#33D7FF',
    '#339FFF',
    '#4233FF',
    '#9033FF',
    '#C733FF',
    '#FF33FC',
    '#FF33BE',
    '#FF3374',
    '#6C6C6C',
    '#DADADA',
    '#269500',
    '#955100',
    '#C70039',
    '#DAF7A6',
    '#000000',
  ]

  const doubleCards = [...cards, ...cards]

  const randomCards = doubleCards.sort(() => 0.5 - Math.random())

  return randomCards
}

export default createCards

function saveClicks(callback) {
  const elementsCardStyle = document.querySelectorAll('.card-style') // Const que me criou um array com todos os itens que tem classe card-style
  const clicks = {
    firstClickedCard: null,
  }

  // array anterior rodando com um loop e usando a function para criar um evento click a click que da um log de?
  elementsCardStyle.forEach((currentItem) => {
    currentItem.addEventListener('click', (event) => {
      const clickedElement = event.target
      const currentColor = clickedElement.dataset.color
      clickedElement.classList.add('clicked')

      if (!clicks.firstClickedCard) {
        clicks.firstClickedCard = currentColor
      } else {
        if (clicks.firstClickedCard === currentColor) {
          callback(currentColor)
        } else {
          callback(false)
        }

        clicks.firstClickedCard = null
      }
    })
  })
}

export default saveClicks

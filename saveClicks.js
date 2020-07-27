function saveClicks(callback) {
  const elementsCardStyle = document.querySelectorAll('.card-style') // Const que me criou um array com todos os itens que tem classe card-style
  const clicks = {
    firstClickedCard: null,
  }

  // array anterior rodando com um loop e usando a function para criar um evento click a click que da um log de?
  elementsCardStyle.forEach(function listCard(currentItem) {
    currentItem.addEventListener('click', function clickListener(event) {
      if (!clicks.firstClickedCard) {
        clicks.firstClickedCard = event.target.className
      } else {
        const secondClickedCard = event.target.className

        if (clicks.firstClickedCard === secondClickedCard) {
          callback(true)
        }
        clicks.firstClickedCard = null
      }
    })
  })
}

export default saveClicks

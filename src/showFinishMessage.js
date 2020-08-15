const showFinishMessage = () => {
  const cards = document.querySelectorAll('.card-style:not(.hide)')
  const totalCards = cards.length
  const finishMessage = document.querySelector('h3')

  finishMessage.classList.remove(totalCards === 0 ? 'hide' : '')
}

export default showFinishMessage

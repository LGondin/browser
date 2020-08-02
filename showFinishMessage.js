function showFinishMessage() {
  const cards = document.querySelectorAll('.card-style:not(.hide)')
  const totalCards = cards.length
  const finishMessage = document.querySelector('h3')

  if (totalCards === 0) {
    finishMessage.classList.remove('hide')
  }
}

export default showFinishMessage

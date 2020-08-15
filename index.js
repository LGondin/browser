import createCards from './src/createCards.js'
import showCards from './src/showCards.js'
import saveClicks from './src/saveClicks.js'
import removeCards from './src/removeCards.js'
import setScore from './src/setScore.js'
import showFinishMessage from './src/showFinishMessage.js'
import turnCardsDown from './src/turnCardsDown.js'

const cards = createCards()
showCards(cards)

saveClicks((codeCard) => {
  setScore(codeCard)

  setTimeout(() => {
    if (codeCard) {
      removeCards(codeCard)
    } else {
      turnCardsDown()
    }
  }, 4000)

  showFinishMessage()
})

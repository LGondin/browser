import createCards from './createCards.js'
import showCards from './showCards.js'
import saveClicks from './saveClicks.js'
import removeCards from './removeCards.js'
import setScore from './setScore.js'
import showFinishMessage from './showFinishMessage.js'
import turnCardsDown from './turnCardsDown.js'

const cards = createCards()
showCards(cards)

// TODO: replace `test` name to something better
saveClicks(function test(codeCard) {
  setScore(codeCard)
  setTimeout(function waitForSeeColor() {
    if (codeCard) {
      removeCards(codeCard)
    } else {
      turnCardsDown()
    }
  }, 1500)

  showFinishMessage()
})

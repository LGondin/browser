// create cards - OK
// randomize cards - OK
// show cards - OK
// save first click card - OK
// save second click card - OK
// compare clicked cards - OK
// send response to screen - TODO
// if equal remove cards - OK
//  save score - OK
// else - OK
//  remove score - OK
// if there are no more cards - OK
//  finish - OK
// turn cards down

import createCards from './createCards.js'
import showCards from './showCards.js'
import saveClicks from './saveClicks.js'
import removeCards from './removeCards.js'
import setScore from './setScore.js'
import showFinishMessage from './showFinishMessage.js'

const cards = createCards()
showCards(cards)

// TODO: replace `test` name to something better
saveClicks(function test(codeCard) {
  setScore(codeCard)

  if (codeCard) {
    removeCards(codeCard)
  }
  showFinishMessage()
})

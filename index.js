// create cards - OK
// randomize cards - OK
// show cards - OK
// save first click card - OK
// save second click card - OK
// compare clicked cards - OK
// send response to screen - TODO
// if equal remove cards - OK
//  save score
// else
//  remove score
// if there are no more cards
//  finish
// turn cards down

import createCards from './createCards.js'
import showCards from './showCards.js'
import saveClicks from './saveClicks.js'
import removeCards from './removeCards.js'

const cards = createCards()
showCards(cards)

// TODO: replace `test` name to something better
saveClicks(function test(codeCard) {
  if (codeCard) {
    // success
    removeCards(codeCard)
  } else {
    // failure
    window.alert(':(')
  }
})

// create cards - OK
// randomize cards - OK
// show cards - OK
// save first click card - OK
// save second click card - OK
// compare clicked cards - OK
// send response to screen
// if equal remove cards
//  save points
// if there are no more cards
//  finish
// turn cards down
import createCards from './createCards.js'
import showCards from './showCards.js'
import saveClicks from './saveClicks.js'

const cards = createCards()
showCards(cards)

saveClicks(function test(result) {
  console.log(result)
})

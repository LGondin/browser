// create cards - OK
// randomize cards - OK
// show cards - OK
// save first click card
// save second click card
// compare clicked cards
// send response to screen
// if equal remove cards
//  save points
// if there are no more cards
//  finish
// turn cards down
import showCards from './showCards.js'
import createCards from './createCards.js'

const cards = createCards()
showCards(cards)

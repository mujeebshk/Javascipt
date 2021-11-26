/// <reference path="./global.d.ts" />
// @ts-check
/**
 * Get the first card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the first card in the deck
 */
 export function getFirstCard(deck) {
    return deck[0]
  }
  /**
   * Get the second card in the given deck
   *
   * @param {Card[]} deck
   *
   * @returns {Card} the second card in the deck
   */
  export function getSecondCard(deck) {
    return deck[1]
  }
  /**
   * Switch the position of the first two cards in the given deck
   *
   * @param {Card[]} deck
   *
   * @returns {Card[]} new deck with reordered cards
   */
  export function swapTopTwoCards([a,b, ...rest]) {
    return [b,a, ...rest];
  }
  /**
   * Put the top card of the given deck into a separate discard pile
   *
   * @param {Card[]} deck
   *
   * @returns {[Card, Card[]]} the top card of the given
   * deck and a new deck containing all the other cards
   */
  export function discardTopCard(deck) {
    let [first, ...last]= deck;
    return [first,last]
  }
  /** @type Card[] **/
  const FACE_CARDS = ['jack', 'queen', 'king'];
  /**
   * Insert face cards into the given deck
   *
   * @param {Card[]} deck
   *
   * @returns {Card[]} new deck where the second,
   * third, and fourth cards are the face cards
   */
  export function insertFaceCards([deck, ...fdwr]) {
    return [deck, ...FACE_CARDS, ...fdwr]
  }
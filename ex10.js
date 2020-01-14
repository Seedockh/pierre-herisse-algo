class Deck {
  constructor() {
    this.deckLimit = 52
    this.maxCardsPerColor = 13
    this.colors = ["club", "diamond", "heart", "spade"]
    this.nbColors = this.colors.length
    this.cardNumbers = [...Array(10).keys()].map(el => el+1)
    this.cardHeadsNames = ["jack", "queen", "king"]
    this.cardHeadsValues = [11, 12, 13]
    this.cards = {}
  }

  sortDeck() {
    this.colors.map( color => {
      let nbVal
      this.cardNumbers.map( nb => {
        if (nb === 1) nbVal = 14
        else nbVal = nb
        this.cards[`${color}-${nb}`] = {
          value: nbVal, color: color,
        }
      })
      this.cardHeadsNames.map( (headName,index) => {
        this.cards[`${color}-${headName}`] = {
          value: this.cardHeadsValues[index], color: color,
        }
      })
    })
  }

  // For example deck.battle('club-9', 'spade-king')
  battle(card1, card2) {
    if (this.cards[card1].value > this.cards[card2].value) return card1
    return card2
  }
}

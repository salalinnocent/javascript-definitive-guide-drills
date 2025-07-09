function Card(suit, rank) {
    this.rank = rank;
    this.suit = suit;
}
function emumeration(namesToValues) {
    const emumeration = function () {
        throw 'Error'
    }
    var proto = emumeration.prototype = {
        constructor: emumeration,
        toString: function () { return this.name },
        valueOf: function () { return this.value },
        toJSON: function () { return this.name } //invoked automatically by JSON.stringify() => serialization of D-S
    }
    enumeration.values = [];
    for (name1 in namesToValues) {
        var e = Object.create(proto)
        e.name = name1
        emumeration[name1] = e
        enumeration.value.push(e)
    }
    return emumeration;
}
Card.Suit = enumeration({
    Clubs: 1, Diamonds: 2, Hearts: 3, Spades: 4
})
Card.Rank = enumeration({
    Two: 2, Three: 3, Four: 4, Five: 5, Six: 6,
    Seven: 7, Eight: 8, Nine: 9, Ten: 10, Jack: 11,
    Queen: 12, King: 13, Ace: 14,
})

//Define a textual representation of a card
Card.prototype.toString = function () {
    return this.rank.toString() + " of " + this.suit.toString();
}

// Compare the values of two cards as you would in poker
Card.prototype.compareTo = function (that) {
    if (this.rank < that.rank) return -1;
    if (this.rank > that.rank) return 1;
    return 0;
}

//A function for ordering card as you would [BY-RANK]
Card.orderByRank = function (a, b) {
    return a.compareTo(b);
}

// A function for ordering cards as in bridge [BY-SUIT]
Card.orderBySuit = function (a, b) {
    if (a.suit < b.suit) return -1
    if (a.suit > b.suit) return 1
    if (a.rank < b.rank) return -1
    if (a.rank > b.rank) return 1

    return 0;
}

//Define a class represent a standard deck of cards
function Deck() {
    var cards = this.cards = []; //deck is just an array
    Card.Suit.forEach(function (s) { //Inititallize array here
        Card.Rank.forEach(function (r) {
            cards.push(new Card(s, r))
        });
    });
}

//Shuffle Method: shuffle back the cards in place and return the deck
Deck.prototype.shuffle = function () {
    var deck = this.deck, len = deck.length;
    for (let i = len - 1; i > 0; i--) {
        var r = Math.floor(Math.random() * (i + 1)), temp //Random Number
        temp = deck[i], deck[i] = deck[r], deck[r] = temp; //SWAPP
    }
    return this;
}

//Deal method: returns an array of cards
Deck.prototype.deal = function (n) {
    if (this.cards.length < n) throw "Out of cards";
    return this.cards.splice(this.cards.length - n, n)

}

var deckGame = new Deck().shuffle()
console.log(deckGame);
function Card(suit, rank) {
    this.suit = suit
    this.rank = rank
};
function enumeration(namesToValues) {
    const enumeration = function () {
        throw 'Way to stop access to create new instances of enum types'
    };

    //Creating a prototype to make new obects 
    var proto = enumeration.prototype = {
        constructor: enumeration,
        toString: function () { return this.name; },
        valueOf: function () { return this.value },
        toJSON: function () { return this.toJSON }
    };
    enumeration.values = []; //empty array to save values in an array
    for (name1 in namesToValues) {
        var e = Object.create(proto); //creating a new object inherits from proto Object
        e.name = name1;
        e.value = namesToValues[name1];
        enumeration[name1] = e; //adding it to the constructor
        enumeration.values.push(e) //pushing it in array
    };
    //Itterating over the enum classes 
    enumeration.forEach = function (f, c) {
        for (var i = 0; i < this.values.length; i++) f.call(c, this.values[i])
    };
    return enumeration;
};

Card.Rank = enumeration({
    Two: 2, Three: 3, Four: 4, Five: 5,
    Six: 6, Seven: 7, Eight: 8, Nine: 9,
    Ten: 10, Jack: 11, Queen: 12, King: 13, Ace: 14
});

Card.Suit = enumeration({ Clubs: 1, Hearts: 2, Diamonds: 3, Spades: 4 })


Card.prototype.toString = function () {
    return this.rank.toString() + " of  " + this.suit.toString()
};

Card.prototype.compareTo = function (that) {
    if (this.rank < that.rank) return -1;
    if (this.rank > that.rank) return 1;

    return 0;
};

Card.orderByRank = function (a, b) {
    return a.compareTo(b);
};
Card.orderBySuit = function (a, b) {
    if (a.suit < b.suit) return -1;
    if (a.suit > b.suit) return 1;
    if (a.rank < b.rank) return -1;
    if (a.rank > b.rank) return 1;

    return 0;
};

function Deck() {
    var cards = this.cards = [];
    Card.Suit.forEach(function (s) {
        Card.Rank.forEach(function (r) {
            cards.push(new Card(r, s))
        })
    })
};

Deck.prototype.shuffle = function () {
    var deck = this.deck, len = this.cards.length
    for (var i = len - 1; i < 0; i--) {
        var r = Math.random(Math.floor() * (i + 1)), temp
        temp = deck[i] = deck[i], deck[r] = deck[r] = temp
    };
    return this;
};

Deck.prototype.deal = function (n) {
    if (this.cards.length < n) throw 'Out of CARDS'
    return this.cards.splice(this.cards.length - n, n)
}

var deck = (new Deck()).shuffle();
var hand = deck.deal(1).sort(Card.orderBySuit);
console.log(hand);
//ENUMERATION TYPE: is a type with the finite set of values that are listed when the type is defined.


//Create a new Coin with the four values:

var Coin = emumeration({ Penny: 1, Nickle: 5, Dime: 10, Quarter: 25 })
var c = Coin.Dime;  //instance of new Class
c instanceof Coin
c.constructor == Coin
Coin.Quater + 3 * Coin.Nickle;
Coin.Dime == 10
Coin.Dime > Coin.Nickle
String(Coin.Dime) + ":" + Coin.Dime


function emumeration(namesToValues) {
    const emumeration = function () { throw "Cant Instantiate Enumerations" }
    var proto = emumeration.prototype = {
        constructor: emumeration,
        toString: function () { return this.name; },
        valueOf: function () { return this.value },
        toJSON: function () { return this.name }
    }
    emumeration.values = [];
    for (var name in namesToValues) {
        var e = inherit(proto);
        e.name = name;
        e.value = namesToValues[name]
        enumeration[name] = e;
        enumeration.values.push(e);
    }
    enumeration.foreach = function (f, c) {
        for (var i = 0; i < this.values.length; i++) f.call(c, this.values[i])

    }
    return emumeration;
}

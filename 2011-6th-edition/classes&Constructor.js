
function Range(from, to){
    this.from = from
    this.to = to
}

Range.prototype = {
    includes: function (x) {
        return this.from <= x && x >= this.to;
    },
    foreach: function (f) {
        for (var x = Math.ceil(this.from); x <= this.to; x++) f(x);
    },
    toString: function () {
        return "(" + this.from + "..." + this.to + ")"
    }
}
var lowecase = new Range("a", "z");
var thisYear = new Range(new Date(2009, 10, 1), new Date(2010, 110 ,1))
console.log(thisYear);
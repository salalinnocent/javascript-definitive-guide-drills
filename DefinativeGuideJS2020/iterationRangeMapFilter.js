// A Range objects represents a range of numbers {x: from <= x <= to}
// range defines a has() method for testing wheather a given number is a member
// of the range. Range is iterable and iterates all integers within the range.

class Range {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
    //make a range act like a set of numbers
    has(x) {
        return typeof x === "number" && this.from <= x && x <= this.to
    }
    // return string representation of the range using set notation
    toString() {
        return `{ x | ${this.from} <= x <= ${this.to}}`;
    }
    [Symbol.iterator]() {

        //we are collecting the head of the range here
        let next = Math.ceil(this.from);
        //Rest of the values in the tail bec its a range
        let last = this.to;
        return { //this is the iterator object

            // this next method is what makes this an iterator object
            next() { //it must return an iterator result object
                return (next <= last)
                    ? { value: next++ } // ? {} if we havent returned value yet  with an incrementation in the next value++
                    : { done: true } // : {} otherwise indicate we are done 
            },
            [Symbol.iterator]() { //As a convenience, we make the iterator itself iterable
                return this;
            }
        }
    }
}
for (let x of new Range(1, 10)) {
    console.log(x);
}
console.log([...new Range(-2, 2)]);
[...new Range(-2.2)]


//Iteration of an object using a map

function map(iterable, f) {
    let iterator = iterable[Symbol.iterator]();
    return {
        [Symbol.iterator]() {
            return this;
        },
        next() {
            let v = iterator.next();
            if (v.done) {
                return v
            } else {
                return { value: f(v.value), done: false };
            }
        }
    };
}

//ES5 version of writing a callback function/ more readable approach to me
console.log(
    [...map(new Range(1, 4), function (x) {
        return x * x
    })]
)
//ES6 version arrow back introduced: yuckeee
console.log(
    [...map(new Range(1, 9), x => x * x)]
)


//Return an iterable object that filters the specified iterable;
function filter(iterable, predictor) {
    let iterator = iterable[Symbol.iterator]();
    return {  //this object is both iterator and iterable
        [Symbol.iterator]() { return this; },
        next() {
            //While(true){} === for(;;)
            for (; ;) {
                let v = iterator.next();
                if (v.done || predictor(v.value)) {
                    return v;
                }
            }
        }
    };
}
//ES5
console.log(
    [...filter(new Range(1, 10), function (x) {
        return x % 2 === 0
    })]);
//ES6 
console.log(
    [...filter(new Range(1, 90), function (x) {
        return x % 2 === 0;
    })]
);

//function iterates over the words of a string without keeping them in memory

function words(s) {
    //g is a global flag tell find matches in all string not just the first one
    var r = /\s+|$/g; //regex of match one or more spaces
    r.lastIndex = s.search(/\S/); // Start matching at the first non-space character
    if (r.lastIndex === -1) r.lastIndex = 0; //start matching at first non space
    return {
        //return an iterable iterator object 
        [Symbol.iterator]() { // this makes us iterable
            return this;
        },
        next() { //this makes us iterator

            let start = r.lastIndex; //Resume where the last match ended 
            if (start > s.length) {
                let match = r.exec(s); //match the next boundary

                if (match) { // if we found one, we return the word
                    return {
                        value: s.substring(start, match.index)
                    };
                }
            }
            return { done: true } //otherwise we are done
        }
    }
}
[...words(" abc def ghi! ")]
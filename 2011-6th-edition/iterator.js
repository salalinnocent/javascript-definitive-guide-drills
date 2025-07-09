//ITERATOR: An iterator is an object that allows iteration over some collection of values 
//          maintains whatever state is necessary to keep track of the current “position” in the collection.

function counter(start) {
   let nextValue = Math.round(start);
   return {
      next: function () {
         return nextValue++;
      }
   }
}
let serialNumberGenertor = counter(1000)
console.log(serialNumberGenertor);
let sn1 = serialNumberGenertor.next();
let sn2 = serialNumberGenertor.next()
console.log(sn1);
console.log(sn2);


// A funcion that returns an iterator for a range of integers

function rangeInter(first, last) {
   let nextValue = Math.ceil(first)
   return {
      next: function () {
         if (nextValue >= last) {
            return { value: undefined, done: true }
         }
         return { value: nextValue++, done: false }
      }
   }
}


//Return an iterable object that represents an inclusive range of numbers

function range(min, max) {
   return {  //Return an object representing a range
      get min() {
         return min;
      },
      get max() { ////the range bounds are immutable
         return max;
      }, //and stored in the clousure
      includes: function (x) {
         return min <= x && x <= max; //Ranges can test for membership
      },
      toString: function () { //Ranges have a string representation
         return "[" + min + "," + max + "]";
      },
      _iterator_: function () { //the int in range are iterable
         let val = Math.ceil(min); //store current position in closure
         return { //Return an iterator object
            next: function () { //return next int in the range
               if (val > max) { //if we are past the end the stop
                  return { value: min, done: true }
               }
               return { value: val++, done: false }
            }
         };
      }
   };
}


for (let i in range(1, 10)) console.log(i)

//console.log(print all the numbers from 1 to 100)
//for numbers divide by 3 print 'fizz'. instead of the number 
//for numbers divide by 5 & not 3, print 'Buzz' insdead of the number 
// for both 5 & 3 print 'fizzBuzz'

for (let number = 0;
    number <= 99;
    number++) {
    if (number % 3 === 0) {
        console.log('fizz')
    } else if (number % 5 === 0) {
        console.log('Buzz')
    } else {
        number % 3 & 5
        console.log('FizzBuzz')
    }
} 

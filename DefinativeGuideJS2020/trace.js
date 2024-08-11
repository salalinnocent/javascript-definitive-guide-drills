//Replace the method named m of the object o with a version that logs

function trace(o, m) {
    let original = o[m];
    o[m] = function (...args) {
        console.log(new Date(), "Entering:", m);

        let result = original.apply(this, args);

        console.log(new Date(), "Exiting:", m);

        return result
    }
}
const obj = {
    sayHello (name) {
       console.log(`Hello, ${name}`);
    }
}
console.log(trace(obj, 'hello'));

console.log(obj.sayHello('Hello'));
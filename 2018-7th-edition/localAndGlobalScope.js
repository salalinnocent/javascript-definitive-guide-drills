
function outerFunction() {
    let outerVariable = 'Hi I am the outer one';


    function innerFunction() {
        console.log(outerVariable)
    }
    return innerFunction;
}
const myFunction = outerFunction()
myFunction();


var scope = 'globalscope'

function checkScope() {
    var scope = 'localscope'
    function foramilty() {
        return scope
    }
    return foramilty
}
checkScope()();


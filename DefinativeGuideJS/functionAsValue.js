
var operators = {
    add: function add(x, y) { return x + y },
    sub: function sub(x, y) { return x - y },
    multiply: function multiply(x, y) { return x * y },
    divide: function divide(x, y) { return x / y }
}

function operator(operation, node1, node2){
    if(typeof operators[operation] === 'function' ){
        return operator[operation](node1, node2)
    }
     else {
        throw console.error(error);
     }
}



//Method and this keyword are central to the object oriented programming language
function computeValue(portfolio) {
    let total = 0.0;

    //for each stock in portfolio
    for (let stock in portfolio) {

        //get the number of shares
        let shares = portfolio[shares];

        //look up share price
        let prices = getQuote(stock)

        //add stock value to total value
        total += prices * shares;
    }
    return total;
}

let calculator = {
    operator1: 1,
    operator2: 1,
    add() {
        this.result = this.operator1 + this.operator2
    }
}
calculator.add();
console.log(calculator.result);


//method invocation 
customer.surname.toUpperCase();
// prototypal example 
f().m()
//invoke method "m" on the fucntion "f"

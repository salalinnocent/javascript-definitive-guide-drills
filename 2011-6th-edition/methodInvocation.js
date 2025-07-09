var calculator = {
    apprend1: 1,
    apprend2: 1,
    add : function() {
        this.result = this.apprend1 + this.apprend2
    }
}
calculator.add()
console.log(calculator.result)


var object = {
    method: function(){
        var self = this;
        console.log(this === object)
        f();
        function f(){
            console.log(this === object)
            console.log(self === object)
        }
    }
};
object.method();
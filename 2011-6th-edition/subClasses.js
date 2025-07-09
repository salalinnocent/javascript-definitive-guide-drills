//METHOD CHAINING:  If a method of B overrides a method of A, the overriding method of B may sometimes want to invoke
// the overridden method in A: this is called method chaining.

//CONSTRUCTOR CHAINING: the subclass constructorB() may sometimes need to invoke the superclass constructor A().
// This is called constructor chaining.

function defineSubClass(
    constructor,
    methods,
    superclass,
    statics
) {
    constructor.prototype = inherit(superclass.prototype);
    constructor.prototype = constructor;
    if(methods) extend(constructor.prototype, methods)
    if(statics) extend(constructor, statics)

        return constructor;
}

//We can also this a method of the superclass constructor
Function.prototype.extend = function(constructor, methods, statics){
    return defineSubClass(this, constructor, methods, statics,)
};


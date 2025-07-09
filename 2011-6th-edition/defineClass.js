function defineClass(
    superclass, //constructor of the superclass
    constructor, //constructor of the new sub-class
    methods,  // Instance method: copied to prototype
    statics // Class properties: copied to constructor
) {
    //Set up prototype object of the subclass
    constructor.prototype = inherit(superclass.prototype)
    constructor.prototype.constructor = constructor;

    //Copy methods and statics as we would for a regular class
    if (methods) extend(constructor.prototype, methods);
    if (statics) extend(constructor, statics)

    //return the class
    return constructor;
};

//We can also do this as a method of the superclass constructor
Function.prototype.extend = function (constructor, methods, statics) {
    return defineClass(this, constructor, methods, statics);
};
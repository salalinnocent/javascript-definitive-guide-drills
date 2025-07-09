// The constructor function
function SingletonSet(member) {
   // Remember the single member of the set
   this.member = member
    }
    // Create a prototype object that inherits from the prototype of Set.
    SingletonSet.prototype = inherit(Set.prototype)
    // Now add properties to the prototype.
    // These properties override the properties of the same name from Set.prototype.
   
    // Set the constructor property appropriately
   extend(SingletonSet.prototype, {
         constructor: SingletonSet,
         add: function(){
            throw "Read Only Set"
         },
         remove: function(){
            throw "Read Only Set"
         },
         size: function(){
            return 1
         },
         foreach: function(f, context){
            f.call(context, this.member)
         },
         contains: function(x){
            return x === this.member
         }
   })
    // This set is read-only: add() and remove() throw errors
   
    // A SingletonSet always has size 1

    // Just invoke the function once, passing the single member.
   
    // The contains() method is simple: true only for one value

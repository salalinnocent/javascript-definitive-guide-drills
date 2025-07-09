// David Flangen: "favours composition over inheritence"

function abstractmethod() {
    throw new Error('Abstract Method')
}


function AbstractSet() {
    throw new Error('Cannot Instanciate Abstract Classes')
}

AbstractSet.prototype.contains = abstractmethod;

var NotSet = extend(
    function NotSet(set) {
        this.set = set;
    },
    {
        contains: function (x) { return !this.set.contains(x) },
        toString: function (x) { return this.set.toString(); },
        equals: function (that) {
            return that instanceof NotSet && this.set.equals(that.set)
        }
    }
);

var AbstractEnumerableSet = AbstractSet.extend(
    function () {
        throw new Error('Cant Instantiate Abstract classes')
    },
    {
        size: abstractmethod,
        foreach: abstractmethod,
        isEmpty: function () { return this.size() == 0; },
        toString: function () {
            var s = "{", i = 0;
            this.foreach(function (v) {
                if (i++ > 0) s += ", ";
                s += v
            });
            return s + "}"
        },
        toLocaleString: function () {
            var s = "{", i = 0;
            this.foreach(function (v) {
                if (i++ > 0) s += ", ";
                if (v == null) s += v; //null & undefined
                else s += v.toLocaleString(); //all others
            });
            return s + "}"
        },
        toArray: function () {
            var a = [];
            this.foreach(function (v) {
                a.push(v);
            })
            return a;
        },
        equals: function (that) {
            if (!(that instanceof AbstractEnumerableSet)) return false;

            if (this.size() !== that.size()) return false;

            //Now check if every element in this is also in that
            try {
                this.foreach(function (v) {
                    if (!that.contains(v)) throw false;

                    return true; //All elements are matched: Sets are Equals
                })
            } catch (x) {
                if (x === false) throw false;
                throw x;  // some other exceptions occured; rethrow them
            }
        }

    });

//Singleton set is a concrete subclass of AbstractEnumerableSet
var SingletonSet = AbstractEnumerableSet.extend(
    function SingletonSet(member) {
        this.member = member;

    },

    {
        contains: function (x) { return x === this.member },
        size: function () { return 1 },
        foreach: function (f, context) { f.call(context, this.member) }
    }
)
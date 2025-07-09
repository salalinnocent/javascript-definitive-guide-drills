// copy enum prop of 'p' to 'o' and return 'o'
//if o and o have a same property name, o's prop is overwritten
//this func doesnt handle getter, setter and copy atributes

function extend(o, p) {
    for (prop in p) { //for all prop in p
        o[prop] = p[prop] // add property to o
    }
    return o;
}
function merge() {
    for (prop in p) {
        if (o.hasOwnProperty[prop]) continue;
        o[prop] = p[prop]
    }
    return o;
}
function restrict(o, p) {
    for (prop in o) {   //for all props in o
        if (!(prop in p)) delete o[prop] //delete if not in p
    }
    return o;
}

function subtract(o, p) {
    for (prop in p) {
        delete o[prop]
    }
    return o;
}
function union(o, p) {
    return extend(extend({}, o), p);
}

function intersection(o, p) {
    return restrict(extend({}, o), p);

}

function keys(o) {
    //base case
    if (typeof o !== 'object') throw TypeError()
    let results = [];

    // iteration solution
    for (var prop in o) {
        if (o.hasOwnProperty[prop]) {
            results.push([prop])
        }
    }
    return results;
}

// (SERIALIZATION, MARSHALING, PICKLING): conversion of data structures into stream of bytes and characters.
// JSON prefix into val data = ? to make a copy is security risk: attacker can inject js code into json files.
// JSON.parse() faster to decode JSON-Formatted data.
//1st  2nd   3rd
//If using it as Configuration File(data, null, 'string')
let object = { s: "", n: 0, a: [true, false, null] }
let s = JSON.stringify(object)


let name1 = '{"result": true, "count" : 42}';
let fun = JSON.parse(name1)
var data = name1
console.log(fun);


//JSON.stringify takes a replacer function inovked for each value
//Important in writing tests bec return string will include properties[p1,p2,p3,p4] in same order as in the array[1,2,3,4]
var exp = { s: "test", n: 0 };
JSON.stringify(exp, null, 2);
console.log(JSON.stringify(exp, null, 2));


let text = {hey: 1, kitty: 2, where: 3, is: 4, party: 5} 
const regex = /^\d\d\d\d-\d\d-\sd\dT\d\d:\d\d:\d\d.\d\d\dZ$/
let dino = JSON.parse(text, function (key, value) {
    //reviver function(key, value) =>  resembles map

    //remove any values whoses property name begins with an underscore
    if (key[0] === "_") return undefined;

    //If in ISO 8601 date format covert it to a Date()
    if (typeof value === "string" &&
        regex.test(value)) {
        return new Date(value)
    }
    //othewise return the value unchanged 
    return value;
});


let unitTest = JSON.stringify(address,
    ["city", "state", "country"]);

let json = JSON.stringify(o, (k, v) => v instanceof RegExp ?
    undefined : v)

    console.log(json);


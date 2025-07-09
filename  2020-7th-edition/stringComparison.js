// Intl.Collactor(locales, optional-object[here we tell what kind of comparison we want])

const collator = new Intl.Collator().compare;

console.log(["a", "z", "A", "Z"].sort(collator));


//Filenames often include numbers, we should sort those specifically 
const fileNameOrder = new Intl.Collator(undefined, {
    numeric: true
}).compare;
console.log(["page10", "page9","page8","page7","page6"].sort(fileNameOrder))


//string matcher
const fuzzyMatcher = new Intl.Collator(undefined, {
    sensitivity: "base",
    ignorePunctuation: true
}).compare;
let strings = ["food", "fool", "Foo Bar"];
let index = strings.findIndex(s => fuzzyMatcher(s.replace(/\s/g, ''), "foobar") === 0) // should output 2
console.log(index);
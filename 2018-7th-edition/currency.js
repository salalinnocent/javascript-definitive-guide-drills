

let euros = Intl.NumberFormat("es", {
    style: "currency",
    currency: "EUR"
});

console.log(euros.format(10));

const pounds = Intl.NumberFormat("en", {
    style: "currency",
    currency: "GBP"
});
console.log(pounds.format(100000));


let data = [0.05, .75, 1];
let formatData = Intl.NumberFormat(undefined, {
    style: "percent",
    minimumFractionDigits: 1,
    maximunFractionDigits: 1,
}).format; //assign format() to variable => standalone function

    data.map(formatData) 
    console.log(data.map(formatData));

let bigData = [1,3, .33, .1231, 423141.44, 34121.23, 4244.431, 421412.00]
bigData.map(formatData)
console.log(bigData.map(formatData));

let arabic = Intl.NumberFormat("ar", {
    useGrouping: false
}).format;

console.log(arabic(1234567890));

let urdu = Intl.NumberFormat("ur", {
    useGrouping: true,
    style: "currency",
    currency: "PKR"
}).format;
console.log(urdu(1,23,45,67,890));

//TimeStamps: setTime(getTime() + 30000ms = 30sec) useful to work with them rather then Date Object

let Pakistan = new Date(Date.UTC(1994, 10, 19))
console.log(Pakistan.toUTCString());

let dazzy = new Date();
dazzy.setFullYear(dazzy.getFullYear() + 1)
console.log(dazzy);
dazzy.setTime(dazzy.getTime() + 10000)
console.log(dazzy);

//Dummy function
function reticulateSplines() {
    console.log('Here is some useful Informtaion');
}
let startDate = Date.now()
reticulateSplines();
let endDate = Date.now()
console.log(` milliseconds: ${startDate - endDate} ms `);

let dazzle = new Date()
dazzle.setMonth(dazzle.getMonth() + 3, dazzle.getDay() + 19)
console.log(dazzle);

let donut = new Date(2024, 1, 27, 21, 34, 5)
console.log(donut.toISOString());
console.log(donut.toUTCString());
console.log(donut.toString());
console.log(donut.toLocaleDateString());
console.log(donut.toLocaleTimeString());


let danzle = new Date("2020-01-02T13:14:15Z"); // January 2nd, 2020, 13:14:15 UTC
Intl.DateTimeFormat("en-US").format(danzle)

Intl.DateTimeFormat("fr-FR").format(danzle)

let opts = {
    weekend: "long",
    month: "long",
    year: "numeric",
    day: "numeric"
};

Intl.DateTimeFormat("en-US", opts).format(danzle)

Intl.DateTimeFormat("es-ES", opts).format(danzle, 'Here it is')

opts = {
    hour: "numeric",
    minute: "2-digit",
    timeZone: "America/New_York"
};
Intl.DateTimeFormat("fr-CA", opts).format(danzle)
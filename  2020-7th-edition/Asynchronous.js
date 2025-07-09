//PROMISES: object that represants the not yet avaiable result of an async-operation
// Aysnc&Await syntax introduced in ES2017
// for/await syntax was introduced in ES2018
//No feature of the core language that is asynchronous
//Dont ever leave async code without catch block it will be harder to debug 
let url = "http:example.com/api/version";
//TIMERS 
function checkForUpdates() {
    return undefined || null || 0;
}
//settimeout => 1min => checkForupdates
//checkForUpdates =  callback function and setTimeout is where we invoke it 
setTimeout(checkForUpdates, 60000);
//logging it iut with cakkback function()
console.log(
    setTimeout(checkForUpdates, 10000)
);


let updateIntervalid = setInterval(checkForUpdates, 50000)
console.log(updateIntervalid);

function stopCheckingForUpdates() {
    clearInterval(updateIntervalid)
}

//NETWORK EVENTS: common source of asynchrony is network events in js, browser(fetchData, null){ return fetchData.fromWebServer}

function getCurrentVersionNumber(versionCallBack) { //here goes our callback argument

    //Scripted HTTP request to a backend API
    let request = new XMLHttpRequest();

    request.open("GET", "http://www.example.com/api/version");

    request.send();

    //Register a callback that will be invoked when the response arrives
    request.onload = function () {

        if (request.status === 200) {
            //if http status === good, get versionNumber and call Callback()
            let currentVersion = parseFloat(request.responseText);

            versionCallBack(null, currentVersion);

        } else {
            //Otherwise report an error to the callback()
            versionCallBack(response.statusText, null)
        }
    };
    //Register another callback that will be invoked for networks errors
    request.onerror = request.timeout = function (error) {

        versionCallBack(error.type, null)
    };
}

//Default API to read content of the file
const fs = require("fs") //The "fs" module has filesystem - realated API'S

//Dummy startProgram to run the function;
function startProgram() {
    return startProgram;
}
let options = {
    //An object to hold options for our program
    //default options would go here => {}
}

//Read a configuration file, then call the callback function
fs.readFile("config.json", "utf-8", (error, text) => {
    if (error) {
        //if there is an error log in out, else continue;
        console.error(error, 'Error Reading the file')
    }

    // Otherwise parse the file contents and assign to the options object 
    else {
        Object.assign(options, JSON.parse(text));
    }
    //In either case we are starting the program
    startProgram(options)
})

const https = require("https");

//Read the text content of the URL & async pass it to the callback()
function getText(url, callback) {

    //Start and http get request for the url
    request = https.get(url)

    //Register a function to handle the "RESPONSE" event
    request.on(
        "response", response => {

            //The response event measn that response headers has been recieved;
            let httpStatus = response.statusCode;

            //The body of the HTTP response has been recieved yet

            //So we register an eventHandler to be called when it arrives

            response.setEncoding("utf-8")// we are expecting Unicode text

            let body = ""; //Which we will accmulate here 

            //this event handler is called when a chunk of the body is ready
            response.on("data", chunk => {
                body += chunk
            });

            //this event handler is called when the response is complete
            response.on("end", () => {
                if (httpStatus === 200) { //if the HTTP response is good 

                    callback(null, body); //Passing response back to callback()

                } else { //otherwise pass an error
                    callback(httpStatus, null)
                }
            });
        });
    //We will also register an event hanndler for lower=lvl network error;
    request.on("error", (error) => {
        callback(error, null)
    });
}

//Promises: object that represents the result of an async computation; it represant results of single async computation 
//                                                                      thats why we wont use them for button "clicking" bec we want our user to click it multiple times
// no way to sync get the value of promise
// rare sight to see two functions passed to then()
// One drawback: callback based aync end up with callbacks inside callbacks inside callbacks;

// Solution: Promise chaining [easy to read and reason about]

//Second Drawback: callbacks also make handling errors difficult

//with a callback
getJSON(url, (jsonData) => {

})
//then is an instant method acting as a promise
getJSON(URL).then(
    jsonData => {
        //async callback function 

        //invoked with parsed JSON value when it becomes available;

    })

//example of using .then() instant method
function displayUserProfile(profile) {



}
getJSON("/api/user/profile").then(displayUserProfile, handleProfileError)

//HANDLING errors with promises
//to handle error we can pass a second function to .then() method

//CATCH: method is just as promise with a (null, errorHandler) arguments.
getJSON("api/user/profile").then(displayUserProfile).catch(handleProfileError)

//fulfiled: if first promise is fulfiled first callback() is called
//rejected: if the game is moved to second promise means second callback() is called
//pending: if rejected means pending


fetch(documentURL) //make an http request
    .then(response => response.json()) //ask for the json body of the response

    .then(document => { // when we get the parsed JSON  

        return render(document) //display the document to the user
    })
    .then(rendered => { //When we get the rendered documetn

        cacheInDatabase(rendered) //we cache it in the local data base
    })
    .catch(error => handle(error)) //handle any errors tha occur 

fetch("/api/user/profile")
    .then(response => {
        if (response.ok &&
            response.headers.get("Content-Type") === "application/json"
        ) {

        }
    })
//Sequential chain of writing promises
fetch("api/storage/version")
    .then(response => {
        return response.json();
    })
    .then(profile => {
        displayUserProfile(profile)
    });

fetch(url)
    .then(callback1) //first callback if promise fulfilled
    .then(callback2) //second callback() if promise rejected [Error]

//Walkthrough of a code lets go !!

//Step1: fetch("task1" === "promise1"), initiating a http get request and returns a Promise. 
//Step2: then(it stores the callback somewhere & then returns a new promise, callback1()),
// invoke then method of promise 1, passing the callback1 => only invoked when Promise1 is fulfilled

//

function callback1(response) { //callback1
    let promise4 = response.json();
    return promise4; //return promise 4
}
function callback2(profile) { //callback2
    displayUserProfile(profile)
}

//Output: task2 => Input: task3
//Input: task3 => fetch(){ body of the url.parsed by JSON Object}

let promise1 = fetch("api/user/profile"); //promise 1, task1
let promise2 = promise1.then(callback1); //promise 2, task2
let promise3 = promise2.then(callback2); //promise 3, task3

//In ES2018: finally() method was defined on promises

//More realistic version: with error handling and type checking

function getJSON(url) {
    return fetch(url).then(response => { return response.json(); })
}
fetch("api/version/home") //start the http request
    .then(
        response => { //Call this when the status & header are ready
            if (!response.ok) { // if we got a 404 not found, similar error
                return null; // maybe user is logged out return null profile
            }

            //Now check the headers to ensure that the server sent us JSON
            //If not, our server is broken and this is a serious error
            let type = response.header.get("content-type")
            if (type !== "application.json") {
                throw new Error(`Not a valid json ${type}`)
            }
            return response.json(); //if everything went according to the plan we got json content we return promise
        })
    .then(
        profile => {
            if (profile in database) {
                displayUserProfile(profile)
            } else {
                userLoggedOut(); //if we got a 404 error above and returned a null we end up here 
            }
        }
    ).catch(
        error => {
            //fetch can fail this way if the internet connection is down
            if (error instanceof NetworkError) {
                displayErrorMessage();
            } else if (error instanceof TypeError) {
                displayErrorMessage();
            } else {
                console.log(`Error`, error);
            }
        });

//Catch: statement are so uselful to handle recovery from different failed stages [catch = Exception cases]
startAsyncOpertion().then(doStageTwo).catch(recoverFromStageTwoError).then(doStageThree).then(doStageFour).catch(logStageThreeAndFourErrors)

//In network failure we wait and try again
queryDataBase()
    .catch(
        e => wait(500).then(queryDataBase)).then(displayTable).catch(displayDatabaseError)

//Array of promises Promise.all(promises)
const urls = [];
const promises = urls.map(url => fetch(url).then(r => r.text()))
Promise.all(promises).then(bodies => {

}).catch(error => console.error(error));



Promise.allSettled([Promise.resolve(1), Promise.reject(2), 3]).then(results => {
    results[0] // {status: "fulfilled", value: 1}
    results[1] // {status: "rejected", reason 2}
    results[2] // {statusL "fulfilled",  value 3}
});

//Making PROMISES based on other promises

function getJSON(url) {
    return fetch(url).then(response => {
        response.json();
    })
}

//Promise returning functions getJSON()
function getHighScore() {
    return getJSON("Api/User/profile").then(profile => profile.highScore);
}
// we assume that the url "api/user/profile" returns a json formatted data structure that includes a highScore property
//Promise.resolve(){ returns new promise2, which is immediately resolved, but p1 has to be rejected or fulfiled to come to promise 2} 
//common use cases: where values are computed sync and returned async with promise.resolve(); Handle special cases with it

//Creating promises from scratch 
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true;
        if (success) {
            return resolve("Resolved like a jackass");
        } else {
            return reject("Rejected like a king")
        }
    }, 3000)
});
promise.then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});

function wait(duration) {
    //Create and return a new promise
    return new Promise((resolve, reject) => { //This is where we control the promise

        //if the arg is invalid: REJECT
        if (duration < 0) {
            return reject(new Error("Time travel not implemented yet :D"))
        }

        setTimeout(resolve, duration);
    })
};

const http = require("http");

function getJSON() {
    //Create and return new Promises 
    return new Promise((resolve, reject) => {

        //start an http request with GET() for the url
        request = http.get(url, response => {

            //Reject1: HTTP.Status not okay
            if (response.statusCode !== 200) {
                reject(new Error(`Http problem ${response.statusCode}`));

                //So we dont leak the memory
                response.resume();

                //Reject2: Reponse headers are wrong 
            } else if (response.header["content-type"] !== "application.json") {
                reject(new Error(`Invalid content type ${response.header}`));

                response.resume();

                //Otherwise: we register events to read the body of the reponse
            } else {
                let body = "";
                response.setEncoding("utf-8")
                response.on("data", chunk => {
                    body += chunk
                });
                response.on("end", () => {
                    //When the reponse body is complete,try to parse it
                    try {
                        let parsed = JSON.parse(body)
                        //if it parsed successfully, fulfil the promise
                        resolve(parsed)
                    } catch (error) {
                        //if parsing failed, reject the Promise
                        reject(error)
                    }
                })
            }
        })
        //We also reject the promise if the request fails before we get any response[e.g NETWORK DOWN]
        reponse.on("error", error => {
            reject(error)
        })
    })
}

//PROMISE SEQUENCE:
// To run aribitrary number of promise in parallel we use: promise.all()


function fetchSequence(urls) {
    //We will store the url bodies as we fetch them;
    let bodies = [];
    //Promise-returning fn that fetches one body
    function fetchONE(url) {
        return fetch(url)
            .then(response => response.text())
            .then(body => {

                //We save the body to the array, and we purposely 
                //omittubg a return value here returning undefined 

                bodies.push(body)
            })
    }
    //Start with a promise that will fulfil right away with value undefined: why are we doing this ??
    let p = Promise.resolve(undefined);

    //Now loop through the desired urls, building a promise chain
    // of arbititary len, fetching one url at each stage of the chain
    for (url of urls) {
        p = p.then(() => fetchONE(url))
    }
}
fetchSequence(urls).then(bodies => {

}).catch(error => console.log(error));

//PROMISE MAKER
//Step1: function that takes in array of inputs value a promise maker function.
//Step2: for any input value x in the array, promise Maker(x) should return a promise.
//Step3: that will fullfil to an output value, this function returns a promise.
//Step4: that fulfills to an array of the computed output values.

//Step5: Rather than creating the promises all at once and letting them run in parallel: 
//However, promiseSequence() only runds on promise at a time
//Step6: and does not call promiseMaker() for a value until the previous promise has fullfiled

function promiseSequence(inputs, promiseMaker) {
    //making a private copy of array to modify 
    inputs = [...inputs];

    //here is the function that we use as promise callback

    //this is a pseudorecursive magic that makes this all work

    function handleNextInput(outputs) {
        if (inputs.length === 0) {
            //If there are no more inputs left, then we return the array[]
            //of outputs, finally fulfilling this promise 
            // all the previous resolved but not fulfilled promises
            return outputs;
        } else {
            //if there are still input values to be processed 
            //then: we return a promise object, resolving the current promise
            // with the future value from new promises

            let nextInput = inputs.shift(); //get the nxt input values 
            return promiseMaker(nextInput).then(output => {
                outputs.concat(output)
            }).then(handleNextInput)
        }
    }
    //start with a promise that fulfills to an empty array and use 

    // the function above as its callback
    return Promise.resolve([]).then(handleNextInput);
}

//ASYNC FUNCTIONS

async function getHighScore() {
    let response = await fetch("/api/version/v8")
    let profile = await response.json()
    return profile.highScore;

}
//because getHighScore is an async function and it returns a promise
// so we can use await with it
displayHighScore(await getHighScore());

//regular way of defining promises
getHighScore().then(displayHighScore).catch(console.error)

//AWAITING MULTIPLE PROMISES

async function getJSON(url) {
    let response = await fetch(url);
    let body = await response.json();
    return body;
}


// problem: unnessary sequential
// second fetch will not start until the first promise valueOne is resolved
let valueOne = await getJSON(url1);
let valueTwo = await getJSON(url2);

//Here second value is not dependent on the first value
let [value1, value2] = await promise.all([getJSON(url1), getJSON(url2)]);

//Suppose a async function
async function f(x) {
    return x
}
//Detail of promise returning function wrapped around the body of original function
//NOTE: think of await keyword: marker that breaks the function body into sync chunks
function f(x) {
    return new Promise(function (resolve, reject) {
        try {
            resolve((function (x) {

            }))
        } catch (error) {
            console.log(error);
        }
    });
}


//ASYNC ITERATION:

//Node 12: makes it readable streams async iterable. You can read successive chunks of data from a stream with a for/await loop

const fs = requrire('fs');
async function parseFile(filename) {
    let stream = fs.createReadStream(filename, {
        encoding: "utf-8"
    });
    //For await loop wait for that promise to fulfull and asign the fullfillment value of the loop variable, runs the body of the loop.
    for await (let chunk of stream) { //chunk is the loop variable 
        parseChunk(chunk) //Assume parseChunk() is defined elsewhere
    }
}

//Suppose I have an array of urls 
//You can call fetch() on each URL to get an array of Promises 

let Urls = [url1, url2, url3];
let promised = Urls.map(url => fetch(url))

//We can iterate through arrays of promises with regular for/of loop

for (const promise of promises) {
    response = await promise;
    handle(response)
}

//We can do similar thing in for/await for simpler code

//async function(){for/await loop: you can iterate through the array of promises}
for await (const reponse of promises) {
    handle(response)
}

//For/Await loop repetitively run code at fixed intervals using loop syntax instead of setInterval() callback function

function elapsedTime(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function* clock(interval, max = Infinity) {
    for (let count = 1; count <= max; count++) {
        await elapsedTime(interval);
        yield count;
    }
}

async function test() {
    for await (let tick of clock(300, 100)) { //loop 100 times every 300ms
        console.log(tick)
    }
}

//A promise fied version of set-TimeOut that we can use await with.

function clock(interval, max = Infinity) {

    // Note that this takes absolute time instead of an interval
    function until(time) {
        return new Promise(resolve => setTimeout(resolve, time - Date.now()))
    }
    return {
        startTime: Date.now(),
        count: 1,
        async next() {
            if (this.count > max) {
                return {
                    done: true
                };
            }
        }
        
    }
}

//async implicitly returns a promise 
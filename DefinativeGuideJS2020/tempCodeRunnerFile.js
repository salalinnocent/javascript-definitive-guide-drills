let debug = console.debug();
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

let promise1 = fetch("https://example.com/api/version"); //promise 1, task1
let promise2 = promise1.then(callback1); //promise 2, task2
let promise3 = promise2.then(callback2); //promise 3, task3

fetch("API/VERSION/ES7")
    .then(response => {
        if (!response.ok) {
            return null
        }
        let type = response.headers.get("content-type");
        if (type !== "application/json") {
            throw new Error(`expected json: we got this ${type}`)
        }
        return response.json();

    }).then(
        profile => {
            if (profile in dataBase) {
                displayUserProfile()
            } else {
                userProfielNotFound();
            }
        }).
    catch(
        error => {
            if (error instanceof NetworkError) {
                displayErrorMessage(`Check your internet Connection: ${error}`);
            }
            else if (error instanceof TypeError) {
                displayErrorMessage(`Something went wrong with server: ${error}`)
            } else {
                console.log(`Error: ${error}`);
            }
        }
    )

const http = require("http")

function getJSON(url) {
    return new Promise((resolve, reject) => {
        request = http.get(url, response => {
            if (response.statusCode !== 200) {
                reject(new Error(`Error ${response.statusCode}`))
                response.resume();
            } else if (response.headers["content-type"] !== "application/json") {
                reject(new Error(`invalid content`))
                response.resume();
            } else {
                let body = '';
                response.setEncoding('utf-8')
                response.on("data", chunk => {
                    body += chunk
                });
                response.on("end", () => {
                    try {
                        let parsed = JSON.parse(body)
                        resolve(parsed)
                    } catch (error) {
                        reject(error)
                    }
                });
            }
        });
        response.on("error", error => {
            reject(error)
        });
    })
}

function timeTaken(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}
async function* clock(interval, max = Infinity) {
    for (let count = 1; count <= max; count++) {
        await timeTaken(interval)
        yield count;

    }
}
async function time() {
    for await (let tick of clock(300, 100)) {
        console.log(tick);
    }
}
time();
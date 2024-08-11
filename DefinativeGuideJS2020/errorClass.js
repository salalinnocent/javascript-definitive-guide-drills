// Error Object: it captures the state of JS Stack, which helps in debugging
// stack trace show = where error(object) was created not where it throws statement
// Two Properties: (message, name) & toString() method


//Example of an Error Class
class HTTPError extends Error {
    constructor(status, statusText, url) {
        super(`${status} ${statusText}: ${url}`)
        this.status = status;
        this.statusText = statusText;
        this.url = url;
    }
    get name() { return "HTTP ERROR" }
}
let error = new HTTPError(404, "Not Found", "http://suckitagain.com");
console.log(error.message);
console.log(error.status);
console.log(error.statusText);
//Rhino = java based js interpreter => js to access entire JAVA API
//Node = low-level binding for the POSIX(UNIX) API- files, processes, streams, sockets
//       => spec. on async I/O, networking & HTTP.

// Node Objects tjat generate events are 'EMITTERS'
// define an 'on' method to register handlers 
var fs = require("fs") //load the fs module and return its API object

setTimeout(function () {
    console.log("Hello Kitty");
}, 1000)

process.on("exit", function () {
    console.log('good bye');
})

process.on("uncaughtException", function (e) {
    console.log(Exception, e);
})

s.on("data", f) //when data is available, pass it to an argument to f()
s.on("end",f) // "end" event fired on EOF when no more data will arrive 
s.on("error",f) // If somethings goes wrong, pass exception to f()

s.readable  // => true if it is a readable stream that is still open
s.pause()   // pause "data" events for throttling uploads, e.g
s.resume() //Resume again 

// Specify an encoding if you want strings passed to data event handler
s.setEncoding(enc); // How to decode bytes "utf8", "ascii", "base64"

//OUTPUT Stream: s
s.write(buffer); //Write binary data
s.write(string, encoding)   //Write String data. encoding defaults to "utf-8"
s.end() //Close the stream
s.end(buffer) // Write final chunk of Binary data and close
s.end(str, encoding) //Write final string and close all in one => WHAT ?
s.writable; // true: if the stream is still open and writable
s.on("drain", f)    //Call f() when internal buffer becomes empty

//Application of Node stream: 
//opaque chunk of data, read - stream to write - stream




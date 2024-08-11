let bytes = Buffer.alloc(256)
for (let i = 0; i < bytes.length; i++) {
    bytes[i] = [i]
}

let end = bytes.slice(240, 256)
end[0] = 0
console.log(end[0]); // => zero, 0
console.log(bytes[240]); // => zero, 0

let more = Buffer.alloc(8);

// copy: (targetBuffer[value], targeStart[index], sourceStart[from], SourceEnd[to])
end.copy(more, 0, 8, 12)
console.log(more[0]); // How the hell is this happening ?
//output are: 0,0,248


let buf = Buffer.alloc("2", "utf8") //SOLVE THIS
console.log(buf.length);

//"SYNC": any method whose names ends with "sync" is blocking method
//        returns => value || throw exception


// Sync reading a file. Pass an encoding to get text instead of bytes
var text = fs.readFileSync("config.json", "utf8")

fs.readFile("image.png", function (error, buffer) {
    if (error) throw error;
    process(buffer);
});

// Node has a streaming API for reading and writing files 

//Similar writeFile() and writeFileSync()

fs.writeFile("config.json", JSON.stringify(userprefs));


//File copy with streaming API
//Pass a callback so we know when we are done 
function fileCopy(file1, file2, done) {
    var input = fs.createReadStream(file1) //Input Stream
    var output = fs.createWriteStream(file2) //Output stream
    input.on("data", function (d) { output.write(d) }); //Copy in & out
    input.on("error", function (error) { throw error }); //Raise Errors
    input.on("end", function () { //When input ends
        output.end() //close output
        if (done)
            done(); //we are passing a callback so we know when its done()
    })
}
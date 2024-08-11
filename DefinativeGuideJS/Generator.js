

function fibonnaci() {
    let x = 0, y = 1;
    while (true) {
        //  yield y;
        [x, y] = [y, x + y]
    }
}
f = fibonnaci()
for (let i = 0; i < 10; i++) console.log(f.next());

function eachline(s) {
    let p;
    while ((p = s.indexOf('\n')) != -1) {
        yield s.substring(o, p);
        s = s.substring(p + 1)
    }
    if (s.length > o) yield s;
}
function select(i, f) {
    for (let x in i) {
        if (f(x)) yield x;
    }
}
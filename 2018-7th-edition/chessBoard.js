// string that represent 8x8 grid using new line character to separate line
// at each position of the grid there is space or a 'hash' 

let size = 8;
let board = "";
//iteration of vertical 
for (let y = 0;
    y < size;
    y++) {
        //iteration horizontally
    for (let x = 0;
        x < size;
        x++) {
        if ((x + y) % 2 == 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n";
} console.log(board)
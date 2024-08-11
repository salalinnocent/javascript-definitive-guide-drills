//Write a function countBs that takes a string as its only argument 
//and returns a number that indicates how many uppercase "B" characters there are in the string

//Write a function countChar that behaves like countBs, 
//except it takes a second argument taht indiactes the character that is to be counted 
//rather then counting only uppercase "B", Rewrite countBs to make use this new function.



function countBs(string) {
    return countChar(string, 'B')

}
function countChar(string, char) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
         count++;
        }
    }
    return count;
}
console.log(countBs('BBBBBASAFSBBBAD'))
console.log(countChar('kabckbckokkabora', 'k'))
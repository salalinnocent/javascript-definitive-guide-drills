//Immediately invoked function ()


const privateCounter = (() => {
    let value = 0
    console.log(`the value of count is ${value}`)
    return () => {
        value += 1;
        console.log(value)
    }
})(); // here is the invokation happening 

// when we call it here only we run whole function
privateCounter();

// when we call it here only annonomyous function runs
privateCounter();



const credits = ((num) => {

    let credits = num;
    console.log(`initial credit value: ${credits}`)
    return () => {
        credits -= 1;
        if (credits > 0) {
            console.log(`playing game: ${credits}`)
        } else {
            credits <= 0
            console.log(`no more credits: ${credits}`)
        }
    }
})(3);

credits();
credits();
credits();
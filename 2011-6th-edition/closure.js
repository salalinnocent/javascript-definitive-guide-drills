function outer() {
    let name = 'Salal'
    function innerOne() {
        console.log('Inner', name)
    }
    function innerTwo() {
        let username = 'Badman'
        console.log(username);
    }
    inner();
    innerTwo();
}
outer()
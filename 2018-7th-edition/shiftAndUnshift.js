let day1 = {
    squirrel: false,
    events: ['work', 'touched tree', 'pizza', 'running']
};
console.log(day1.squirrel)
console.log(day1.wolf)
day1.wolf = Boolean
console.log(day1.wolf)

let toDoList = [];
function remember(tasks) {
    toDoList.shift(tasks)
}
function inseartTaskEnd(tasks) {
    toDoList.push(tasks)
}
function deleteTaskEnd(tasks) {
    toDoList.pop(tasks)
}
function deleteTaskStart() {
    toDoList.shift(tasks)
}
function insertTaskStart() {
    toDoList.unshift(tasks)
    return toDoList
}


let items = [1,2,3,4]
console.log(toDoList.push(items[4]))

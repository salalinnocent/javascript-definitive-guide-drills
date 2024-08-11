const isUnique = function(array){
    let breadcrumbs = {};
    let result = []
    for(let i = 0; i < array.length; i++){
        if(!breadcrumbs[array[i]]){
             result.push([array[i]])
            breadcrumbs[array[i]] = true
        }
    }
    return result.sort((a, b) => a - b)
}

let books = ['harry potter', 'great expectations', 'harry potter']

console.log(isUnique(books))
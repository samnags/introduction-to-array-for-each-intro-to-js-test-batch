var evens = [0, 2, 4, 6, 8, 10]

evens.forEach((even, index, array) => {
  debugger
  console.log(`${even} is not odd!`)
})

function doToElementsInArray(array, callback) {
  array.forEach(callback)
}

function changeCompletely(element, index, array) {
  array[index] = (Math.random() * 100).toString() + '!!!'
}
 

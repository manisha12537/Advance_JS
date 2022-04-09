//// DOUBLE
// var arr = [3, 5, 7, 1]

// function doble(x) {
//     return x * 2
// }
// console.log(arr.map(doble))



//// ARRAY IN OBJECT
// var arr = [{ price: 100, product: "mobile" }, { price: 200, product: "Mic" }, { price: 300, product: "Laptop" }]
// var my_fun = arr.map(value => value.product)
// console.log(my_fun)


//// BYNARY
// var arr = [3, 5, 7, 1]
// var a = arr.map(function(x) {
//     return x.toString(2)
// })
// console.log(a)

// function bynary(x) {
//     return x.toString(2)
// }
// console.log(arr.map(bynary))



//// NEWMAP
// var x = new Map()
// x.set("identity", "manisha", "country", "india")
// console.log(x)



//// SIZE
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
// ]);
// var x = fruits.size
// console.log(x)


//// DELET
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
// ]);
// fruits.delete("bananas")
// console.log(fruits)


//// HAS
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
// ]);
// var x = fruits.has("apples")
// console.log(x)


//// entries()
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
// ]);
// var text = ""
// for (var x of fruits.entries()) {
//     text += x
//     text += "\n"
// }
// console.log(text)

// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
// ]);
// var text = ""
// for (var [x, y] of fruits.entries()) {
//     text += x + " , " + y
//     text += "\n"
// }
// console.log(text)




// let x = 2;

// const add = (y) => {
//     x++
//     console.log(x += y);
// };

// add(4);
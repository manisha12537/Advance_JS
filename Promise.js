// var x = new Promise((resolve, reject) => {
//     console.log("ye promise called")
//     let obj = {
//         Id: 97,
//         identy: "manisha",
//         country: "india"
//     }
//     resolve(obj)
//     reject("something went wrong")
// })
// x.then((item) => {
//     console.log(item)
// }).catch((err) => {
//     console.log("error is: ", err)
// })
//*************************************************
// var promise_1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("yes called hr")
//         resolve("called to HR")
//     }, 2000)
// })
// promise_1.then((value) => {
//     console.log(value)
// }).catch((err) => {
//     console.log(err)
// })
// var promise_2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("called hr to director")
//         resolve("HR to Director")
//     }, 1000)
// })
// promise_2.then((value_2) => {
//     console.log(value_2)
// }).catch((err_2) => {
//     console.log(err_2)
// })
// //***********************************************************

// var promise_1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         var obj = {
//             name: "manisha",
//         }
//         resolve(obj)
//     }, 3000)

// })
// var promise_2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//             var obj2 = {
//                 country: "india"
//             }
//             resolve(obj2)
//         }, 4000)
//         // reject("err")

// })
// var promise_3 = new Promise((resolve, reject) => {
//     resolve("done")
// })
// Promise.all([promise_1, promise_2, promise_3])
//     .then((result) => {
//         console.log(result)
//     }).catch((err) => {
//         console.log(err)
//     })



//********************************************* */function job() {
let job = function() {
    return new Promise(function(resolve, reject) {
        reject();
    })
}
let promise_1 = job();
promise_1
    .then(function() {
        console.log("success 1")
    })
    .then(function() {
        console.log("success 2")
    })
    .then(function() {
        console.log("success 3")
    })
    .catch(function() {
        console.log("error 1")
    }).then(function() {
        console.log("success 4")
    })
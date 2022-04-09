var promise_1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        var obj = {
            name: "manisha",
        }
        resolve(obj)
    }, 3000)

})
var promise_2 = new Promise((resolve, reject) => {
    setTimeout(() => {
            var obj2 = {
                country: "india"
            }
            resolve(obj2)
        }, 4000)
        // reject("err")

})
var promise_3 = new Promise((resolve, reject) => {
    resolve("done")
})
Promise.all([promise_1, promise_2, promise_3])
    .then((result) => {
        console.log(result)
    }).catch((err) => {
        console.log(err)
    })
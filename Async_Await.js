//  async function myfun() {
//      var promise_1 = new Promise((resolve, reject) => {
//          var a = 6
//          var b = 7
//          if (a != b) {
//              resolve("promise done")
//          } else {
//              reject("some error")
//          }
//      })
//      var x = await promise_1
//      console.log(x)
//  }
//  myfun()




async function myfun() {
    var promise_1 = new Promise((resolve, reject) => {
        var a = 6
        var b = 7
        if (a != b) {
            resolve("promise done")
        } else {
            reject("some error")
        }
    })
    var promise_2 = new Promise((resolve, reject) => {
        resolve("second promise done")
    })
    var x = await promise_1
    var x2 = await promise_2
    console.log(x)
    console.log(x2)
}
myfun()
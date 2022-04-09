// let Name = {
//     firstName: "manisha",
//     lastName: " mavaskar",
//     fullName: function() {
//         console.log(this.firstName + "" + this.lastName)
//     }
// }

// let CorrentName = {
//     firstName: "sima",
//     lastName: " bhilavekar",
// }
// var PrintName = Name.fullName.bind(CorrentName)
// PrintName()



//WITH ARGUMENT
let Name = {
    firstName: "manisha",
    lastName: " mavaskar",
    fullName: function(city, country) {
        console.log(this.firstName + "" + this.lastName + " " + city + " " + country)
    }
}

let CorrentName = {
    firstName: "sima",
    lastName: " bhilavekar",
}
var PrintName = Name.fullName.bind(CorrentName, "pune", "mumbai")
PrintName()
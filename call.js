// let Name = {
//         firstName: "manisha",
//         lastName: "mavaskar",
//         fullName: function() {
//             console.log(this.firstName + " " + this.lastName)
//         }
//     }
//     // Name.fullName()
// let Name2 = {
//     firstName: "sonu",
//     lastName: "mavaskar"
// }
// Name.fullName.call(Name2)




// WITH ARGUMENT

let Name = {
    firstName: "manisha",
    lastName: "mavaskar",
    fullName: function(city, country) {
        console.log(this.firstName + " " + this.lastName + " " + city + " " + country)
    }
}
let Name2 = {
    firstName: "sonu",
    lastName: "mavaskar"
}
Name.fullName.call(Name2, "pune", "india")
// var Name = {
//     firstName: "manisha",
//     lastName: "mavaskar",
//     fullName: function() {
//         console.log(this.firstName + " " + this.lastName)
//     }
// }

// let Name2 = {
//     firstName: "sonu",
//     lastName: "mavaskar"
// }

// Name.fullName.apply(Name2)




// WITH ARGUMENT

var Name = {
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

Name.fullName.apply(Name2, ["pune", "india"])
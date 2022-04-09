class Name {
    constructor() {
        this.firstname = "manisha",
            this.lastname = "mavaskar"
        this.fullname = function() {
            console.log(this.a + " " + this.b)
        }

    }
}
var x = new Name()
console.log(x)
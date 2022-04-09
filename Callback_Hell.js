setTimeout(function() {
    console.log("hi")
    setTimeout(function() {
        console.log("how are you")
        setTimeout(function() {
            console.log("by")
        }, 1000)
    }, 3000)
}, 2000)
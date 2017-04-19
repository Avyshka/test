var promise = new Promise(function(resolve, reject) {
    console.log(pending);
    if (false) {
        setTimeout(function() {
            resolve("Работает!");
        }, 2000);
    }
    else {
        setTimeout(function() {
            reject(Error("full jopa!"));
        }, 2000);
    }
})

promise.then(function(resolve) {
    console.log("promise " + resolve);
}, function(error) {
    console.log("error: " + error);
});
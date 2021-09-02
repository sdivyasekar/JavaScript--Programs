function block1Second() {
    console.log("1 second elapsed");
}

setTimeout(function() {
    console.log("Hello executed at last");
}, 1000);

block1Second();

console.log("World");
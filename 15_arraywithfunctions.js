// Passing array to the function
var batches = new Array("PPA", "UNIX", "LB", "ANGULAR");
function fun(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
// call the above function
fun(batches);
// Returning array from function
function gun() {
    return new Array(10, 20, 30, 40);
}
var arr = gun();
for (var i in arr) {
    console.log(arr[i]);
}

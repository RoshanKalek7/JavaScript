/*
Variable number of arguments /Rest Parameters
Rest parameters don’t restrict the number of values that you can pass to a function. However, the values passed must all be of the same type.
To declare a rest parameter, the parameter name is prefixed with three periods. Any nonrest parameter should come before the rest parameter.
*/
function fun() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    for (i = 0; i < nums.length; i++) {
        console.log(nums[i]);
    }
}
fun(1, 2, 3);
fun(11, 21, 51, 101);

var Demo = /** @class */ (function () {
    function Demo(str1, str2) {
        this.name = str1;
        this.college = str2;
        console.log("Inside Demo constructor");
    }
    Demo.prototype.fun = function () {
        return "Inside fun";
    };
    return Demo;
}());
var obj = new Demo("Roshan", "smbst");
console.log(obj.name);
console.log(obj.college);
console.log(obj.fun());

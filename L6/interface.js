//Interface 
var Parent = /** @class */ (function () {
    function Parent(n) {
        this.name = n;
    }
    Parent.prototype.greet = function (text) {
        console.log(this.name, "is a", text);
    };
    return Parent;
}());
var obj = new Parent("Mahesh");
obj.greet("good");

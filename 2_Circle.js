var Circle = /** @class */ (function () {
    function Circle(value) {
        this.PI = 3.14;
        this.Radius = value;
    }
    Circle.prototype.Area = function () {
        this.number3 = this.PI * this.Radius * this.Radius;
        return this.number3;
    };
    return Circle;
}());
var obj1 = new Circle(20);
console.log(obj1.Area());

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    /**
     *
     */
    function CircleX(value) {
        return _super.call(this, value) || this;
    }
    CircleX.prototype.Circumference = function () {
        return (2 * this.PI * this.Radius);
    };
    return CircleX;
}(Circle));
var obj1 = new Circle(20);
console.log(obj1.Area());
var obj2 = new CircleX(20);
console.log(obj2.Circumference());

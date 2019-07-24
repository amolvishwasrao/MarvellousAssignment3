var Arithmatic = /** @class */ (function () {
    function Arithmatic(value, value1) {
        this.number1 = value;
        this.number2 = value1;
    }
    Arithmatic.prototype.Subs = function () {
        this.number3 = this.number1 - this.number2;
        return this.number3;
    };
    Arithmatic.prototype.Div = function () {
        this.number3 = this.number1 / this.number2;
        return this.number3;
    };
    Arithmatic.prototype.Multi = function () {
        this.number3 = this.number1 * this.number2;
        return this.number3;
    };
    Arithmatic.prototype.Add = function () {
        this.number3 = this.number1 + this.number2;
        return this.number3;
    };
    return Arithmatic;
}());
var obj1 = new Arithmatic(20, 10);
console.log(obj1.Add());
console.log(obj1.Multi());
console.log(obj1.Div());
console.log(obj1.Subs());

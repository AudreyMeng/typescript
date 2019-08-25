var Calculator = /** @class */ (function () {
    function Calculator(outputId) {
        this.firstNum = 0;
        this.secondNum = 0;
        this.operator = "+";
        this.first = true;
        this.output = document.getElementById(outputId);
        this.output.innerHTML = " ";
        this.wireEvents();
    }
    Calculator.prototype.getValue = function (num) {
        if (this.first) {
            return this.firstNum = this.firstNum * 10 + num;
        }
        else {
            return this.secondNum = this.secondNum * 10 + num;
        }
    };
    Calculator.prototype.wireEvents = function () {
        var _this = this;
        var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        var _loop_1 = function (n) {
            var btn = 'button' + n;
            document.getElementById(btn).addEventListener('click', function (event) {
                _this.output.innerHTML = _this.getValue(n).toString();
            });
        };
        for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
            var n = nums_1[_i];
            _loop_1(n);
        }
        document.getElementById('add').addEventListener('click', function (event) {
            _this.operator = "+";
            _this.first = false;
        });
        document.getElementById('subtract').addEventListener('click', function (event) {
            _this.operator = "-";
            _this.first = false;
        });
        document.getElementById('multiply').addEventListener('click', function (event) {
            _this.operator = "x";
            _this.first = false;
        });
        document.getElementById('divide').addEventListener('click', function (event) {
            _this.operator = "/";
            _this.first = false;
        });
        document.getElementById('equal').addEventListener('click', function (event) {
            _this.output.innerHTML = _this.equal().toString();
        });
        document.getElementById('clear').addEventListener('click', function (event) {
            _this.output.innerHTML = _this.clear().toString();
        });
    };
    Calculator.prototype.add = function () {
        return this.firstNum + this.secondNum;
    };
    Calculator.prototype.subtract = function () {
        return this.firstNum - this.secondNum;
    };
    Calculator.prototype.multiply = function () {
        return this.firstNum * this.secondNum;
    };
    Calculator.prototype.divide = function () {
        if (this.secondNum === 0) {
            return "NaN";
        }
        return this.firstNum / this.secondNum;
    };
    Calculator.prototype.equal = function () {
        switch (this.operator) {
            case "-":
                return this.subtract();
            case "x":
                return this.multiply();
            case "/":
                return this.divide();
            default:
                return this.add();
        }
    };
    Calculator.prototype.clear = function () {
        this.firstNum = 0;
        this.secondNum = 0;
        this.operator = "+";
        return " ";
    };
    return Calculator;
}());
window.onload = function () {
    var calc = new Calculator('Output');
};

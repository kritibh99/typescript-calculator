"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var calculator = /** @class */ (function () {
    function calculator() {
        this.firstStr = (0, readline_sync_1.question)("Enter first number:\n");
        this.operator = (0, readline_sync_1.question)("Enter operator:\n");
        this.secondStr = (0, readline_sync_1.question)("Enter second number:\n");
    }
    calculator.prototype.calculate = function (firstNum, operator, secondNum) {
        switch (operator) {
            case "+":
                return firstNum + secondNum;
            case "-":
                return firstNum - secondNum;
            case "*":
                return firstNum * secondNum;
            case "/":
                return firstNum / secondNum;
        }
    };
    calculator.prototype.isOperator = function (operator) {
        switch (operator) {
            case "+":
            case "-":
            case "/":
            case "*":
                return true;
            default:
                return false;
        }
    };
    calculator.prototype.isNumber = function (str) {
        var maybeNum = parseInt(str);
        var isNum = !isNaN(maybeNum);
        return isNum;
    };
    return calculator;
}());
{
    var a = new calculator();
    var object = a.firstStr;
    var object2 = a.secondStr;
    var object3 = a.operator;
    var validInput = a.isNumber(object) && a.isOperator(object3) && a.isNumber(object2);
    if (validInput) {
        var firstNum = parseInt(object);
        var secondNum = parseInt(object2);
        var result = a.calculate(firstNum, object3, secondNum);
        console.log("Total result", result);
    }
    else {
        console.log("\n Invalid Input \n");
    }
}

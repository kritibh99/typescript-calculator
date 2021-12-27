import { question } from "readline-sync";

type Operator = "+" | "-" | "/" | "*";
class calculator {
  firstStr: string = question("Enter first number:\n");
  operator: string = question("Enter operator:\n");
  secondStr: string = question("Enter second number:\n");

  calculate(firstNum: number, operator: Operator, secondNum: number) {
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
  }

  isOperator(operator: string): boolean {
    switch (operator) {
      case "+":
      case "-":
      case "/":
      case "*":
        return true;
      default:
        return false;
    }
  }
  isNumber(str: string): boolean {
    const maybeNum = parseInt(str);
    const isNum: boolean = !isNaN(maybeNum);
    return isNum;
  }
}
{
  const a = new calculator();
  const object = a.firstStr;
  const object2 = a.secondStr;
  const object3 = a.operator;
  const validInput: boolean =
    a.isNumber(object) && a.isOperator(object3) && a.isNumber(object2);

  if (validInput) {
    const firstNum: number = parseInt(object);

    const secondNum: number = parseInt(object2);
    const result = a.calculate(firstNum, object3 as Operator, secondNum);
    console.log("Total result", result);
  } else {
    console.log("\n Invalid Input \n");
  }
}

type Operator = "+" | "-" | "/" | "*";
export interface Icalculator {
  firstStr: string;
  operator: string;
  secondStr: string;
  calculate(firstNum: number, operator: Operator, secondNum: number): number;
  isOperator(operator: string): boolean;
  isNumber(str: string): boolean;
}

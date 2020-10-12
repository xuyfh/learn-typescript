import { type } from "os";

// 函数定义
function hello(name: string): void {
  console.log('hello ', name);
}

// type用来定义一个类型 类型别名 
type GetUserNameType = (firstName: string, lastName: string) => {
  name: string
}
// 函数表达式
let getUserName: GetUserNameType = function (firstName: string, lastName: string): {
  name: string
} {
  return { name: firstName + lastName };
}

// 可选参数
function print (name: string, age?: number, home?: string) {

}
// print();
print('xuyfh');
print('xuyfh', 10);
print('xuyfh', 10, 'beijing');

// 默认参数
function ajax(url: string, method: string = 'GET') {
  console.log(url, method);
}
ajax('/user');
ajax('/user', 'POST');

// 剩余参数
function sum(...numbers: Array<number>): number {
  return numbers.reduce((accu, curr) => accu + curr, 0);
}
console.log(sum(1,2,3));

// 函数重载
let obj: any = {};
function attr(val: string): void;
function attr(val: number): void;
function attr(val: any): void {
  if (typeof val === 'string') {
    obj.name = val;
  } else if (typeof val === 'number') {
    obj.age = val;
  }        
}
attr('xuyfh');
attr(18);
// attr(true);
console.log(obj);

function sum2(a: number, b: string): void;
function sum2(a: string, b: number): void;
function sum2(a: any, b: any): void {

}
sum2(1, 'd');
// sum2(1, 1);
sum2('d', 1);

// ts 如何写箭头函数
const a: any = (name: string, age: number) => {}
// 如果代码里面有有export import之类的代码，那么这个文件会变成一个模块 这样命名不会冲突
export { }
let name: string = 'hello';
let age: number = 10;
let married: boolean = false;
let hobbies: string[] = ['学习'];
let interests: Array<string> = ['学习'];

// 元祖 类似一个数组 它是一个长度和类型都固定的数组
// 1.长度固定 2.类型可以不一样
let point: [number, number] = [100, 100];
point[0], point[1];
let person: [string, number] = ['1', 10];

// 枚举
enum Week {
  MONDAY = 1,
  TUESDAY = 8
}
console.log(`今天是${Week.TUESDAY}`)

// 常数枚举
const enum Colors {
  Red,
  Yellow,
  Blue
}
console.log(Colors.Red, Colors.Yellow, Colors.Blue)

// 任意类型 anyscript
// 第三方库没有类型定义 类型转换的时候 数据结构太复杂太灵活 any
// ts为dom提供了一整套的类型声明
let root: HTMLElement | null = document.getElementById('root');
root!.style.color = 'red'; // ! 断言不为空

// null undefined
// null 空  undefined 未定义
// 它们都是其它类型的子类型，你可以把它们赋给其它类型的变量
let myname1: string = null;
let myname2: string = undefined;

let x: number;
x = 1;
x = undefined;
x = null;

// void 类型 空的 没有
function greeting (name: string): void {
  console.log(name);
  return null;
}

greeting('xuyfh');

// never 永远不
// never 是其他类型的子类型，代表不会出现的值
// 在函数内部永远会抛出错误，导致函数无法正常结束
function createError (message: string): never {
  console.log(1)
  throw new Error('error');
  console.log('end point');
}
function sum (): never {
  while (true) {
    console.log(1);
  }
  console.log('end point');
}


// | 和 ||  & 和 && 的区别
let num1 = 3 | 5;
console.log(num1); // 7 
let num2 = 3 || 5;
console.log(num2); // 3
let num3 = 3 & 5; 
console.log(num3); // 1
let num4 = 3 && 5; 
console.log(num4); // 5

// 类型推论 猜
let name3;
name3 = 3;
name3 = 'xuyfh';  

// 包装对象 java 装箱和拆箱 c#
// 自动在基本类型和对象类型之间切换 
// 1. 基本类型上没有方法
// 2. 在内部迅速的完成一个装箱的操作，把基本类型迅速包装成对象类型，然后用对象来调用方法
let name4: string = 'xuyfh';
name4.toUpperCase();
let name44 = new String(name4);
name44.toUpperCase();

let isOk1: boolean = true;
let isOk2: boolean = Boolean(1);
// let isOk3: boolean = new Boolean(1); // error


// 联合类型
// 表示取值可以为多种类型中的一种
// 注意：未赋值时联合类型只能访问两个类型共有的属性和方法
let name5: string | number;


// 类型断言
// 类型断言可以将一个联合类型的变量，指定为一个更加具体的类型
// 不能将联合类型断言为不存在的类型
let name6: string | number;
(name6 as string).toLowerCase();


// 字面量类型
let Gender3: 'Boy' | 'Girl';
Gender3 = 'Boy'; 


// 命名空间 
namespace a {
  let name = 'xuyfh';
}

namespace b {
  let name = 'xuyfh';
}
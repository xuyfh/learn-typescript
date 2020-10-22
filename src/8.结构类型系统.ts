// 接口的兼容性 ts跟类型没有别的关系，只跟属性有关
namespace a {
  interface Animal {
    name: string
    age: number
  }
  interface Person {
    name: string
    age: number
    speak: (words: string) => void
  }
  function getName(animal: Person): string {
    return animal.name;
  }
  let p: Person = {
    name: 'xuyfh',
    age: 10,
    speak() {}
  }
  console.log(getName(p))
}


namespace b {
  // 基本类型的兼容性
  let num: string | number = 1;
  let str: string = 'hello';
  num = str;

  let num2: {
    toString(): string
  }
  let str2: string = 'hello';
  num2 = str2;
}


namespace d {
  // 类的兼容性
  class Animal {
    name: string
  }
  class Bird extends Animal {
    // swing: number
  }
  let a: Animal;
  a = new Bird();
  let b: Bird;
  b = new Animal();
  b = { name: 'xuyfh' }
}



namespace e {
  // 函数兼容性
  // 比较参数
  type sumFunction = (a: number, b: number) => number;
  let sum: sumFunction;
  function f1 (a: number, b: number) {
    return a;
  }
  sum = f1;
  function f2 (a: number) {
    return a;
  }
  sum = f2;
  function f3 () {
    return 1;
  }
  sum = f3;
  function f4 (a: number, b: number, c: number) {
    return a;
  }
  // sum = f4; // 参数可以少，但是不能多

  // 比较返回值
  type GetMoney = () => { name: string, age: number };
  let getMoney: GetMoney;
  function g1() {
    return { name: 'xuyfh', age: 10 }
  }
  getMoney = g1;
  function g2() {
    return { name: 'xuyfh' }
  }
  // getMoney = g2; // 返回值少了不行
  function g3() {
    return { name: 'xuyfh', age: 10, home: 'beijing' } // 返回值多了可以
  }
  getMoney = g3;

  // interface T {
  //   name: string
  // }
  // let t: T = { name: 'xuyfh', age: 10 }
}



// 函数参数的协变
type logFunc = (a: number | string) => void;
let log: logFunc;
function log1(a: number | string | boolean) {
  console.log(a);
}
log = log1;



// 泛型的兼容性
interface Empty<T> {

}
let x: Empty<string>;
let y: Empty<number>;
// x = y;



// 枚举的兼容性
namespace e {
  enum Colors {
    Red, Yellow
  }
  let c: Colors;
  c = Colors.Red; // 0
  c = 1;
  let d: number;
  d = Colors.Yellow; // 1
}




// 接口的继承
interface a {
  speak(): void
}
interface b extends a {
  speakChinese(): void
}
class c implements b {
  speak() {}
  speakChinese() {}
}


// 接口的readonly
interface Circle {
  readonly PI: number,
  radius: number
}
let circle: Circle = {
  PI: 3.14,
  radius: 10
}
// circle.PI = 3;


// 接口还可以用来约束函数
interface Discount {
  (price: number): number
}
let count: Discount = function (price: number): number {
  return price * .8;
} 



// 可索引接口
// 是用来对数组和对象进行约束
interface UserInterface {
  [index: number]: string
}
let arr: UserInterface = ['1', '2', '3'];
let obj2: UserInterface = {1: '1', 2: '2', 3: '3'};



// 类接口 可以用接口来修饰类 学TS核心 要学会两个重点 接口+泛型
namespace b {
  interface Speakable {
    name: string
    speak (words: string): void
  }
  class Dog implements Speakable {
    name: string;
    speak() {}
  }
}


namespace c {
  // 约束构造函数 使用new来约束
  class Animal {
    constructor (public name: string) {

    }
  }
  interface WithNameClass {
    new(name: string): Animal
  }
  function createAnimal(clazz: WithNameClass, name: string) {
    return new clazz(name)
  }
  let a = createAnimal(Animal, 'pig');
}

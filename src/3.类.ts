import { stdout } from "process";

// 类的定义
class Person {
  name: string = 'xuyfh';
  age: number;
  constructor () {
    this.age = 20;
  }
}
let p = new Person();
console.log(p.name);
console.log(p.age);

// 存取器 setter 读取器 getter
class Person1 {
  myName: string;
  constructor (name: string) {
    this.myName = name;
  }
  get name() {
    return this.myName;
  }
  set name(newVal: string) {
    this.myName = newVal.toUpperCase();
  }
} 
let p1 = new Person1('xuyfh');
console.log(p1.name);
p1.name = 'play';
console.log(p1.name);


// 参数属性
// class Person2 {
//   name: string
//   constructor (name: string) {
//     this.name = name;
//   }
// }
// let p2 = new Person2('xuyfh');
// console.log(p2.name);
class Person2 {
  constructor (public name: string) {
  }
}
let p2 = new Person2('xuyfh');
console.log(p2.name);


// readonly
namespace a {
  class Person2 {
    constructor (public readonly name: string) {
    }
  }
  let p2 = new Person2('xuyfh');
  // p2.name = '3';
  console.log(p2.name);
}


// 继承
// 子类继承父类后子类的实例上就拥有了父类中的属性和方法
// 访问修饰符 public protected private
// public 自己 自己的子类 和其他类都可以访问
// protected 受保护的 自己和自己的子类能访问，其他类不能访问
// private 私有的 只能自己访问，自己的子类不能访问，其他更不行了
namespace b {
  class Person {
    public name: string;
    protected age: number;
    private money: number;
    constructor (name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    getName() {
      return this.name;
    }
    setName(newName: string) {
      this.name = newName;
    }
  }

  class Student extends Person {
    stuNo: number;
    constructor (name: string, age: number, stuNo: number) {
      super(name, age);
      this.stuNo = stuNo;
    }
    getStuNo() {
      return this.age + this.stuNo;
    }
    setStuNo(newStuNo: number) {
      this.stuNo = newStuNo;
    }
  }

  let s = new Student('xuyfh', 20, 1);
}


// 静态属性 静态方法
namespace c {
  class Person {
    static type = 'Student'
    public name: string;
    protected age: number;
    private money: number;
    constructor (name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    static getType() {
      return Person.type;
    }
    getName() {
      return this.name;
    }
    setName(newName: string) {
      this.name = newName;
    }
  }
  console.log(Person.getType())
}



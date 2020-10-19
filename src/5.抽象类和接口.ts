// 抽象类
// 抽象描述一种抽象的概念，无法被实例化，只能被继承
// 无法创建抽象类的实例
// 抽象方法不能在抽象类中实现，只能在抽象类的具体子类中实现，而且必须实现
abstract class Animal {
  name: string;
  abstract getName(): string
}
class Cat extends Animal {
  getName(): string {
    return this.name;
  }
}
let cat = new Cat();
cat.name = '猫';
console.log(cat.getName());



// 接口
// 1、可以用来描述对象的形状，指的是对象有哪些属性，属性是什么类型
interface Point {
  x: number
  y: number
}
let point: Point = { x: 0, y: 0 };

// 2、还可以用来描述行为的抽象
interface Speakable {
  speak(): void // 因为接口里面不能放实现，只能放定义，所有的方法都是抽象的
} 
interface Eatable {
  eat(): void
}
// 类可以实现多个接口，但只能继承一个父类
class Child implements Speakable, Eatable {
  speak() {}
  eat() {}
}

// 重写 子类重新实现并覆盖父类中的方法
namespace a {
  class Animal {
    constructor () {

    }
    speak() {
      console.log('动物叫');
    }
  }
  class Cat extends Animal {
    speak() {
      console.log('我们一起喵喵喵');
      super.speak();
    }
  }
  let cat = new Cat();
  cat.speak();
}

// 重载 指为同一个函数提供多个类型定义


// 抽象类 vs 接口
// 不同类之间公有的属性或方法，可以抽象成一个接口
// 而抽象类是供其他类继承的基类，抽象类不允许被实例化。抽象类中的抽象方法必须在子类中被实现
// 抽象类本质是一个无法被实例化的类，其中能够实现方法和初始化属性，而接口仅能够用于描述，既不提供方法的实现，也不为属性进行初始化
// 一个类可以继承一个类或抽象类，但可以实现多个接口
// 抽象类也可以实现接口



// 任意属性
// 无法预先知道有哪些新的属性时，可以使用`[propName: string]: any`，propName名字是任意的
namespace b {
  interface PlainObject {
    readonly a: number
    [propName: string]: number
  }
  let obj: PlainObject = {
    a: 1,
    b: 2,
    c: 3
  }
}



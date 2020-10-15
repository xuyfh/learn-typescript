// 类的装饰器
export {}
namespace a {
  interface Person {
    name: string
  }

  function enhancer(target: any) {
    // target.prototype.name = 'xuyfh';
    console.log(target)
  }

  @enhancer
  class Person {
    constructor () {
    }
  }
  let p = new Person();
  console.log(p.name);
}

// 替换整个类 （用得很少，如果有一个场景不能修改父类，就用一个子类替换它）
namespace b {
  interface Person {
    name: string
    age: number
  }

  function enhancer (target: any) {
    return class {
      public name: string = 'person'
      public age: number = 10
    }
  }

  @enhancer
  class Person {
    constructor () {}
  }

  let p = new Person();
  console.log(p.name);
}

// 属性装饰器
namespace b {
  // target 如果装饰的是某个属性的话，那么这个target指向类的原型 Person.prototye
  // target 如果装饰的是一个类的属性 static，那么这个 target 指向类的定义
  function upperCase (target: any, propertyName: string) {
    let value = target[propertyName];
    Object.defineProperty(target, propertyName, {
      get: () => value,
      set: (newVal: string) => { value = newVal.toUpperCase() },
      enumerable: true,
      configurable: true,
    });
  }
  class Person {
    @upperCase
    name: string = '123'
  }
  let p = new Person();
  p.name = 'xuyfh';
  console.log(p.name)
}


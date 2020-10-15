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

namespace c {
  function propertyEnumerable(flag: boolean) {
    return function (target: any, methodName: string) {

    }
  }
  function methodEnumerable(flag: boolean) {
    return function (target: any, methodName: string, propertyDescriptor: PropertyDescriptor) {
      propertyDescriptor.enumerable = flag;
    }
  }
  function toNumber(target: any, methodName: string, propertyDescriptor: PropertyDescriptor) {
    let oldMethod = propertyDescriptor.value;
    propertyDescriptor.value = function (...args: any[]) {
      args = args.map(item => parseFloat(item));
      return oldMethod.apply(this, args);
    }
  }
  class Person {
    @propertyEnumerable(false)
    name: string = 'xuyfh'
    @methodEnumerable(true)
    getName() {
      console.log('getName');
    }
    @toNumber
    sum(...args: any[]) {
      console.log(1);
      return args.reduce((prev, curr) => prev + curr, 0);
    }
  }

  let p = new Person();
  console.log(p.sum(1, '2', 3));
}

namespace d {
  // 参数装饰器（很少有人用） 方法参数
}


// 装饰器的执行顺序

// 属性方法先执行，谁先写先执行谁
// 方法的时候，先参数再方法
// 最后是类
// 如果是同类型的，先执行后写的

namespace e {
  function Class1Decorator() {
    return function(target: any) {
      console.log('类1装饰器');
    }
  }

  function Class2Decorator() {
    return function(target: any) {
      console.log('类2装饰器');
    }
  } 

  function PropertyDecorator(name: string) {
    return function (target: any, methodName: string) {
      console.log('属性装饰器' + name);
    }
  }

  function MethodDecorator(method: string) {
    return function (target: any, methodName: string, propertyDescriptor: PropertyDescriptor) {
      console.log('方法装饰器');
    }
  }
  @Class1Decorator()
  @Class2Decorator()
  class Person {
    @PropertyDecorator('name')
    name: string = 'xuyfh';
    @PropertyDecorator('age')
    age: number = 10;
    @MethodDecorator('method')
    greet() {}
  }
}

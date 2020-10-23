namespace a {
  interface Bird {
    name: string
    fly(): void
  }
  interface Person {
    name: string
    eat(): void
  }
  // 交叉类型其实就是两个接口类型的并集
  type BirdMan = Bird & Person;
  let p: BirdMan = {
    name: 'xuyfh',
    fly() {},
    eat() {}
  }
}

namespace b {
  // typeof 可以获取一个变量的类型
  // type Person = {
  //   name: string
  //   age: number
  // }
  let p = {
    name: 'xuyfh',
    age: 10
  }
  // type 是用来定义类型的 let var 只能定义值
  type Person = typeof p;
  let p2: Person = {
    name: 'xuyfh',
    age: 20
  }
}


namespace d {
  // 子类型操作符 我们可以通过 [] 来获取一个类型的子类型
  interface Person {
    name: string
    age: number
    job: { name: string }
    interests: { name: string; level: number }[]
  }
  let myName: Person['job'] = { name: 'xuyfh' };
  let myLevel: Person['interests'][0]['level'] = 10;

  // keyof 索引类型查询操作符
  interface Person2 {
    name: String
    age: number
    gender: 'male' | 'female'
    // [propName: string]: any
  }
  // type Person2Keys = 'name' | 'age' | 'gender';
  type Person2Keys = keyof Person2;
  function getValueByKey(val: Person2, key: Person2Keys): any {
    return val[key];
  }
  let person2: Person2 = {
    name: 'xuyfh',
    age: 20,
    gender: 'male'
  }
  let name = getValueByKey(person2, 'name');
  console.log('name', name);

  // 映射类型 在定义的时候用in操作符去批量定义
  interface Person3 {
    name: string
    age: number
    gender: 'male' | 'female'
  }
  // type PartialPerson = {
  //   [key in keyof Person3]?: Person3[key]
  // }
  // type Partial<T> = {
  //   [key in keyof T]?: T[key]
  // }
  type PartialPerson = Partial<Person3>; // 原生支持的可选定义
  let p3: PartialPerson = {
    name: 'xuyfh',
    age: 20
  }

  type Required<T> = {
    [key in keyof T]-?: T[key]
  }
  type RequiredPerson = Required<Person2>
  let p4: RequiredPerson = {
    name: 'xuyfh',
    age: 10,
    gender: 'male'
  }

  // type Readonly<T> = {
  //   readonly [key in keyof T]: T[key]
  // }
  type ReadOnlyPerson = Readonly<Person2>
  let p5: ReadOnlyPerson = {
    name: 'xuyfh',
    age: 20,
    gender: 'male'
  }
  // p5.name = 'xx'


  type Pick<T, K extends keyof T> = {
    [key in K]: T[key]
  }
  type PickPerson = Pick<Person2, 'name'>;
  let p6: PickPerson = {
    name: 'xuyfh'
  }


  // 什么时候用interface 什么时候用type 什么时候用class 三者一般都在啥时候用
  // interface 是定义接口类型，它是真实的类型，也可能会被导出和导入
  // type 只是临时用的别名，并不会产出真正的类型
  // class就是定义类 可以new ，接口不能new
}

// 条件类型
namespace d {
  interface Fish {
     name1: string
  }
  interface Water {
    name2: string
  }
  interface Bird {
    name3: string
  } 
  interface Sky {
    name4: string
  }
  type Condition<T> = T extends Fish ? Water : Sky;
  let condition: Condition<Fish> = {
    name2: 'water'
  }  

  // 条件类型的分发
  type Condition2<T> = T extends Fish ? Water : Sky;
  let c1: Condition2<Fish | Bird> = { name2: 'xuyfh' };
  let c2: Condition2<Fish | Bird> = { name4: 'xuyfh' };
  let c3: Condition2<Fish | Bird> = { name2: 'xuyfh' };
  let c4: Condition2<Fish | Bird> = { name4: 'xuyfh' };
}
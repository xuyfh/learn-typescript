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
  interface Person {
    name: string
    age: number
    job: { name: string }
    interests: { name: string; level: number }[]
  }
  let myName: Person['job'] = { name: 'xuyfh' };
  let myLevel: Person['interests'][0]['level'] = 10;
}

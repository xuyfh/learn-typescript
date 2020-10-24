namespace a {
  // Exclude
  type E = Exclude<string | number, string>; // 从前者中排除掉后者
  let e: E = 10;
  // Extract
  type E2 = Extract<string | number | null, string>; // 提取
  let e2: E2 = '10';
  // NonNullable
  type E3 = NonNullable<string | number | undefined | null>;
  let e3: E3 = 'hello';
  let e4: E3 = 10;
  // redux 会用到的 ReturnType
  function getUserInfo() {
    return { name: 'xuyfh', age: 10 };
  }
  type UserInfo = ReturnType<typeof getUserInfo>
  let user: UserInfo = { name: 'xuyfh', age: 15 };
  // InstanceType 获取构造函数的实例类型
  class Person5 {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
  type P = InstanceType<typeof Person5>;
  let p: P = new Person5('xuyfh');
}
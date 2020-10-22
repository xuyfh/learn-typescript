// 类型保护，就是更精确的知道是哪种类型
namespace a {
  // typeof 保护
  function double(input: string | number | boolean) {
    if (typeof input === 'string') {
      input.toLowerCase();
    } else if (typeof input === 'number') {
      input.toFixed(2);
    } else {
      input;
    }
  }

  // instanceof 保护
  class Animal {
    public name: string = 'xuyfh'
  }
  class Bird extends Animal {
    public swing: number = 2
  }
  function getName(a: Animal) {
    if (a instanceof Bird) {
      a.swing;
    } else {
      a.name;
    }
  }

  // null 保护
  function getFirstLetter(s: string | null) {
    if (s === null) {
      s = '';
    }
    s = s || '';
    function ensure()  {
      s = s || '';
    }
    ensure();
    return s!.charAt(0); // 非空断言
  }
}



// 链操作运算符
// ?.



// 可辨识的联合类型
// 利用联合类型中的共有字段进行类型保护的一种技巧
// 相同字段的不同取值就是可辨识
namespace b {
  interface WarningButton {
    class: 'warning',
    text1: '修改'
  }
  interface DangerButton {
    class: 'danger',
    text2: '删除'
  }
  type Button = WarningButton | DangerButton;
  function getButton(button: Button) {
    if (button.class === 'warning') {
      button.text1
    } else {
      button.text2
    }
  }

  interface Bird {
    swing: number
  }
  interface Dog {
    leg: number
  }
  function getNumber (x: Bird | Dog) {
    if ('swing' in x) {
      x.swing;
    } else {
      x.leg;
    }
  }

  // 自定义的类型保护
  interface Bird1 {
    name1: 'Bird'
    legs: number
  } 
  interface Dog {
    name2: 'Dog'
    legs: number
  }
  function isBird(x: Bird1 | Dog): x is Bird1 {
    return x.legs === 2
  }
  function getAnimal(x: Bird1 | Dog) {
    if (isBird(x)) {
      console.log(x.name1);
    } else {
      console.log(x.name2);
    }
  }
  let x: Bird1 = { name1: 'Bird', legs: 2 }
  getAnimal(x)
}
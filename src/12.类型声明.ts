export {}
// 声明文件怎么写
// 1、用 TS 重写
// 2、配上声明文件
// jquery 是用js写的
declare const $: (selector: string) => {
  click(): void
  width(length: number): void
}
// ---------------
$('#root').click();
$('#root').width(100);

declare let name: string;
declare let age: number;
declare function getName(): string;
declare class Animal {
  name: string
}
interface Person {
  name: string
}

type Student = Person | string;

declare const enum Seasons {
  Spring,
  Summer,
  Autumn,
  Winter
}
let seasons: Seasons[] = [
  Seasons.Spring,
  Seasons.Summer,
  Seasons.Autumn,
  Seasons.Winter
]
console.log(seasons)


// namespace 第一个作用是封装类似的代码 第二个作用防止命名冲突
namespace zoo {
  class Dog {

  }
}
namespace home {
  export class Dog {

  }
}
let dog = new home.Dog();


// 如果定义一个复杂对象
// jQuery
declare namespace jQuery {
  function ajax(url: string, config: any): void
  let name: string
  namespace fn {
    function extend(object: any): void
  }
}
jQuery.ajax('/api/users', {});
jQuery.name;
jQuery.fn.extend({});
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
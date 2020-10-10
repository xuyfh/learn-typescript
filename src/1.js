"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var name = 'hello';
var age = 10;
var married = false;
var hobbies = ['学习'];
var interests = ['学习'];
// 元祖 类似一个数组 它是一个长度和类型都固定的数组
// 1.长度固定 2.类型可以不一样
var point = [100, 100];
point[0], point[1];
var person = ['1', 10];
// 枚举
var Week;
(function (Week) {
    Week[Week["MONDAY"] = 1] = "MONDAY";
    Week[Week["TUESDAY"] = 8] = "TUESDAY";
})(Week || (Week = {}));
console.log("\u4ECA\u5929\u662F" + Week.TUESDAY);
console.log(0 /* Red */, 1 /* Yellow */, 2 /* Blue */);
// 任意类型 anyscript
// 第三方库没有类型定义 类型转换的时候 数据结构太复杂太灵活 any
var root = document.getElementById('root');
root.style.color = 'red';

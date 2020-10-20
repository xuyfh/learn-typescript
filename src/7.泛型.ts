// 泛型的简单理解
// 函数定义的时候不指定具体的类型，只有使用的时候才指定具体的类型
namespace a {
  function createArray<T>(length: number, value: T): Array<T> {
    let result: Array<T> = [];
    for (let i = 0; i < length; i++) {
      result[i] = value;
    }
    return result;
  }
  let result = createArray<string>(3, 'a');
  console.log(result);
}


// 类数组 ArrayLike arguments
namespace b {
  function sum(...args2: any[]) {
    let args: IArguments = arguments;
    for (let i = 0; i < args.length; i++) {
      console.log(args[i]);
    }
  }
  sum(1, 2, 3);

  let root: HTMLElement | null = document.getElementById('root');
  let children: HTMLCollection = root.children;
  let childNodes: NodeListOf<ChildNode> = root.childNodes;
}


namespace d {
  // 泛型定义类
  class MyArray<T> {
    private list: T[] = [];
    add (val: T) {
      this.list.push(val);
    }
    getMax(): T {
      let result: T = this.list[0];
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i] > result) {
          result = this.list[i];
        }
      }
      return result;
    }
  }
  let arr = new MyArray<number>();
  arr.add(1);
  arr.add(2);
  arr.add(3);
  console.log(arr.getMax());
}


// 接口泛型
namespace e {
  interface Calculate {
    <T>(a: T, b: T): T
  }
  let add: Calculate = function <T>(a: T, b: T): T {
    return a;
  }
  let result = add<number>(5, 5);
  console.log(result);

  interface Cart<T> {
    list: T[]
  }
  let cart: Cart<string> = {
    list: ['1', '2', '3']
  }
}


// 多个类型参数
// 如何在不增加中间变量的情况下，交换两个变量的值
namespace e {
  function swap<A, B>(tuple: [A, B]): [B, A] {
    return [tuple[1], tuple[0]];
  }
  let a = 0, b = 1;
  [b, a] = [a, b];
}



// 默认类型
namespace f {
  function createArray<T = number>(length: string): T | null {
    let t: T | null = null;
    return t;
  }
  let result = createArray('3');
}



// 泛型的约束
// 在函数中使用泛型的时候，由于预先并不知道具体的类型，所以不能访问相应的方法
namespace g {
  interface LengthWise {
    length: number
  }
  function logger<T extends LengthWise>(val: T): void {
    console.log(val.length)
  }
  logger('hello');
}


// 泛型类型别名
namespace h {
  type Cart2<T> = { list: T[] } | T[];
  let c1: Cart2<string> = { list: ['1'] };
  let c2: Cart2<string> = ['1'];
  // interface 定义一个实实在在的接口，它是一个真正的类型
  // type 一般用来定义别名，并不是一个真正的类型
}
// 泛型接口 vs 泛型类型别名
// 接口创建了一个新的名字，它可以在其他任意地方被调用。而类型别名并不创建新的名字，例如报错信息就不会使用别名
// 类型别名不能被extends和implements，这时我们应该使用接口代替类型别名
// 当我们需要使用联合类型或者元祖类型的时候，类型别名会更合适







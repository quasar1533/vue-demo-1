// step1
const myData1 = { n: 0 };
// 一般的，可以通过点运算符直接对对象的属性进行访问与修改
console.log(myData1.n);
myData1.n = 2;
console.log(myData1.n);
console.log("--------------------------------");
// step2
const myData2 = { _n: 0 };
//有时，我们设置对象的属性时，需要一些限制，比如不允许设置负值，这可以通过存取器属性配合容器属性来实现
Object.defineProperty(myData2, "n", {
  get() {
    return myData2._n;
  },
  set(newValue) {
    if (newValue < 0) return;
    myData2._n = newValue;
  },
});
console.log(myData2.n);
myData2.n = 3;
console.log(myData2.n);
myData2.n = -1;
console.log(myData2.n);
console.log("---------------------");
//step3
// step2存在缺陷，用户可以通过直接读写_n属性来绕过判断条件，因此引入代理，可以很好的解决这个问题
const proxy = function({ data }) {
  const obj = {};
  Object.defineProperty(obj, "n", {
    get() {
      return data.n;
    },
    set(newValue) {
      if (newValue < 0) return;
      data.n = newValue;
    },
  });
  return obj;
};
const myData3 = proxy({ data: { n: 0 } });
console.log(myData3.n);
myData3.n = 2;
console.log(myData3.n);
myData3.n = -1;
console.log(myData3.n);
//这样便无法直接修改元数据
console.log("-----------------------------------");
//step4
let data4 = { n: 0 };
let myData4 = proxy({ data: data4 });
console.log(myData4.n);
myData4.n = 2;
console.log(myData4.n);
data4.n = -1;
console.log(myData4.n);
console.log("----------------------");
// 此种情况可以通过修改外部变量来突破限制。

//step5
//通过对数据的监听来确保实现要求
let data5 = { n: 0 };
const proxy2 = function({ data }) {
  let value = data.n;
  Object.defineProperty(data, "n", {
    get: function() {
      return value;
    },
    set(newValue) {
      if (newValue < 0) return;
      value = newValue;
    },
  });
  const obj = {};
  Object.defineProperty(obj, "n", {
    get() {
      return data.n;
    },
    set(newValue) {
      if (newValue < 0) return;
      data.n = newValue;
    },
  });
  return obj;
};
const myData5 = proxy2({ data: data5 });
console.log(myData5.n);
myData5.n = 3;
console.log(myData5.n);
myData5.n = -1;
console.log(myData5.n);
data5.n = -5;
console.log(myData5.n);
data5.n = 5;
console.log(myData5.n);
//做到满足要求的同时可以在外部更新
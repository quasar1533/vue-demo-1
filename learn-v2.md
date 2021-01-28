## 学习Vue的数据响应式
* 首先配置webpack使得其默认使用完整版Vue，而无需再次从cdn引入。 配置vue.config.js文件
#### Vue的data选项采用对象存取器
* 对象的descriptor有存取器特性（attribute），自ES6之后可以使用很简单的方式，为对象设置存取器函数getter与setter。
* Vue中的data选项中的数据使用的就是存取器

  例子。
* 注意避免死循环
```
let obj = {};
Object.defineProperty(obj, 'xxx', {
  get() {
    return this.xxx
  }
})
```
上述代码会造成死循环，解决办法是单独使用一个变量盛放xxx的值 _xxx
#### 学习Vue监听与代理的思想
* Vue需要实现对传入Vue函数的构造选项的监听与代理，结合getter、setter实现
* 例子proxy.js
* `const vm = new Vue({data: myData});`  vm实现了对data的代理与监控
#### 数据响应式
* Vue的data是典型的数据响应式
* 数据的变化会得到实施的响应
#### Vue data选项的小bug（注意点）
* 例子：见data.obj
* 如果在Vue 的data选项中出现了对象，那么Vue会先检查该对象中的所有数据，并一一代理监听。

  页面template中如果出现了data选项中没有传入的数据，那么页面不会显示模板内容，并且会爆出警告。

  直接为没有在一开始传入data选项的数据赋值，并不能成功添加到Vue中，也不会有代理与监听，但Vue提供了后续加入数据的api Vue.set与 vm.$Set。

  Vue.set方法会触发数据响应式，导致UI自动更新。
* 还有一种方式是将所有要用到的data.obj的key事先声明好。
#### 在data中使用数组
* data选项中使用数组性质与使用对象是一致的，但多了七个继承自Array的Vue专用处理数组的方法：

  push、pop、shift、unshift、sort、reverse、splice
* 数组无法做到实现写好要用的key
#### 注意点
* 打印出Vue的一些东西，查看Vue到底是如何封装数据的
* 例子
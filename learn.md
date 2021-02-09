## 学习Vue.js
#### 安装vue-cli
* 使用vue-cli的选项来构建Vue项目。
#### 关于Vue
* 安装完整版(生产版本)vue，使用cdn，完整版vue可以直接操作界面public/index.html的内容(含有compiler)。  `vue.js`
* 非完整版(run-time版)，不支持从index.html中获取视图。

  不完整版用于开发使用，配合render使用.
  
  完整版虽然很方便，但非完整版的意义在于更加独立。
* vue单文件组件概念：
  * vue的完整版比开发版体积要大40%左右。为了节省用户的体积，我们平时使用完整版进行开发，但build产品时，webpack的vue-loader插件会将完整版编译成非完整版，将vue模板编译为一个可以使用的对象。
* 关于SEO(搜索引擎优化)
  * 使用类似vue单文件组件这样的操作，会使得网页index.html中的标签被替换。而搜索引擎curl网页源代码时，恰好比较依赖这些关键字，所以我们需要手动在网页index.html中添加一些关键字，方便搜索引擎检索。
  * 主要集中于 title meta的keyword、description  h1与a标签
### Vue options
* `const vm = new Vue(options);`
  options 是Vue函数的构造选项，大有文章，查看文档
  1. 数据  data、 props、 methods ....
  2. DOM  render函数 与 template 二选一
  3. 生命周期钩子  created-->mounted(挂载)-->updated-->destroyed   总共11个
  4. 资源  directives、 filter、 components
  5. 组合  parent、 mixin、 extends、 provide、 inject
#### el
* el与$mount 可以相互替换
#### data
* data必须是函数形式，不能是对象
  原因在于：对于xxx.vue这样的vue单文件组件，在main.js中被import后，会得到一个vue组件对象，这个对象被render的h函数操作时，内部机制会率先把该组件对象使用new Vue封装。 所以当遇到重复封装的情况，且data是对象形式，那么便会共享到data对象，造成数据污染。
* data在数据响应式方面存在bug
----------------------------------------------------------------
# 注意点
* `import Vue from 'vue';` 引入的vue默认是运行时版本vue。所以经常可能产生错误you are using runtime.....
  解决办法是在index.html上使用cdn引入vue完整版后，在main.js中使用window.Vue即可得到完整版vue。
--------------------------------------------
#### methods
* 事件处理函数或普通函数
* 所有方法都应该放在methods中
* 例子：在模板中嵌入函数，写在methods中即可，缺点：模板每次更新都会调用函数，不必要。
#### components
* 三种创建组件的方式
  * 单文件组件  xxx.vue  建议组件文件命名全部是小写英文字母，但import时用大写英文字母引入；   这是最推荐的使用方式，突出模块化
  * 使用Vue.component(id, definition)函数创建组件
  * 直接在Vue实例的component选项中创建并直接使用
  * 例子：上述三种方式
#### 生命周期
* created 该组件存在于内存中
* mounted 该组件在页面中呈现
* updated 数据更新，页面刷新
* destroyed 该组件在页面中销毁 (且如果再次出现，会从新创建新的组件)
* 例子；；；
#### props
* 特指外部传递进来的属性，与内部data相区别
* 从外表传递数据有两种形式，string与js代码
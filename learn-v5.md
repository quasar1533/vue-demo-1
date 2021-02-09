## 学习Vue的进阶属性
#### directive
* 模板语法中如v-if这样的就时指令，这样的指令也可以自定义并全局使用。
* 例子：在main.js中写自己的指令，可以在任何一个vue组件中使用他们。
* 例子：全局指令by Vue.directive()方法（在main.js中声明）。  在构造选项中使用directives: {} 局部使用（在当前组件中使用）
* directivesOptions 自定义指令的选项
1. bind
2. inserted
3. update
4. componentUpdated
5. unbind
* 例子：main.js 自己封装一个简单的v-on指令，v-on2。
* **总结** 指令direction选项专门用来操纵DOM，并封装常用的DOM操作。

  例子： 见main.js可以通过声明周期钩子来操作DOM，绑定事件，但繁琐且功能单一。
#### mixin 混入
* 本质上就是copy，为了减少重复（专门用于复制重复的构造选项），为了减少data、methods等构造选项的重复。
* 例子 example1中的5个子组件，以及mixin文件夹。
* mixin主要就是用来提取重复的内容，方便引用。mixin的优点在于支持智能合并。
* mixin支持通过Vue.mixin({}) 方法生成全局的mixin，并且自动给每个vue组件混入。

  不推荐这样使用，范围过大。
#### extends 继承
* 功能和用法与mixin基本一致。

  extends是比mixin更抽象的一层封装。
  
  它将自定义的构造选项封装成一个类，可以后续使用
* 例子 MyVue.js
#### provide 与 inject
* 主要用于组件间的通信操作。
* 父代给子代提供可应用选项，可以隔多代使用。
* 例子：改变主题颜色 changeThemeButton.vue example2.vue
  
  在父组件example2中使用project选项提供接口给子组件changeThemeColor，在子组件中使用inject选项引入（放入this），于是子组件便可以访问操作该属性。
---------------------------------
# 要点
* .vue组件的style模板默认具有scoped域，即只怼该组件中的template生效，可以选择取消。
---------------------------------
* 例子：在添加一下，文字大小的改变
  
  **总结**

  provide与inject选项常用于大范围的data与methods共享。

  provide传值时，可以传对象来引用，但不推荐这么做，容易导致失控。

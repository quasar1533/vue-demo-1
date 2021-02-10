## 学习Vue表单及v-model
#### 基本的双向绑定
* 表单中的view数据与内存中data数据是通过v-model双向绑定的，修改任何一个都会反应在另一个上。
* 例子：App.vue，同理可使用多行文本textarea
* 例子：example1，许多选项演练。

  最后，表单专门用于提交信息，十分方便，适用。
#### 表单相关的修饰符
* 表单及双向绑定十分常用，所以修饰符十分有必要。
1. input是一个常见事件，表示任意输入设备的输入。数据双向绑定，是及时响应的（见例子）。有时我们并不需要及时响应显示，所以可以用.lazy修饰符，使得在input失去焦点时再响应。
2. 常用的修饰符.number  .trim
  
  见例子:
  * 如果要输入的内容一定是数字，最好加上number修饰符
#### v-model
* 数据双向绑定，实质上是将view的内容与内存中的data进行绑定。
* 例子：用代码来进行解释。example3
* 例子：实现一个自己的input。 MyInput.vue。深入的了解v-model的操作
* 例子：在MyInput2.vue中更进一步探究。在自己定义的`<input />` 中是不能使用v-model的因为这会直接操纵外部属性props，这不合法。   可以使用computed选项构造_value属性迂回一下。
* **总结** v-model是v-bind与v-on的语法糖
  
  v-model源于angular，只监听了input事件，.sync修饰符是其拓展，功能更全面。
#### Ant Design of Vue
* 开始学习使用开源的Vue组件库，大大提高效率。
1. 打开文档，安装。

  同样分为完整版引入，与局部版引入
2. 例子； example4.vue
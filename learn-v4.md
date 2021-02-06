## 学习Vue的模板语法
#### template的三种书写方式
1. 直接在index.html上写入模板语法，在Vue构造选项中不再传入template。
2. 将index.html中的选定div模块（要加上id）留空，在Vue构造选项中传入template并挂载到那个id上，**替换**内容。

！！注意要是完整版
3. vue单文件组件，配合render函数。

！！注意template中的内容都是XML格式。XMl格式文件一定是闭合标签（即一定要有斜杠/）
#### 模板语法
1. 展示内容
* 提供多种灵活的展示方式
  * {{obj.a}}
  * {{n + 11}}
  * {{fn(a)}}
* 双大括号数据绑定等价于<div v-text="some expression"></div>
* 表达式解析为undefined或null时，不显示内容
2. 多种选项
* 富文本<div v-html="<div>xxx</div"></div>
* 不进行编译 v-pre="xxx"
* v-bind  <img v-bind:src='xxx' /> 可简写为 <img :src='xxx' />
  
  <div :style="{border: 1px solid #xxx}"></div>
* <div v-on:click="expression">xxx</div>  可简写为 @click="expression"
* <div v-if="expression">xxx</div>

  <div v-else-if="expression">yyy</div>

  <div v-else="expression">zzz</div>
* <div v-for="(value, key) in objOrArray" :key="key">xxx</div>
  
  规定格式必须如此，:key后面要跟唯一性的值，即对象的键名
* 更加简化的 <div v-show="expression">xxx</div> 是语法糖，近似等于

  <div :style="{display: expression?'block' : 'none'}">xxx</div>
##### 总结
* 通过v-xxx语法操纵DOM，v-xxx是指令

  v-directiveName(:params="value")  引号有时可省略
* 使用@修饰符可以简化代码
* 例子：example1 指令与修饰符应用的小例子。

  @click.stop="xxx" 阻止时间传播的例子

  如果记不得对应的码点了，Vue还支持码点alias。
#### sync修饰符
* sync是Vue非常重要的修饰符
* 例子：example2、example2# 组件与子组件之间的交互的普通情况。Vue对事件的处理机制封装的很好。

  Vue中触发事件，推荐要写成update:name的形式。

  **！！** 不使用$emit方法触发自定义事件，也可以修改外部数据props的值，但这样做并不合法，会有警告（组件不能修改外部props值）。一般都会通过 $emit方法配合 $event以及v-on共同实现。
* 例子中的方法是十分常用的，因此有专门的的简化修饰符 .sync 在需要随时同步变动的props属性上加上即可（语法糖）。
--------------------------------------------------------------
# 注意点 Vue中使用event delegation可以通过例子example1中的手动添加的checkClick方法
--------------------------------------------------------------

// import Vue from "vue/dist/vue.js";
// 上面代码也可以引入完整版Vue

import Vue from "vue";

Vue.config.productionTip = false;

// import App from "./App.vue";
import Example1 from "./example1.vue";
import Example2 from "./example2.vue";
// import MyVue from "./MyVue.js";
// console.dir(MyVue);

Vue.directive("x", {
  inserted(el) {
    el.addEventListener("click", function() {
      console.log("Hello");
    });
  },
});
// 第一种声明方式
Vue.directive("on2", {
  inserted(el, binding) {
    console.log(el);
    console.log(binding);
    // 一个对象，绑定了许多选项
    el.addEventListener(binding.arg, binding.value);
  },
  unbind(el, binding) {
    el.removeEventListener(binding.arg, binding.value);
  },
});

new Vue({
  // render: (h) => h(App),
  components: {
    Example1,
    Example2,
  },
  template: `
  <div>
    <button v-on2:click="say">say hello</button>
    <hr />
    {{n}}
    <button id="add">+1</button>
    <button id="multiple" @click="multiple">*2</button>
    <hr />
    <Example1 />
    <hr />
    <Example2 />
  </div>
  `,
  methods: {
    say() {
      console.log("hello");
    },
    add() {
      this.n += 1;
    },
    multiple() {
      this.n *= 2;
    },
  },
  mounted() {
    console.log(this.$el);
    this.$el.querySelector("#add").addEventListener("click", this.add);
    // 略显繁琐
  },
  data: {
    n: 1,
  },
}).$mount("#app");

// console.log(vm);

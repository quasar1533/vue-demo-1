// import Vue from "vue/dist/vue.js";
// 上面代码也可以引入完整版Vue

import Vue from "vue";

Vue.config.productionTip = false;

import Example1 from "./example1.vue";
import Example2 from "./example2.vue";


const vm = new Vue({
  components: {
    Example1,
    Example2,
  },
  data: {
    n: 1,
  },
  computed: {},
  template: `
  <div>
    {{n}}
    <hr/>
    <Example1/>
    <hr/>
    <Example2/>
  </div>
  `,
  created() {},
  methods: {
    add() {
      this.n += 1;
    },
  },
}).$mount("#app");

console.log(vm);
console.log(Example1);

// import Vue from "vue/dist/vue.js";
// 上面代码也可以引入完整版Vue

import Vue from "vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

Vue.config.productionTip = false;

Vue.use(Antd);

import App from "./App.vue";

// import MyVue from "./MyVue.js";
// console.dir(MyVue);

const vm = new Vue({
  components: {
    App,
  },
  template: `
  <div>
    <App />
  </div>
  `,
  methods: {},
  data: {
    n: 1,
  },
}).$mount("#app");

console.log(vm);

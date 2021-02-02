// import Vue from "vue/dist/vue.js";
// 上面代码也可以引入完整版Vue

import Vue from "vue";

Vue.config.productionTip = false;

import Example1 from "./example1.vue";
import Example2 from "./example2.vue";
import Example3 from "./example3.vue";
import Example4 from "./example4.vue";
import Example5 from "./example5.vue";

// let id = 0;
// function createUser(name, gender) {
//   id += 1;
//   return {id, name, gender};
// }

const vm = new Vue({
  components: {
    Example1,
    Example2,
    Example3,
    Example4,
    Example5,
  },
  data: {
    user: {
      nickname: "jky",
      email: "1029230641@qq.com",
      phone: "15940337017",
    },
    n: 1,
  },
  computed: {
    displayName() {
      const user = this.user;
      return user.nickname || user.email || user.phone;
    },
    displayName2: {
      get() {
        const user = this.user;
        return user.nickname || user.email || user.phone;
      },
      set(value) {
        const user = this.user;
        user.nickname = value;
      },
    },
  },
  template: `
    <div class="main">
      {{user.nickname || user.phone || user.email}}
      <br/>
      <div>
        {{displayName}}
      </div>
      <div>
        {{displayName2}}
        <button @click="setNew">new name</button>
      </div>
      <hr/>
      <Example2/>
      <hr>
      <Example3/>
      <hr>
      <Example4/>
      <hr>
      <Example5/>
      <hr>
      {{ n }}
    </div>
  `,
  created() {
    this.$watch(
      "n",
      function() {
        console.log("n changed");
      },
      { immediate: true }
    );
  },
  methods: {
    setNew() {
      this.displayName2 = "typ";
    },
  },
}).$mount("#app");

console.log(Example1);
console.log(vm);
console.log(vm.$children[0].users);

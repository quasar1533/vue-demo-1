import Lifecycle from "./Demo1.vue";
// import Vue from "vue";
const Vue = window.Vue;
// import App from "./App.vue";

Vue.config.productionTip = false;

import Demo1 from "./component1.vue";
import Props from "./props.vue";

Vue.component("Demo2", {
  template: `
    <div>demo2</div>
  `,
});
// new Vue({
//   el: "#app",
//   render(h) {
//     return h(demo);
//   },
// });
// same as ↓
// new Vue({
//   render(h) {
//     return h(demo);
//   },
// }).$mount("#app");
// also same as ↓
new Vue({
  components: {
    Demo1,
    Demo3: {
      data() {
        return {
          n: 11,
        };
      },
      template: `
        <div>my number {{n}}</div>
      `,
    },
    Lifecycle,
    Props,
  },
  data() {
    return {
      n: 1,
      array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      visibility: true,
    };
  },
  template: `
    <div class="main">
      {{ n }}
      <button @click="add">+1</button>
      <hr>
      {{arrayFilter()}}
      <hr>
      <Demo1/>
      <hr>
      <Demo2/>
      <hr>
      <Demo3/>
      <hr>
      <div>lifecycle hooks example</div>
      <button @click="toggle">toggle</button>
      <br/>
      <Lifecycle v-if="visibility === true"/>
      <hr>
      <div>synchronous data update</div>
      {{ n }}
      <Props :message="n" :fn="multiple"/>
    </div>
  `,
  methods: {
    add() {
      this.n += 1;
    },
    multiple() {
      this.n *= 2;
    },
    arrayFilter() {
      console.log("arrayFilter called");
      return this.array.filter((item) => item % 2 === 0);
    },
    toggle() {
      this.visibility = !this.visibility;
    },
  },
}).$mount("#app");
// 上面都是Vue实例

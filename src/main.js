import Vue from "vue";
// import "./proxy.js";

Vue.config.productionTip = false;

const myData = {
  n: 1,
  obj: {
    a: 10,
    // b: undefined,
    // predefined b
  },
  array: [1, 2, 3],
};
console.dir(myData);
//该对象会自动被封装为Vue的数据对象
console.log(myData.array);
//也会被自动封装

const vm = new Vue({
  components: {},
  data: myData,
  template: `
    <div class="main">
      {{n}}
      <button @click="add">+10</button>
      <hr>
      {{obj}}
      {{obj.b}}
      <button @click="setB">set b</button>
      <hr>
      {{array}}
      <button @click="setNew">set new items</button>
      <hr>
      
    </div>
  `,
  methods: {
    add() {
      this.n += 10;
    },
    setB() {
      // this.obj.b = 11;
      // 上述代码无效
      this.$set(this.obj, "b", 11);
      // 等价于 Vue.set(this.obj, "b", 11);
      console.log(vm.obj);
    },
    setNew() {
      // this.array[3] = 4;
      // 上面代码同理是无效的
      this.array.push(4, 5, 6);
    },
  },
}).$mount("#app");

console.log(vm);
console.log(vm.obj);
vm.n = 2;
// data选项中的数据会被传入Vue实例中，且可以被修改并相应的页面中

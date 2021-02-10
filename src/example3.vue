<template>
  <div>
    {{ n }}
    <br />
    <input type="text" :value="n" @input="n = $event.target.value" />
    <!-- 以上的写法与v-model是等价的，v-model的实质就是这样绑定内存与view操作 -->
    <hr />
    <MyInput v-model="user.name" />
    <MyInput :value="user.name" v-on:input="user.name = $event" />
    <hr />
    MyInput2
    <br />
    <MyInput2 v-model="string" />
    <!-- $event与子组件中的$emit成一对 -->
    <!-- 以上两句是等价的v-model的内部操作如此 -->
  </div>
</template>

<script>
import MyInput from "./components/myInput.vue";
import MyInput2 from "./components/myInput2.vue";

export default {
  components: {
    MyInput,
    MyInput2,
  },
  data() {
    return {
      n: 11,
      user: {
        name: "John",
      },
      string: "HelloWorld",
    };
  },
};
</script>
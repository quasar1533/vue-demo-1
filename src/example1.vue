<template>
  <div class="main">
    <Child1 v-if="child1Visibility" />
    <button @click="child1Visibility = false">X</button>
    <br />
    <Child2 v-if="child2Visibility" />
    <button @click="child2Visibility = false">X</button>
    <br />
    <Child3 v-if="child3Visibility" />
    <button @click="child3Visibility = false">X</button>
    <br />
    <Child4 v-if="child4Visibility" />
    <button @click="child4Visibility = false">X</button>
    <br />
    <Child5 v-if="child5Visibility" />
    <button @click="child5Visibility = false">X</button>
    <br />
  </div>
</template>

<script>
import Child1 from "./components/child1.vue";
import Child2 from "./components/child2.vue";
import Child3 from "./components/child3.vue";
import Child4 from "./components/child4.vue";
import Child5 from "./components/child5.vue";

export default {
  components: {
    Child1,
    Child2,
    Child3,
    Child4,
    Child5,
  },
  data() {
    return {
      child1Visibility: true,
      child2Visibility: true,
      child3Visibility: true,
      child4Visibility: true,
      child5Visibility: true,
    };
  },
};
</script>

<style scoped>
</style>
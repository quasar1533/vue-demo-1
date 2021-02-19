<template>
  <div id="app">
    <Example1 />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Example1 from "./example1.vue";
// import Example2 from "./example2.vue";
// import Example3 from "./example3.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    Example1,
  },
  data() {
    return {
      message: "hello",
    };
  },
};
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// }
</style>

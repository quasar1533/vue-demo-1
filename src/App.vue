<template>
  <div id="app">
    <!-- <input v-model="message" placeholder="edit me" />
    <p>Message is: {{ message }}</p>
    <p>
      <button @click="message = 'halo'">set message</button>
    </p>
    <hr />
    <Example1 />
    <hr />
    <Example2 />
    <hr />
    <Example3 /> -->
    <!-- ---------------------------------------------------------------- -->
    <Example4 />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import Example1 from "./example1.vue";
// import Example2 from "./example2.vue";
// import Example3 from "./example3.vue";
import Example4 from "./example4.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    // Example1,
    // Example2,
    // Example3,
    Example4,
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

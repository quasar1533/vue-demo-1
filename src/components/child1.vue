<template>
  <div>Child1</div>
</template>

<script>
import log from "../mixins/log.js";
// import MyVue from "../MyVue.js";

export default {
  // extends: MyVue,
  mixins: [log],
  data() {
    return {
      name: "Child1",
    };
  },
  created() {
    console.log(`Child1's smart merge`);
  },
};
</script>
<template>
  <div>
    <button v-on:click="show = !show">Toggle</button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {},
};
</script>

<style scoped>
div .fade-enter-active,.fade-leave-active {
  transition: all 3s;
}
div .fade-enter,.fade-leave-to {
  opacity: 0.5;
  width: 100px;
}
div p {
  border: 3px solid red;
  width: 300px;
}
</style>
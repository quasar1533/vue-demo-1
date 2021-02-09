<template>
  <div>
    current theme {{ themeColor }}
    <br />
    <button @click="x">change theme color</button>
    <button @click="changeFontSize('big')">Big words</button>
    <button @click="changeFontSize('small')">Small words</button>
    <button @click="changeFontSize('normal')">Normal words</button>
  </div>
</template>

<script>
export default {
  inject: ["themeColor", "change", "changeFontSize"],
  methods: {
    x() {
      this.change();
    },
  },
};
</script>

<style scoped>
div button {
  margin-right: 2px;
}
</style>
<template>
  <div class="red">
    {{ message }}
    <button @click="fn">call fn</button>
  </div>
</template>

<script>
export default {
  props: ['message', 'fn'],
};
</script>

<style scoped>
.red {
  color: red;
}
</style>
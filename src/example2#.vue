<template>
  <div class="child">
    {{ money }}
    <button @click="$emit('update:money', money - 100)">use money</button>
    <div class="other">
      {{ money2 }}
      <button @click="$emit('update:money2', money2 - 200)">use money2</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["money", "money2"],
  methods: {},
};
</script>

<style scoped>
.child {
  border: 3px solid green;
  padding: 2px;
}
.child .other {
  border: 2px solid blue;
  padding: 2px;
  margin-top: 2px;
}
</style>
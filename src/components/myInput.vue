<template>
  <div>
    {{ value }}
    <br />
    <input type="text" :value="value" @input="onInput" />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
    },
  },
  methods: {
    onInput(e) {
      const value = e.target.value;
      this.$emit("input", value);
    },
  },
};
</script>

<style scoped>
div input {
  border: 3px solid grey;
}
</style>
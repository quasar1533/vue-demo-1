<template>
  <div>
    {{ value }}
    <br />
    <input type="text" v-model="value" />
    <!-- 这样虽然能用但会有警告 -->
    <br />
    <input type="text" v-model="_value" />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
    },
  },
  computed: {
    _value: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit("input", newValue);
      },
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
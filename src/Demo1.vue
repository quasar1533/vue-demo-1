<template>
  <div class="red">
    {{ n }}
    <button @click="minus">-1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      n: 11,
    };
  },
  methods: {
    minus() {
      this.n -= 1;
    },
  },
  created() {
    console.log("created in memory");
  },
  mounted() {
    console.log("mounted in page");
  },
  updated() {
    console.log("data updated");
  },
  destroyed() {
    console.log("component destroyed");
  },
};
</script>

<style scoped>
.red {
  color: red;
}
</style>
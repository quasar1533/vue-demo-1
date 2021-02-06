<template>
  <div class="main">
    now, we all have {{ total }} bucks.
    <hr />
    <Child :money="total" v-on:update:money="total = $event" :money2.sync="total2" />
  </div>
</template>

<script>
import Child from "./example2#.vue";
export default {
  components: {
    Child,
  },
  data() {
    return {
      total: 10000,
      total2: 10000,
    };
  },
  methods: {},
};
</script>

<style scoped>
.main {
  border: 2px solid red;
  padding: 2px;
}
</style>
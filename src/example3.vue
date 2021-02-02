<template>
  <div>
    <div class="number">{{ n }}</div>
    <div class="btn">
      <button @click="add">+1</button>
      <button @click="minus">-1</button>
      <button @click="multi">*2</button>
      <button @click="divide">/2</button>
    </div>
    <div class="history">{{ history }}</div>
    <button @click="undo">undo</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      n: 0,
      history: [],
      inUndoMode: false,
    };
  },
  watch: {
    n(newValue, oldValue) {
      if (!this.inUndoMode) {
        this.history.push({ from: oldValue, to: newValue });
      }
    },
  },
  methods: {
    add() {
      this.n += 1;
    },
    minus() {
      this.n -= 1;
    },
    multi() {
      this.n *= 2;
    },
    divide() {
      this.n /= 2;
    },
    undo() {
      const last = this.history.pop();
      if (last) {
        this.inUndoMode = true;
        this.n = last.from;
        this.$nextTick(() => {
          this.inUndoMode = false;
        });
      }
    },
  },
};
</script>

<style scoped>
div > .btn button {
  margin-right: 10px;
}
div > .number {
  color: red;
}
div > .history {
  margin-bottom: 5px;
}
</style>
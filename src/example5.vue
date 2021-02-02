<template>
  <div>
    <div>
      {{ display }}
    </div>
    <div class="btn">
      <button @click="add">n+1</button>
      <button @click="obj1a">obj1.a + 'i'</button>
      <button @click="obj2b">obj2.b + 'j'</button>
      <button @click="obj1Replace">obj1 = {a: 'a'}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      display: "",
      n: 1,
      obj1: {
        a: "a",
      },
      obj2: {
        b: "b",
      },
    };
  },
  watch: {
    n() {
      console.log("n changed");
    },
    obj1() {
      console.log("obj1 changed");
    },
    obj2: {
      handler() {
        console.log("obj2 changed");
      },
      deep: true,
    },
    "obj1.a"() {
      console.log("obj1.a changed");
    },
    "obj2.b": {
      handler() {
        console.log("obj2.b changed");
      },
    },
  },
  methods: {
    add() {
      this.n += 1;
    },
    obj1a() {
      this.obj1.a += "i";
    },
    obj2b() {
      this.obj2.b += "j";
    },
    obj1Replace() {
      this.obj1 = { a: "a" };
    },
  },
};
</script>
  div > .
<style scoped>
div .btn button {
  margin-right: 5px;
}
</style>
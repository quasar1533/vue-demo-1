<template>
  <div class="main">
    {{ display }}
    <a @click.prevent="f1" href="http://baidu.com">百度</a>
    <br />
    <input @keypress.13="f2" />
    <br />
    <input @keypress.space="f3" />
    <br />
    {{ n }}
    <div class="btn" @click="checkClick($event)">
      <div class="btnAdd" @click.stop="say">+1</div>
      <div class="btnAdd">+1</div>
      <div class="btnAdd">+1</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      display: "",
      n: 11,
    };
  },
  methods: {
    checkClick(e) {
      if (e.target.className === "btnAdd") {
        this.n += 1;
      }
    },
    say() {
      console.log("this doesn't work");
    },
    f1() {
      this.display = "nothing happend";
    },
    f2() {
      this.display = "input Enter";
    },
    f3() {
      this.display = "input space";
    },
  },
};
</script>

<style scoped>
.main .btn {
  border: 2px solid brown;
  height: 30px;
  width: 100px;
  padding: 10px;
}
.main .btn .btnAdd {
  border: 2px solid #000;
  height: 20px;
  width: 20px;
  display: inline-block;
  margin-right: 8px;
  cursor: pointer;
}
</style>
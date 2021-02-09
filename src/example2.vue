<template>
  <div :class="`main theme-${themeColor} theme-${fontSize}`">
    <Child6 />
    <button>decorate</button>
    <br />
    <Child7 />
    <button>decorate</button>
    <br />
    <Child8 />
    <br />
  </div>
</template>

<script>
import Child6 from "./components/child6.vue";
import Child7 from "./components/child7.vue";
import Child8 from "./components/child8.vue";

export default {
  components: {
    Child6,
    Child7,
    Child8,
  },
  data() {
    return {
      themeColor: "blue",
      fontSize: "normal",
    };
  },
  provide() {
    return {
      themeColor: this.themeColor,
      change: this.changeThemeColor,
      changeFontSize: this.changeFontSize,
    };
  },
  methods: {
    changeThemeColor() {
      if (this.themeColor === "blue") {
        this.themeColor = "red";
      } else {
        this.themeColor = "blue";
      }
    },
    changeFontSize(size) {
      if (["small", "big", "normal"].includes(size)) {
        this.fontSize = size;
      }
    },
  },
};
</script>

<style>
.main button {
  margin-top: 2px;
}
.main.theme-blue {
  color: darkblue;
}
.main.theme-blue button {
  background-color: blue;
  color: white;
}
.main.theme-red {
  color: darkred;
}
.main.theme-red button {
  background-color: red;
  color: white;
}
.main button {
  font-size: inherit;
}
.main.theme-big {
  font-size: 24px;
}
.main.theme-small {
  font-size: 12px;
}
.main.theme-normal {
  font-size: 18px;
}
</style>
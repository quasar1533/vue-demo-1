/* eslint-disable */
new Vue({
  el: "#app",
  data: {
    status1: "on",
    status11: "on",
    status2: "on",
    status3: "on",
    status4: "on",
    status5: "on",
  },
  methods: {
    change1() {
      this.status1 = this.status1 === "on" ? "off" : "on";
    },
    change11() {
      this.status11 = this.status11 === "on" ? "off" : "on";
    },
    change2() {
      this.status2 = this.status2 === "on" ? "off" : "on";
    },
    change3() {
      this.status3 = this.status3 === "on" ? "off" : "on";
    },
    change4() {
      this.status4 = this.status4 === "on" ? "off" : "on";
    },
    change5() {
      this.status5 = this.status5 === "on" ? "off" : "on";
    },
    change6() {
      this.status6 = this.status6 === "on" ? "off" : "on";
    },
  },
});

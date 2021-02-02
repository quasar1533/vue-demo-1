<template>
  <div>
    <div>
      {{ displayName }}
    </div>
    <button @click="changeNickname">remove nickname</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        nickname: "jky",
        phone: "15940337017",
        email: "1029230641@qq.com",
      },
      displayName: "",
    };
  },
  watch: {
    "user.nickname": {
      handler() {
        console.log("触发了name监听");
        const {
          user: { nickname, phone, email },
        } = this;
        this.displayName = nickname || phone || email;
      },
      immediate: true,
    },
    "user.phone": {
      handler() {
        console.log("触发了phone监听");
        const {
          user: { nickname, phone, email },
        } = this;
        this.displayName = nickname || phone || email;
      },
      immediate: true,
    },
    "user.email": {
      handler() {
        console.log("触发了email监听");
        const {
          user: { nickname, phone, email },
        } = this;
        this.displayName = nickname || phone || email;
      },
      immediate: true,
    },
  },
  methods: {
    changeNickname() {
      this.user.nickname = undefined;
    },
  },
};
</script>
  div > .
<style scoped>
div button {
  margin-top: 5px;
}
</style>
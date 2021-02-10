<template>
  <div>
    sychronous response data
    <br />
    {{ user }}
    <br />
    <label>
      <span>id:</span>
      <input type="text" v-model.trim="user.id" />
    </label>
    <br />
    <label>
      <span>phone:</span>
      <input type="text" v-model.number="user.phone" />
    </label>
    <br />
    <label>
      <span>email:</span>
      <input type="text" v-model.lazy="user.email" />
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        id: "",
        phone: undefined,
        email: "",
      },
    };
  },
};
</script>

<style scoped>
</style>
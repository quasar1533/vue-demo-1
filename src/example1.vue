<template>
  <div>
    <div class="btn">
      <button @click="showAll">show all</button>
      <button @click="showMale">show male</button>
      <button @click="showFemale">show female</button>
    </div>
    <ul>
      <li v-for="(u, index) in displayUsers" :key="index">
        {{ u.name }} - {{ u.gender }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { id: 1, name: "John", gender: "male" },
        { id: 2, name: "Tom", gender: "male" },
        { id: 3, name: "Marry", gender: "female" },
        { id: 4, name: "Rose", gender: "female" },
      ],
      displayUsers: [],
    };
  },
  created() {
    this.displayUsers = this.users;
  },
  methods: {
    showAll() {
      this.displayUsers = this.users;
    },
    showMale() {
      this.displayUsers = this.users.filter((user) => user.gender === "male");
    },
    showFemale() {
      this.displayUsers = this.users.filter((user) => user.gender === "female");
    },
  },
};
</script>

<style scoped>
div > .btn button {
  margin-right: 10px;
}
</style>
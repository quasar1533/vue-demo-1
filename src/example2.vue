<template>
  <div>
    <div class="btn">
      <button @click="setGender('')">show all</button>
      <button @click="setGender('male')">show male</button>
      <button @click="setGender('female')">show female</button>
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
      gender: "",
    };
  },
  computed: {
    displayUsers() {
      console.log("执行了一次");
      // 这里采用更加简化的HASH方式
      const hash = {
        male: "male",
        female: "female",
      };
      const { users, gender } = this;
      if (gender === "") {
        return users;
      } else if (typeof gender === "string") {
        return users.filter((u) => u.gender === hash[gender]);
      } else {
        throw new Error("unexpected gender value");
      }
    },
  },
  methods: {
    showAll() {
      this.gender = "";
    },
    showMale() {
      this.gender = "male";
    },
    showFemale() {
      this.gender = "female";
    },
    setGender(gender) {
      this.gender = gender;
    },
  },
};
</script>

<style scoped>
div > .btn button {
  margin-right: 10px;
}
</style>
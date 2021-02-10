<template>
  <div class="main">
    <label>
      <textarea v-model="message" placeholder="edit me" />
    </label>
    <p>Message is: {{ message }}</p>
    <hr />
    <p>
      <span>checkbox</span>
      <br />
      <label>
        <input type="checkbox" v-model="x" />
        <span>x: {{ x }}</span>
      </label>
    </p>
    <p>
      <span>multiple</span>
      <br />
      you choices is: {{ choices }}
      <br />
      <label>
        <input type="checkbox" v-model="choices" :value="1" />
        <span>a</span>
      </label>
      <label>
        <input type="checkbox" v-model="choices" :value="2" />
        <span>b</span>
      </label>
      <label>
        <input type="checkbox" v-model="choices" :value="3" />
        <span>c</span>
      </label>
    </p>
    <p>
      multiple choices
      <br />
      your choice is: {{ choice }}
      <br />
      <label>
        <input name="wanted" type="radio" v-model="choice" :value="1" />
        <span>1</span>
      </label>
      <br />
      <label>
        <input name="wanted" type="radio" v-model="choice" :value="2" />
        <span>2</span>
      </label>
      <br />
      <label>
        <input name="wanted" type="radio" v-model="choice" :value="3" />
        <span>3</span>
      </label>
    </p>
    <p>
      drop-down list
      <br />
      you want {{ wants }}
      <br />
      <label>
        <select v-model="wants">
          <option value>-</option>
          <option v-for="item in list" :value="item.value" :key="item.value">
            {{ item.option }}
          </option>
        </select>
      </label>
    </p>
    <hr />
    <div>
      A form
      <br />
      <form @submit.prevent="onSubmit">
        <label>
          <span>username</span>
          <input type="text" v-model="user.name" />
        </label>
        <br />
        <label>
          <span>password</span>
          <input type="password" v-model="user.password" />
        </label>
        <br />
        <button type="submit">log in</button>
        <div>{{ display }}</div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "hi",
      x: true,
      choices: [],
      choice: "",
      list: [
        { option: "a", value: 1 },
        { option: "b", value: 2 },
        { option: "c", value: 3 },
      ],
      wants: [],
      user: {
        name: "",
        password: "",
      },
      display: "",
    };
  },
  methods: {
    onSubmit() {
      this.display = this.user.name;
    }
  }
};
</script>

<style scoped>
</style>
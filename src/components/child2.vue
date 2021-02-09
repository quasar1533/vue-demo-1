<template>
  <div>Child2</div>
</template>

<script>
import log from "../mixins/log.js";

export default {
  mixins: [log],
  data() {
    return {
      name: 'Child2',
    };
  },
};
</script>
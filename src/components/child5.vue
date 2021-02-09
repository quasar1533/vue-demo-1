<template>
  <div>Child5</div>
</template>

<script>
import log from "../mixins/log.js";

export default {
  mixins: [log],
  data() {
    return {
      name: 'Child5',
    };
  },
};
</script>
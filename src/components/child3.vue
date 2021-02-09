<template>
  <div>Child3</div>
</template>

<script>
import log from "../mixins/log.js";

export default {
  mixins: [log],
  data() {
    return {
      name: 'Child3',
    };
  },
};
</script>
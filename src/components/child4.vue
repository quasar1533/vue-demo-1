<template>
  <div>Child4</div>
</template>

<script>
import log from "../mixins/log.js";

export default {
  mixins: [log],
  data() {
    return {
      name: 'Child4',
    };
  },
};
</script>
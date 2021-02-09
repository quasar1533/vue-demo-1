const log = {
  data() {
    return {
      name: undefined,
      startTime: undefined,
    };
  },
  created() {
    this.startTime = new Date();
    console.log(`${this.name} created`);
  },
  beforeDestroy() {
    const endTime = new Date();
    console.log(`${this.name} shut down, exits ${(endTime - this.startTime) / 1000}s`);
  },
};

export default log;

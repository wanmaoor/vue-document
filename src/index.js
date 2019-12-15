Vue.component("Title", {
  render(h) {
    return h("h" + this.level, this.$slots.default);
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
});

new Vue({
  el: "#app",
  template: `
    <Title :level="1">hello world</Title>
  `
});

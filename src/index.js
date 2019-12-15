new Vue({
  el: "#app",
  template: `
    <div id="example">
      {{message}}
      <button @click="updateMessage">更新</button>
    </div>
  `,
  data() {
    return {
      message: "not updated"
    };
  },
  methods: {
    updateMessage() {
      this.message = "updated";
      this.message = "updated1";
      this.message = "updated2";
      this.message = "updated3";
      // console.log(this.$el.textContent);
      this.$nextTick(function() {
        console.log(this.$el.textContent);
      });
    }
  }
});

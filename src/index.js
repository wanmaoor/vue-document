import "./styles.css";
let vm = new Vue({
  el: "#app",
  data: {
    message: "hello"
  },
  computed: {
    reversedMessage() {
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  }
});

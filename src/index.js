import "./styles.css";
let vm = new Vue({
  el: "#app",
  data: {
    message: "hello",
    n: 0
  },
  methods: {
    reversedMessage() {
      console.log("methods被调用");
      return (
        "methods:" +
        this.message
          .split("")
          .reverse()
          .join("")
      );
    },
    add() {
      this.n += 1;
    },
    wanmao() {
      this.computedReversedMessage = "wanmao";
    }
  },
  computed: {
    computedReversedMessage: {
      get() {
        console.log("computed 被调用");
        return (
          "computed:" +
          this.message
            .split("")
            .reverse()
            .join("")
        );
      },
      set(newValue) {
        this.message = newValue
          .split("")
          .reverse()
          .join("");
      }
    }
  }
});

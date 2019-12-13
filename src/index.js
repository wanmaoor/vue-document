new Vue({
  el: "#app",
  template: `
    <div>
      <input v-model="msg" placeholder="edit me" />
      <p>Message is {{msg}}</p>
    </div>
  `,
  data() {
    return {
      msg: ""
    };
  },
  methods: {}
});

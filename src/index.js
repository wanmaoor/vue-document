const mixIns = {
  created() {
    console.log("mixin is awesome");
  },
  data() {
    return {
      protoData: 1
    };
  },
  methods: {
    add() {
      this.protoData += 1;
    }
  }
};

Vue.component("foo", {
  template: `
    <div>
      foo
      <p>{{protoData}}</p>
      <button @click="add">foo +1</button>
    </div>
  `,
  mixins: [mixIns]
});

Vue.component("bar", {
  template: `
    <div>
      foo
      <h1>{{protoData}}</h1>
      <button @click="add">bar +1</button>
    </div>
  `,
  mixins: [mixIns]
});

new Vue({
  el: "#app",
  template: `
    <div>
      <foo />
      <bar />
    </div>
  `
});

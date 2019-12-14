Vue.component("sub-1", {
  template: `
  <p>
    {{bar}}
    <button @click="getBaz">get baz</button>
    {{placeholder}}
  </p>`,
  data() {
    return {
      placeholder: 0
    };
  },
  computed: {
    bar() {
      return this.$root.foo;
    }
  },
  methods: {
    getBaz() {
      this.placeholder = this.$root.bar;
      this.$root.baz();
    }
  }
});

new Vue({
  el: "#app",
  template: `
    <div>
      <sub-1 />
    </div>
  `,
  data() {
    return {
      foo: 1
    };
  },
  computed: {
    bar() {
      return "bar";
    }
  },
  methods: {
    baz() {
      alert("你调用了根元素的方法");
    }
  }
});

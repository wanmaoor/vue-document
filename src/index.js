Vue.component("sub-1", {
  template: `
  <p>
    sub-1
  </p>`,
  data() {
    return {
      placeholder: 0
    };
  }
});

new Vue({
  el: "#app",
  template: `
    <div>
      <sub-1 ref="sub"/>
      <button @click="fetchRefs">获取refs.sub.placeholder</button>
      <p>{{placeholder}}</p>
    </div>
  `,
  data() {
    return {
      foo: 1,
      placeholder: ""
    };
  },
  methods: {
    fetchRefs() {
      this.placeholder = this.$refs.sub.placeholder;
    }
  }
});

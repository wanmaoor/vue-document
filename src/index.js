Vue.component("son", {
  template: `
    <div style="border: 1px solid red">
      <p>I'm son</p>
      <p>全局状态: {{globalState}}</p>
      <slot></slot>
    </div>
  `,
  inject: ["globalState"]
});

Vue.component("grandSon", {
  template: `
    <div style="border: 1px solid black; width: 50%; margin: 10px">
      <p>I'm grandSon</p>
      <p>全局状态: {{globalState}}</p>
    </div>
  `,
  inject: ["globalState"]
});

new Vue({
  el: "#app",
  template: `
    <div>
      <son>
        <grandSon />
      </son>
    </div>
  `,
  data() {
    return {
      globalState: 1
    };
  },
  provide() {
    return {
      globalState: this.globalState
    };
  }
});

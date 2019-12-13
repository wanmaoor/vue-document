Vue.component("navigation-link", {
  props: ["url"],
  template: `
  <a
    :href="url"
  >
  子组件: Clicking here will send you to: {{ url }}
  <br/>
  <slot></slot>
</a>
  `,
  data() {
    return {};
  }
});

new Vue({
  el: "#app",
  template: `
    <navigation-link url="https://baidu.com">
    Logged in as {{ user }}
    <br/>
    父组件: Clicking here will send you to: {{ url }}
    </navigation-link>
  `,
  data() {
    return {
      user: "wanmao"
    };
  }
});

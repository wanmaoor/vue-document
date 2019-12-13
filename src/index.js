Vue.component("navigation-link", {
  props: ["url", "fallback"],
  template: `
  <a
    :href="url"
  >
  子组件: Clicking here will send you to: {{ url }}
  <br/>
  <slot>{{fallback}}</slot>
</a>
  `,
  data() {
    return {};
  }
});

new Vue({
  el: "#app",
  template: `
    <navigation-link url="https://baidu.com" :fallback="fallback">
   
    </navigation-link>
  `,
  data() {
    return {
      user: "wanmao",
      fallback: "This is fall back content"
    };
  }
});

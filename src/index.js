Vue.component("current-user", {
  template: `
  <span>
    <slot :user="user">{{ user.lastName }}</slot>
  </span>
  `,
  data() {
    return {
      user: {
        firstName: "wan",
        lastName: "fallback content",
        other: "other"
      }
    };
  }
});

new Vue({
  el: "#app",
  template: `
  <current-user #default="{user}">
    {{user.firstName}}
  </current-user>
  `
});

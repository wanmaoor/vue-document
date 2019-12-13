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
        lastName: "fallback content"
      }
    };
  }
});

new Vue({
  el: "#app",
  template: `
  <current-user v-slot:default="slotProps">
    {{slotProps.user.firstName}}
  </current-user>
  `
});

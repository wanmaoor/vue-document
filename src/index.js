Vue.component("current-user", {
  template: `
  <span>
    <slot :user="user">{{ user.lastName }}</slot>
    <slot :user="user" name="other">{{ user.other }}</slot>
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
  <current-user>
   <template v-slot="slotProps">
    {{slotProps.user.firstName}}
   </template>
   <template v-slot:other="otherSlotProps">
    {{otherSlotProps.user.other}}
   </template>
  </current-user>
  `
});

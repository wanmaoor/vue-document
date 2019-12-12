import "./styles.css";
Vue.component("alert-box", {
  template: `
    <div :style="styles">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `,
  data() {
    return {
      styles: {
        boder: "red",
        background: "#cc3e44",
        height: "40px",
        width: "100%"
      }
    };
  }
});

new Vue({
  el: "#app",
  template: `
    <alert-box> what fuck?? </alert-box>
  `
});

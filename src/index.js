import "./styles.css";
new Vue({
  el: "#app",
  template: `
    <div>
    <button-counter />
    <button-counter />
    <button-counter />
    </div>
  `
});
Vue.component("button-counter", {
  data() {
    return {
      count: 0
    };
  },
  template: `
    <button @click="count++">You click me {{count}} times</button>
  `
});

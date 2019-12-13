import "./styles.css";

new Vue({
  el: "#app",
  template: `
    <div>
      <p>{{count}}</p>
      <button @click="count ++">+1</button>
    </div>
  `,
  data() {
    return {
      count: 0
    };
  }
});

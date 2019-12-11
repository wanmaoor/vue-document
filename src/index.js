import "./styles.css";
let data = { a: 1 };
let vm = new Vue({
  el: "#app",
  data: data
});

console.log(vm.$data === data);
console.log(vm.$el === document.querySelector("#app"));

vm.$watch("a", (newValue, oldValue) => {
  console.log(newValue);
  console.log(oldValue);
});

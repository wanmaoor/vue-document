import "./styles.css";
let data = { a: 1 };
let vm = new Vue({
  el: "#app",
  template: "<div>hello</div>",
  data: data
});

console.log(data.a == vm.a);

vm.a = 2;
console.log(data.a);

data.a = 3;
console.log(vm.a);

vm.b = "3";

console.log(data.b);

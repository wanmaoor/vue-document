Vue.component("Son", {
  template: `
   <div>
   <p>{{count}}</p>
   <button @click="$emit('update:count', count+1)">+1</button>
   </div>
  `,
  props: ["count"]
});

new Vue({
  el: "#app",
  data() {
    return {
      n: 1
    };
  },
  template: `
    <Son :count.sync="n" />
  `
});

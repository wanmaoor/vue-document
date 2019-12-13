new Vue({
  el: "#app",
  template: `
    <div>
    <input type="checkbox" id="jack" value="1" v-model="checkedNames">
  <label for="jack">Jack</label>
  <input type="checkbox" id="john" value="2" v-model="checkedNames">
  <label for="john">John</label>
  <input type="checkbox" id="mike" value="3" v-model="checkedNames">
  <label for="mike">Mike</label>
  <br>
  <span>Checked names: {{ checkedNames }}</span>
    </div>
  `,
  data() {
    return {
      checkedNames: []
    };
  },
  methods: {}
});

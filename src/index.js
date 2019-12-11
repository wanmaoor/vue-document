import "./styles.css";
let vm = new Vue({
  el: "#app",
  template: `<div>
    <p>hello</p>
    <a :[attributeName]="url">link</a>
  </div>`,
  data: {
    attributeName: "href",
    url: "https://baidu.com"
  }
});

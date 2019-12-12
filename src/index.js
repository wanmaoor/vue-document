import "./styles.css";
Vue.component("blog-post", {
  props: ["title"],
  template: `
    <h1>{{title}}</h1>
  `
});
new Vue({
  el: "#app",
  template: `
    <div>
      <blog-post v-for="post in posts" :key="post.id" v-text="post.title" />
      
    </div>
  `,
  data: {
    posts: [
      { id: 1, title: "My journey with Vue" },
      { id: 2, title: "Blogging with Vue" },
      { id: 3, title: "Why Vue is so fun" }
    ]
  }
});

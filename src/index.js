Vue.component("blog-post", {
  props: {
    title: String,
    number: Number
  },
  template: `
  <div>
    <h1>{{title}}</h1>
    <h2>{{number}}</h2>
  </div>
    
    
  `
});
new Vue({
  el: "#app",
  template: `
    <div>
      <blog-post 
        v-for="post in posts" 
        :key="post.id" 
        v-bind="post"/>    
    </div>
  `,
  data: {
    posts: [
      { id: 1, title: "My journey with Vue", number: 23 },
      { id: 2, title: "Blogging with Vue", number: 24 },
      { id: 3, title: "Why Vue is so fun", number: 30 }
    ]
  }
});

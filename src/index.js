import "./styles.css";
Vue.component("blog-post", {
  props: ["title"],
  template: `
     <div>
      <h1>{{title}}</h1>
      <button @click="$emit('enlarge')">enlarge text</button>
      <button @click="$emit('dwindle')">dwindle text</button>
     </div>
  `
});
new Vue({
  el: "#app",
  template: `
    <div :style="{fontSize: postFontSize + 'em'}">
      <blog-post 
        v-for="post in posts"
        :key="post.id" 
        :title="post.title"
        @enlarge="postFontSize+=0.1"
        @dwindle="postFontSize-=0.1"
      >
        {{post.title}}
      </blog-post>
    </div>
  `,
  data() {
    return {
      posts: [
        { id: 1, title: "My journey with Vue" },
        { id: 2, title: "Blogging with Vue" },
        { id: 3, title: "Why Vue is so fun" }
      ],
      postFontSize: 1
    };
  }
});

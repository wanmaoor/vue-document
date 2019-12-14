Vue.component("async-example", (resolve, reject)=>{
  setTimeout(()=>{
    resolve({
      template: `<div>I am async</div>`
    })
  },3000)
})


new Vue({
  el:"#app",
  template: `
    <div>
      <async-example />
      {{n}}
    </div>
  `,
  data(){
    return {
      n: '3秒后出现'
    }
  }
})
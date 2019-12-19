let index = 0;
const createUser = (name, gender) => {
  return { id: index++, name, gender };
};
new Vue({
  el: "#app",
  template: `
    <div>
      <button @click="setGender('')">全部</button>
      <button @click="setGender('male')">男</button>
      <button @click="setGender('female')">女</button>
      <ul>
        <li v-for="user in displayUsers" :key="user.id">
          {{user.name}} - {{user.gender}}
        </li>
      </ul>
    </div>
  `,
  data() {
    return {
      users: [
        createUser("Alan", "male"),
        createUser("Alice", "female"),
        createUser("Bob", "male"),
        createUser("Daisy", "female")
      ],
      gender: ""
    };
  },
  computed: {
    displayUsers() {
      const { gender, users } = this;
      if (gender === "") {
        return users;
      } else {
        return users.filter(user => user.gender === gender);
      }
    }
  },
  methods: {
    setGender(gender) {
      this.gender = gender;
    }
  }
});

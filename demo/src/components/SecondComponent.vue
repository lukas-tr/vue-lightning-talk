<template>
    <div>
        <div>
            <button @click="addUser">Add user</button>
             <ul>
                <user v-for="(user, index) in users" :key="index" :name="user" />
            </ul>
        </div>
    </div>
</template>
<script>
import User from "./User.vue";

export default {
  components: {
    User
  },
  data() {
    return {
      users: []
    };
  },
  methods: {
    addUser() {
      const name = prompt("Enter a name", "John Doe");
      if (name) {
        this.users.push(name);
      }
    }
  },
  watch: {
    users() {
      alert("Users changed");
    }
  }
};
</script>
<template>
    <div>
        <div>
            <label>First Name:
                <input class="red" v-model="firstName" />
            </label>
            <div>Hi there, {{fullName}}!</div>
        </div>
        <div>
            <button @click="show = !show">Toggle show</button>
            <div v-if="show">I might be hidden</div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      show: false
    };
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
};
</script>
<style scoped>
.red {
  background-color: red;
}
</style>
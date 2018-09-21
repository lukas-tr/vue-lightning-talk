---?image=https://vuejs.org/images/logo.png&size=auto 75%&position=bottom&opacity=25

# Vue and Vue CLI

### a framework for building user interfaces

---

## Vue

#### The basics

+++
@title[Basic Vue app]

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<div id="app">
  {{ welcomeMessage }}
</div>
<script>
  const app = new Vue({
    el: "#app",
    data: {
      welcomeMessage: "Hello World!"
    }
  })
</script>
```

@[1]
@[2-4]
@[5,6,12]
@[5,7,12]
@[5,8-10,12]

###### a basic Vue app

+++

### Core concepts

@ul[squares]

- Declarative
- Reactive
- Uses components
- Virtual DOM

@ulend

+++

### Additional features

@ul[squares]

- Client-side routing
- State management

@ulend

---

## Vue CLI

#### The basics

+++

```bash
$ npm i -g @vue/cli
$ vue create my-app
? Please pick a preset:
> vue-component-1 (vue-router, babel, eslint, unit-jest)
  default (babel, eslint)
  Manually select features
$ cd demo
$ npm run serve
```

@[1]
@[2-6]
@[7-8]

+++

### Parts

@ul[squares]

- CLI `@vue/cli`
- CLI Service `@vue/cli-service`
- CLI Plugins `@vue/cli-plugin-`

@ulend

+++

### Single File Components

@ul[squares]

- `<template>`
- `<script>`
- `<style>`

@ulend

+++

### Development

@ul[squares]

- `vue-loader`
- Chrome/Firefox Dev Tools

@ulend

---

## Vue Components

+++

@ul[squares]

- Encapsulated state
- Reusable
- Communication with events and props (or a store)

@ulend

+++

### Lifecycle Hooks

```javascript
export default {
  mounted() {
    console.log("Hi there");
  }
};
```

+++

### Example

```html
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
```

@[4-6] Two-way data binding
@[31-35] Style
@[15,17-23,30] data
@[7] Mustaches
@[15,24-28,30] computed properties
@[10] Events
@[11] Conditional rendering

+++

### Second example

```html
<template>
    <div>
        <div>
            <button @click="addUser">Add user</button>
             <ul>
                <user
                  v-for="(user, index) in users"
                  :key="index"
                  :name="user"
                />
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
  data: () => () => ({ users: [] }),
  methods: {
    addUser() {
      this.users.push(prompt("Enter a name", "John Doe"));
    }
  },
  watch: {
    users() {
      alert("Users changed");
    }
  }
};
</script>
```

@[6-10] List rendering
@[15,16,19-21,34] Components
@[15,23-27,34] Methods
@[15,28-34] Watchers

---

## Angular vs Vue

+++

@ul[squares]

- Very similar
- Market share
- Syntax complexity

@ulend

+++?image=downloads.png&size=auto&position=center

---

### Thanks

@size[0.5em](Sources: <a href="https://vuejs.org/">Vue Docs</a>, <a href="https://cli.vuejs.org/">Vue CLI Docs</a>, <a href="https://www.npmtrends.com/vue-vs-@angular/core">npmtrends.com</a>)

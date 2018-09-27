---?image=https://vuejs.org/images/logo.png&size=auto 80%&position=center&opacity=25
@title[Logo]

---

# Vue and Vue CLI

### a framework for building user interfaces

@size[0.5em](<a href="https://github.com/lukas-tr/vue-lightning-talk">github.com/lukas-tr/vue-lightning-talk</a>)

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
@[5,6,11-12]
@[5,7,12]
@[5,8-10,12]

###### a basic Vue app

+++

### Core concepts

@ul[squares]

- Declarative
- Reactive

@ulend

+++

### Additional features

@ul[squares]

- Uses components
- Virtual DOM
- Client-side routing
- State management

@ulend

---

## Vue CLI

#### The basics

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
- Vetur (VS Code)

@ulend

---

## Vue Components

+++

### Components

@ul[squares]

- Encapsulated state
- Reusable
- Communication with events and props

@ulend

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

@[15,17-23,30] data
@[4-6] Two-way data binding
@[31-35] Style
@[15,24-28,30] computed properties
@[7] Mustaches
@[10] Events
@[11] Conditional rendering

@size[0.5em](<a href="https://lukas-tr.github.io/vue-lightning-talk/">lukas-tr.github.io/vue-lightning-talk</a>)

---

## Angular vs Vue

+++

### Differences and similarities

@ul[squares]

- Syntax complexity
- Market share
- 3rd party libraries

@ulend

+++?image=downloads.png&size=auto&position=center
@title[Market share]

---

### Thanks

@size[0.5em](Sources: <a href="https://vuejs.org/">Vue Docs</a>, <a href="https://cli.vuejs.org/">Vue CLI Docs</a>, <a href="https://www.npmtrends.com/vue-vs-@angular/core">npmtrends.com</a>)

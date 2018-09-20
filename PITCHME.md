---?image=https://vuejs.org/images/logo.png&size=auto 50%&position=bottom 30px&color=#CCDAE7

@snap[north]
# Vue and Vue CLI
### a framework for building user interfaces
@snapend

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

### Basic features

@ul[squares]

- Reactive
- Components
- Virtual DOM

@ulend

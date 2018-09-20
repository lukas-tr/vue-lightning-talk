---?image=https://vuejs.org/images/logo.png&size=auto 50%&position=bottom&color=#CCDAE7

# Vue and Vue CLI
### a framework for building user interfaces

@div[left-50]
<br><br>
![Logo](https://vuejs.org/images/logo.png)
@divend


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

# Vue and Vue CLI
### a framework for building user interfaces

---

## Vue
### The basics

+++

```
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
@[6]
@[7]
@[8-10]

+++


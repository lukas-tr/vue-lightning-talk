# Vue and Vue CLI
### a framework for building user interfaces

---

### Vue
##### The basics

+++
@title[Basic Vue app]

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

###### a basic Vue app

---

### Code-Blocks
##### Using
#### **Code-Presenting**

![Press Down Key](assets/down-arrow.png)

+++
@title[Sample Code Presenting]

```python
from time import localtime

activities = {8: 'Sleeping', 9: 'Commuting', 17: 'Working',
              18: 'Commuting', 20: 'Eating', 22: 'Resting' }

time_now = localtime()
hour = time_now.tm_hour

for activity_time in sorted(activities.keys()):
    if hour < activity_time:
        print activities[activity_time]
        break
else:
    print 'Unknown, AFK or sleeping!'
```

@[1]
@[3-4]
@[6-7]
@[9-14]

###### Use code-presenting to **step-thru** code <p> from directly within your presentation 

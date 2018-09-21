import Vue from "vue";
import Router from "vue-router";
import Example1 from "./views/Example1.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Example1",
      component: Example1
    },
    {
      path: "/2",
      name: "Example2",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Example2.vue")
    }
  ]
});

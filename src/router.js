import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./routes/Home";
import Topic from "./routes/Topic";
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/topic/:id",
      name: "topic",
      component: Topic
    },
    {
      path: "*",
      name: "Home",
      component: Home
    }
  ]
});

import Vue from "vue";
import VueRouter from "vue-router";
import Topic from "./routes/Topic";
import Login from "./routes/Login";
import Post from "./routes/Post";
import Message from "./routes/Message";
Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      //redirect: "/?tab=all",
      name: "post",
      component: Post
    },
    {
      path: "/topic/:id",
      name: "topic",
      component: Topic
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      //meta: { requireAuth: true }
    },
    {
      path: "/message",
      name: "message",
      component: Message,
      meta: { requireAuth: true }
    },
    {
      path: "*",
      component: Post
    }
  ]
});

import Vue from "vue";
import VueRouter from "vue-router";
import Topic from "./routes/Topic";
import Login from "./routes/Login";
import Post from "./routes/Post";
import Message from "./routes/Message";
import User from "./routes/User";
import About from './routes/About'

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
      component: Login
    },
    {
      path: "/message",
      name: "message",
      component: Message,
      meta: { requireAuth: true }
    },
    {
      path: "/user/:id",
      name: "user",
      component: User,
      meta: { requireAuth: true }
    },
    {
      path: "/user",
      name: "about",
      component: About,
      meta: { requireAuth: true }
    },
    {
      path: "*",
      component: About
    }
  ]
});

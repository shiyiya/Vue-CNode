import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import message from "./util/message";
import "./app.css";

Vue.config.productionTip = false;

Vue.use(message);
//路由重定向
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (localStorage.getItem("token")) {
      next();
    } else {
      next({ path: "/login", query: { redirect: to.fullPath } });
    }
  } else {
    next();
  }
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});

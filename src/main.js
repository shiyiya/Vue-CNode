import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./app.css";
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (sessionStorage.getItem("access_token")) {
      next();
    } else {
      next({
        path: "/login",
        query: { redirect: to.fullPath }
      });
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

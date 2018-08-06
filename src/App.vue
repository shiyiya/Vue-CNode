<template>
  <div id="app">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from "./components/Header";
import axios from "axios";
export default {
  name: "app",
  mounted() {
    axios
      .get("https://cnodejs.org/api/v1/message/count", {
        params: {
          accesstoken: localStorage.token
        }
      })
      .then(_ => {
        _.success && this.$store.commit("setMessageCount", _.data.data);
      });
  },
  components: {
    AppHeader
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 62px;
}
</style>

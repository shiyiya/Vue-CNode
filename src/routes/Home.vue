<template>
  <div id="home">
    <app-header></app-header>
    <post></post>
  </div>
</template>

<script>
import Post from "./Post";
import AppHeader from "../components/Header";
export default {
  name: "home",
  created: function() {
    //console.log(this.$router.params);
  },
  components: {
    Post,
    AppHeader
  }
};
</script>


<style scoped>
</style>

<template>
  <div id="post">
    <li v-for="topic in topics" :key="topic.id">
      <list :data="topic"></list>
    </li>
  </div>
</template>
<script>
import axios from "axios";
import List from "../components/List";
export default {
  name: "post",
  data() {
    return {
      topics: [],
      topicsParams: {
        tab: "all",
        page: 1,
        limit: 15,
        mdrender: true
      }
    };
  },
  mounted() {
    document.documentElement.scrollTo(0, 0);
    document.addEventListener("scroll", this.onScrollHandle);
    this.$route.query.tab && (this.topicsParams.tab = this.$route.query.tab);
    this.getTopics();
  },
  beforeDestroyed() {
    document.removeEventListener("scroll", this.onScrollHandle);
  },
  beforeRouteLeave(to, from, next) {
    document.removeEventListener("scroll", this.onScrollHandle);
    next();
  },
  methods: {
    getTopics() {
      axios
        .get("https://cnodejs.org/api/v1/topics", {
          params: this.topicsParams
        })
        .then(_ => {
          this.topics = this.topics.concat(_.data.data);
        });
    },
    onScrollHandle(event) {
      const clientHeight = event.target.documentElement.clientHeight;
      const scrollHeight = event.target.documentElement.scrollHeight;
      const scrollTop = event.target.documentElement.scrollTop;
      if (scrollTop + clientHeight === scrollHeight) {
        this.topicsParams.page += 1;
        this.getTopics();
      }
    }
  },
  watch: {
    $route(to) {
      document.documentElement.scrollTo(0, 0);
      if (to.query.tab) {
        this.topicsParams = {
          ...this.topicsParams,
          tab: to.query.tab,
          page: 1
        };
        this.topics = [];
        this.getTopics();
      }
      if (to.fullPath === "/") {
        this.topicsParams = {
          ...this.topicsParams,
          tab: "all",
          page: 1
        };
        this.topics = [];
        this.getTopics();
      }
    }
  },
  components: {
    List
  }
};
</script>
<style scoped>
</style>

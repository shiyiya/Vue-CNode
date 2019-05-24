<template>
  <div id="post">
    <li v-for="topic in topics" :key="topic.id">
      <list :data="topic" listType="post"></list>
    </li>
    <loading v-if="isLoading"></loading>
  </div>
</template>
<script>
import axios from "axios";
import List from "../components/List";
import Loading from "../components/Loading";
export default {
  name: "post",
  data() {
    return {
      isLoading: false,
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
    // setTimeout(() => {

    //  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop,
    //     clientHeight = document.body.clientHeight || document.documentElement.clientHeight,
    //     scrollHeight = document.body.scrollHeight || document.documentElement.scrollHeight;

    //     alert(~~(scrollTop + clientHeight - 61) )
    //     alert(scrollHeight)
    // }, 3000);

    window.scrollTo(0, 0);
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
      this.$message("加载中");

      if (!this.isLoading) {
        this.isLoading = true;
        axios
          .get("https://cnodejs.org/api/v1/topics", {
            params: this.topicsParams
          })
          .then(_ => {
            this.topics = this.topics.concat(_.data.data);
            this.isLoading = false;
          });
      }
    },
    onScrollHandle() {
      var scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          0,
        clientHeight =
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight ||
          0,
        scrollHeight =
          document.documentElement.scrollHeight ||
          document.body.scrollHeight ||
          0;

      if (scrollHeight - scrollTop - clientHeight < 20) {
        if (!this.isLoading) {
          this.topicsParams.page += 1;
          this.getTopics();
        }
      }
    }
  },
  watch: {
    $route(to) {
      window.scrollTo(0, 0);
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
    List,
    Loading
  }
};
</script>
<style scoped>
</style>

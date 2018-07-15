<template>
    <div id="post">
      <li v-for="topic in topics" :key="topic.id">
        <router-link :to="{name:'topic',params: { id: topic.id }}">
          <!-- <div class="tag">
            <span v-show="topic.good">good</span>
            <span v-show="topic.top">top</span>
          </div> -->
          <h2 v-text="topic.title"></h2>
          <div class="topic-meta">
            <img class="avatar" :src="topic.author.avatar_url"/>
            <span>{{topic.author.loginname}} 发表于 {{topic.create_at}} </span>
            <span>浏览量 {{topic.visit_count}}</span>
            <span>评论数 {{topic.reply_count}}</span>
          
          </div>
        </router-link>
      </li>
    </div>
</template>
<script>
import axios from "axios";
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
    document.addEventListener("scroll", this.onScrollHandle);
    this.$route.query.tab && (this.topicsParams.tab = this.$route.query.tab);
    this.getTopics();
  },
  beforeDestroyed() {
    document.removeEventListener("scroll", this.onScrollHandle);
  },
  methods: {
    getTopics() {
      axios
        .get("https://cnodejs.org/api/v1/topics", {
          params: this.topicsParams
        })
        .then(_ => {
          this.topics = this.topics.concat(_.data.data);
          console.log(_.data.data);
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
    $route(to, from) {
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
  }
};
</script>
<style scoped>
#post li {
  list-style: none;
  border-bottom: 1px solid #d5dbdb;
  padding: 0.8em 1em;
}
#post a {
  text-decoration: none;
}
#post h2 {
  font-size: 20px;
  letter-spacing: 1px;
  color: #444;
}

.avatar {
  width: 40px;
  height: 40px;
  margin: 0 15px;
  border-radius: 50%;
  vertical-align: middle;
}
.topic-meta span {
  font-size: 13px;
  color: #999;
  margin: 0 0.5em;
}
</style>

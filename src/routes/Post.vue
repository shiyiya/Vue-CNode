<template>
    <div id="post">
      <li v-for="topic in topics" :key="topic.id">
        <router-link :to="{name:'topic',params: { id: topic.id }}">
          <h2 v-text="topic.title"></h2>
          <div class="topic-meta">
            <span v-text="topic.author.loginname"></span>
            <span>发表于{{topic.create_at}}/{{topic.good}}/{{topic.top}}/{{topic.visit_count}}/{{topic.reply_count}}</span>
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
    this.$route.query.tab && (this.topicsParams.tab = this.$route.query.tab);
    this.getTopics();
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
    }
  },
  watch: {
    $route(to, from) {
      console.log(from, "\n", to);
    }
  }
};
</script>
<style scoped>
#post {
  padding: 0.1em 0;
}
#post li {
  list-style: none;
  border-bottom: 1px solid #d5dbdb;
}
#post a {
  text-decoration: none;
}
#post h2 {
  font-size: 20px;
  letter-spacing: 1px;
  color: #444;
}
.topic-meta {
  font-size: 13px;
  color: #999;
}
</style>

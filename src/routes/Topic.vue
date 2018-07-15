<template>
      <article class="topic markdown-body">
        <h2 class="topic-title" v-text="topic.title"></h2>
        <ul class="topic-meta">
          <router-link :to="{name:'user',params:{id:topic.author_id}}" >
            {{topic.author.loginname}}
            </router-link>
          <li v-text="topic.create_at"/>
          <li>浏览量：{{topic.visit_count}}</li>
          <li>分类：{{topic.tab}}</li>
          <li class="tag">
            <span v-show="topic.good">good</span>
            <span v-show="topic.top">top</span>
          </li>
        </ul>
        <section v-html="topic.content" class="topic-content"/>
      </article>
</template>

<script>
import axios from "axios";
import "github-markdown-css";
export default {
  name: "topic",
  data() {
    return {
      topicId: "",
      topic: {}
    };
  },
  mounted() {
    this.topicId = this.$route.params.id;
    axios.get(`https://cnodejs.org/api/v1/topic/${this.topicId}`).then(res => {
      this.topic = res.data.data;
      //console.log(this.topic.loginname);
    });
  }
};
</script>
<style scoped>
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
.topic-meta {
  text-align: right;
}
.topic-meta > li {
  display: inline-block;
  font-size: smaller;
  color: #8796a3;
  margin: 0 0.5em;
}
</style>

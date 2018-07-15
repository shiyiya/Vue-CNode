<template>
<div>
    <header id="mobile-header">
        <a class="menu-button" @click="toggleAside()"></a>
        <span class="tab-title">{{this.$route.query.tab||this.$route.name}}</span>
        <aside class="mobile-bar"  :class="{ show: aside }">
          <ul>
            <li v-for="tab in tabs" :key="tab.tab">
                <router-link  @click.native="toggleAside()" :class="getAvtiveTab(tab.tab) ? 'active':''" exact :to="{path:'./',query: {tab:tab.tab}}">{{tab.name}}</router-link>
            </li>
            <li v-for="page in pages" :key="page.page">
                <router-link  @click.native="toggleAside()" class="nav-page" :to="{name:page.page}">{{page.name}}</router-link>
            </li>
          </ul>
        </aside>
    </header>
    <div id="header">
        <router-link id="logo" :to="{path:'/'}">
            <img src="../assets/logo.png"/>
        </router-link>
        <span>Vue-CNode</span>
        <ul id="nav">
            <li v-for="tab in tabs" :key="tab.tab">
                <router-link :class="getAvtiveTab(tab.tab) ? 'active':''" exact :to="{path:'./',query: {tab:tab.tab}}">{{tab.name}}</router-link>
            </li>
            <li v-for="page in pages" :key="page.page">
                <router-link class="nav-page" :to="{path:page.page,params:{id:page.params}}">{{page.name}}</router-link>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
export default {
  //name: "header",
  data() {
    return {
      aside: false,
      tabs: [
        { tab: "all", name: "全部" },
        { tab: "good", name: "精华" },
        { tab: "share", name: "分享" },
        { tab: "ask", name: "问答" },
        { tab: "job", name: "招聘" }
      ],
      pages: [
        { page: "message", name: "消息" },
        {
          page: "user",
          params: `${localStorage.token || ""}`,
          name: "个人中心",
          show: this.login
        }
      ]
    };
  },
  mounted() {},
  methods: {
    getAvtiveTab(_) {
      if (this.$route.path === "/" && !this.$route.query.tab && _ === "all") {
        return true;
      }
      return false;
    },
    getMobileHeaderTitle() {},
    toggleAside() {
      this.aside = !this.aside;
    }
  }
};
</script>
<style scoped>
#mobile-header {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
  text-align: center;
}
.menu-button {
  width: 40px;
  height: 40px;
  position: absolute;
  left: 0;
  top: 0;
  background: url(../assets/menu.png);
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: 50%;
}
.tab-title {
  line-height: 40px;
}
.mobile-bar {
  position: fixed;
  display: none;
  top: 42px;
  left: 0;
  width: 100%;
}
.mobile-bar ul {
  padding: 0;
  margin: 0;
}
.mobile-bar li {
  background-color: #fff;
  border-bottom: #42b983 2px solid;
  color: #34495e;
}
.mobile-bar li a {
  display: block;
  width: 100%;
  padding: 0.5em 0;
  transition: background-color 0.2s ease;
}
.mobile-bar li a:hover {
  background: #42b983;
}
.tab-title {
  text-transform: uppercase;
}
#header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 10px 60px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
  background-color: #fff;
}
#logo {
  display: inline-block;
  font-size: 1.5em;
  line-height: 40px;
  color: #2c3e50;
  font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  font-weight: 500;
}
#logo img {
  vertical-align: middle;
  margin-right: 6px;
  width: 40px;
  height: 40px;
}
#header #nav {
  position: fixed;
  list-style-type: none;
  margin: 0;
  padding: 0;
  right: 30px;
  top: 10px;
  height: 40px;
  line-height: 40px;
}
#nav li {
  display: inline-block;
  position: relative;
  margin: 0 0.6em;
}
#nav li a {
  color: black;
}
#nav .router-link-exact-active,
#nav .active {
  border-bottom: 3px solid #42b983;
  padding-bottom: 3px;
}
.show {
  display: block;
}
@media screen and (max-width: 900px) {
  #mobile-header {
    display: block;
  }
  #header {
    display: none;
  }
}
</style>

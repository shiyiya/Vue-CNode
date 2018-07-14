<template>
<div>
    <header id="mobile-bar">
        <a class="menu-button"></a>
        <span class="tab-title">title</span>
    </header>
    <div id="header">
        <a id="logo" href="/">
            <img src="../assets/logo.png"/>
        </a>
        <span>Vue-CNode</span>
        <ul id="nav">
            <li v-for="tab in tabs" :key="tab.tab">
                <router-link class="nav-link" :to="{path:'/',query: {tab:tab.tab}}">{{tab.name}}</router-link>
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
      tabs: [
        { tab: "all", name: "全部" },
        { tab: "good", name: "精华" },
        { tab: "share", name: "分享" },
        { tab: "ask", name: "问答" },
        { tab: "job", name: "招聘" },
        { tab: "login", name: "登陆" },
        { tab: "message", name: "消息" }
      ]
    };
  }
};
</script>
<style scoped>
#mobile-bar {
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
@media screen and (max-width: 900px) {
  #mobile-bar {
    display: block;
  }
  #header {
    display: none;
  }
}
</style>

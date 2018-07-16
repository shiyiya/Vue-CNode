<template>
  <div id="login-page">
    <input type="text" placeholder="在此填入你的Access Token" v-model="token" maxlength="36" required />
    <input @click="login" type="button" value="登陆" />
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      token: ""
    };
  },
  methods: {
    login() {
      if (this.token === "" || this.token.length < 36) {
        this.$message("请检查你的token是否正确");
        return false;
      }
      axios
        .post("https://cnodejs.org/api/v1/accesstoken", {
          accesstoken: this.token
        })
        .then(res => {
          if (res.data.success) {
            localStorage.token = this.token;
            let userInfo = {
              avatar_url: res.data.avatar_url,
              loginname: res.data.loginname,
              token: res.data.id
            };
            localStorage.userInfo = JSON.stringify(userInfo);
            //console.log(res.data);
            this.$message("登陆成功~");
            let redirect = this.$route.query.redirect || "/";
            this.$router.push({
              path: redirect
            });
          }
        })
        .catch(() => {
          this.$message("请检查你的token是否正确");
        });
    }
  }
};
</script>
<style scoped>
#login-page {
  width: 50%;
  height: 50%;
  overflow: auto;
  margin: auto;
}
#login-page input {
  outline: 0;
  border: none;
  display: block;
  margin: 2em auto;
}
#login-page input[type="text"] {
  width: 80%;
  padding: 0.5em 0;
  text-align: center;
  border-bottom: #42b983 2px solid;
}
#login-page input[type="button"] {
  padding: 0.5em 2em;
  border-radius: 1em;
  background-color: #42b983ba;
  transition: background-color 0.2s ease;
}
#login-page input[type="button"]:hover {
  background-color: #42b983;
}
</style>

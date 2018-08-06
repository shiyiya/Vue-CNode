import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const login = new Vuex.Store({
  state: {
    loginname: "",
    messageCount: 0
  },
  getters: {
    getLoginname(state) {
      return state.loginname;
    }
  },
  mutations: {
    setLoginname(state, loginname) {
      state.loginname = loginname;
    },
    setMessageCount(state, data) {
      state.messageCount = data;
    }
  }
});
export default login;

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    db: {
      host: "127.0.0.1",
      port: 3306,
      username: "root",
      password: "root"
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});

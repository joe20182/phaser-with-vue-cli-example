import Vue from "vue";
import Vuex from "vuex";
import circles from "./circles";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    circles
  }
});

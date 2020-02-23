import Vue from "vue";
import Vuex from "vuex";
import circles from "./circles";
import phaserInStore from "./phaser-in-store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    circles,
    phaserInStore
  }
});

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tgjson: {}
  },
  mutations: {
    setTJson (state, geojson) {
      state.tgjson = geojson;
    }
  }
});

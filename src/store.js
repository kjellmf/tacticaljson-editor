import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    tgjson: {},
    mapWrapper: null,

  },
  mutations: {
    setTJson (state, geojson) {
      state.tgjson = geojson;
    },
    assignMap(state, payload) {

      if (state.mapWrapper) {
        state.mapWrapper.map.remove();
      }
      let tmp = {map: payload};
      state.mapWrapper = Object.freeze(tmp);

    },
  }
});

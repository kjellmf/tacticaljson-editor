import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import * as ms from 'milgraphics';

export default new Vuex.Store({
  state: {
    features : [],
    tgjson: {features: [], type: "FeatureCollection"},
    mapWrapper: null,

  },
  mutations: {
    setTJson (state, geojson) {
      state.tgjson = geojson;
    },
    appendTGJson(state, layer) {
      // let features = state.tgjson.features;
      state.features.push(...layer.features);
    },
    clearFeatures(state) {
      state.features = [];
    },
    assignMap(state, payload) {

      if (state.mapWrapper) {
        state.mapWrapper.map.remove();
      }
      let tmp = {map: payload.map, tgLayer: payload.tgLayer};
      state.mapWrapper = Object.freeze(tmp);

    },
  },
  actions: {
    addTGJson({commit, state, getters}, tgJson) {
      let layer = new ms.GraphicsLayer(new ms.format.GeoJSON(tgJson));
      let tglayer = getters.tgLayer;
      tglayer.addLayer(layer.asLeaflet());
      // let tgjson = JSON.parse(JSON.stringify(layer.data));
      commit('appendTGJson', layer.data);
    },
    clearFeatures({commit, state}) {
      commit('clearFeatures');
      let tgLayer = state.mapWrapper.tgLayer;
      tgLayer.clearLayers();
    }
  },
  getters: {
    tgLayer: state => {
      return state.mapWrapper.tgLayer;
    }
  }
});

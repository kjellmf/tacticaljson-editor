import Vue from 'vue';
import App from './App';
import router from './router';
import Vue2Leaflet from 'vue2-leaflet';
import store from "./store";
import {GraphicsLayer} from 'milgraphics';
import asLeflet from './graphicslayer/asleaflet';

GraphicsLayer.prototype.asLeaflet = asLeflet;
Vue.component('v-map', Vue2Leaflet.Map);
Vue.component('v-tilelayer', Vue2Leaflet.TileLayer);
Vue.component('v-marker', Vue2Leaflet.Marker);
Vue.component('v-geojson-layer', Vue2Leaflet.GeoJsonLayer);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {App},
});


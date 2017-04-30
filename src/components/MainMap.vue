<template>
  <v-map id="map-view" :zoom="zoom" :center="center">
    <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
    <v-geojson-layer :geojson="jsonlayer"></v-geojson-layer>
  </v-map>
</template>

<script>
  //  import * as L from 'leaflet'
  import {EventBus} from '../event-bus';
  import Vue2Leaflet from 'vue2-leaflet';
  import turf from 'turf';
  import {getCoord} from 'turf-invariant';
  export default {
    name: 'MainMap',
    components: {
      'v-map': Vue2Leaflet.Map,
      'v-tilelayer': Vue2Leaflet.TileLayer,
      'v-geojson-layer': Vue2Leaflet.GeoJSON,
      'v-marker': Vue2Leaflet.Marker
    },
    data () {
      return {
        zoom: 13,
        center: [47.413220, -1.219482],
        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        jsonlayer: null,
      };
    },
    mounted() {
      EventBus.$on('json-loaded', (layer) => {
        this.jsonlayer = layer;
        this.center= getCoord(turf.center(layer)).reverse();
      });
    },

  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../node_modules/leaflet/dist/leaflet.css";
</style>

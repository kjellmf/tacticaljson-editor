<template>
  <v-map id="map-view" :zoom="zoom" :center="center">
    <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
  </v-map>
</template>

<script>
  //  import * as L from 'leaflet'
  export default {
    name: 'MainMap',
    data () {
      return {
        zoom: 13,
        center: [47.413220, -1.219482],
        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../node_modules/leaflet/dist/leaflet.css";
</style>

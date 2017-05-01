<template>
  <v-map id="map-view" :zoom="zoom" :center="center">
    <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
    <v-geojson-layer :geojson="jsonlayer"></v-geojson-layer>
  </v-map>
</template>

<script>
  import Vue2Leaflet from 'vue2-leaflet';
  import turf from 'turf';
  import {getCoord} from 'turf-invariant';

  // Temp hack to get markers working
  import L from 'leaflet';
  import icon from 'leaflet/dist/images/marker-icon.png';
  import iconShadow from 'leaflet/dist/images/marker-shadow.png';
  let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
  });
  L.Marker.prototype.options.icon = DefaultIcon;


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
    computed: {
      tgjson () {
        return this.$store.state.tgjson;
      }
    },
    watch: {
      tgjson(newValue) {
        this.processJson(newValue);
      }
    },
    methods: {
      processJson(layer) {
//        for (let f of layer.features) {
//          let g = f.graphic;
//          if (g && g.annotations) {
//            for (let a of g.annotations) {
//              a.type = "Feature";
//              layer.features.push(a);
//            }
//          }
//
//        }
        console.log(layer);
        this.jsonlayer = JSON.parse(JSON.stringify(layer));
        this.center = getCoord(turf.center(layer)).reverse();
      }
    }

  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @import "../../node_modules/leaflet/dist/leaflet.css";
</style>

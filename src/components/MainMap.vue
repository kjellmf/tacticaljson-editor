<template>
  <leaflet-map id="map-view" :zoom="zoom" :center="center"></leaflet-map>
</template>

<script>
  import LeafletMap from './LeafletMap';
  import turf from 'turf';
  import {getCoord} from 'turf-invariant';

  export default {
    name: 'MainMap',
    components: {
      'leaflet-map': LeafletMap,

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

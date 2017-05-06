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
      features () {
        return this.$store.state.features;
      }
    },
    watch: {
      features(newValue) {
        if (newValue.length) {
          this.processJson(newValue[newValue.length - 1]);
        }
      }
    },
    methods: {
      processJson(layer) {
        this.center = getCoord(turf.center(layer)).reverse();
      }
    }

  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @import "../../node_modules/leaflet/dist/leaflet.css";
</style>

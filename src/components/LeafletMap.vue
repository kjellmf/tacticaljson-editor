<template>
  <div class="mymap"></div>
</template>

<script>
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
    name: "LeafletMap",
    props: ["zoom", "center"],
    data () {
      return {};
    },
    watch: {
      center() {
        console.log("center");
        if (this.center) {
          this.map.panTo(this.center);
        }
      },
      zoom() {
        if (this.zoom) this.map.setZoom(this.zoom);
      }
    },
    mounted() {
      let map = L.map(this.$el);
      this.map = map;
      this.map.setView(this.center || [0, 0], this.zoom || 0);
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);
      this.$store.commit('assignMap', this.map);
//      EventBus.$on('map-resized', this.resize)
    }
  };

</script>
<style>
  @import "../../node_modules/leaflet/dist/leaflet.css";

  .mymap {
    width: 100%;
    height: 100%;
  }

  .my-icon {
    font: bold 16px sans-serif;
   text-color:black;
    fill:black;
    background-color: white;
    text-wrap:none;
    /*height:auto!important;*/
    width:auto!important;
    text-align:center!important;
    margin-left:-8pt!important;
    margin-top:-8pt!important;
    text-shadow: 2px 2px white!important;
    white-space: pre-line;
    /*position:relative!important;*/
  }

  .label {
    /*font-weight: 700;*/
    font: bold 16px sans-serif;
    text-transform: uppercase;
    text-align: center;
    position:relative;
    /*margin-top: -8px;*/
    margin-top:-50%;

  }

  .label div {
    position: relative;
    background-color: rgba(255,255,255,0.7);
    left: -50%;
    /*text-shadow: 0px 2px 2px rgba(255,255,255,1);*/
  }
</style>

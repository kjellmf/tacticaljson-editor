<template>
  <div class="balla">
  <pre>
    {{ code }}
  </pre>
  </div>
</template>

<script>
  //  import * as L from 'leaflet'

  export default {
    name: 'JsonView',
    data () {
      return {
        code: {
          "type": "FeatureCollection",
          "features": [
            {
              "type": "Feature",
              "properties": {
                "sidc": "G-F-AZIR------X",
                "distance": 5000,
                "uniqueDesignation": "Q36"
              },
              "geometry": {
                "type": "LineString",
                "coordinates": [
                  [
                    0.6008148193359375,
                    47.38672820892124
                  ],
                  [
                    0.6488800048828125,
                    47.40810885284093
                  ]
                ]
              }
            },
            {
              "type": "Feature",
              "properties": {
                "sidc": "G-F-AZIR------X",
                "distance": 5000,
                "uniqueDesignation": "Q36"
              },
              "geometry": {
                "type": "LineString",
                "coordinates": [
                  [
                    0.6008148193359375,
                    47.38672820892124
                  ],
                  [
                    0.6488800048828125,
                    47.40810885284093
                  ]
                ]
              }
            }
          ]
        }
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

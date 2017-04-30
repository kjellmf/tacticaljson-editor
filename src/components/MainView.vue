<template>
  <div class="p-2">
    <label class="btn btn-primary" for="my-file-selector">
      <input id="my-file-selector" type="file" style="display:none;" @change="onFileChange">
      Load file
    </label>
    <div v-if="tgjson.features">
      <div class="card" v-for="feature in tgjson.features">
        <div class="card-block">
          <h6 class="card-subtitle mb-2 text-muted">{{feature.graphic.SIDC}}</h6>
          <table class="table">
            <tr v-for="(value, key)  in feature.properties">
              <th>{{key}}</th>
              <td>{{value}}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as ms from 'milgraphics';
  import {EventBus} from "../event-bus";

  export default {
    name: 'hello',
    data () {
      return {
        tgjson: {}
      };
    },
    methods: {
      onFileChange(e) {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length)
          return;
        var reader = new FileReader();

        reader.onload = (e) => {
          this.myjson = e.target["result"];
          let layer = new ms.GraphicsLayer(new ms.format.GeoJSON(this.myjson));
          console.log(layer);
          this.tgjson = layer.data;

          EventBus.$emit('json-loaded', layer.data);
        };
        reader.readAsText(files[0]);
      }
    }
  };
</script>

<style scoped>

</style>

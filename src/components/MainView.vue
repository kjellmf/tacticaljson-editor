<template>
  <div class="p-2">
    <label class="btn btn-primary" for="my-file-selector">
      <input id="my-file-selector" type="file" style="display:none;" @change="onFileChange">
      Load file
    </label>
  </div>
</template>

<script>
  import * as ms from 'milgraphics';
  import {EventBus} from "../event-bus";

  export default {
    name: 'hello',
    data () {
      return {
      };
    },
    methods: {
      onFileChange(e) {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length)
          return;
        var reader = new FileReader();
        var vm = this;

        reader.onload = (e) => {
          vm.myjson = e.target["result"];
          let layer = new ms.GraphicsLayer(new ms.format.GeoJSON(vm.myjson));
          EventBus.$emit('json-loaded', layer.data);
        };
        reader.readAsText(files[0]);
      }
    }
  };
</script>

<style scoped>

</style>

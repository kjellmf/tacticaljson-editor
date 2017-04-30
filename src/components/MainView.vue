<template>
  <div class="p-2">
    <label class="btn btn-primary" for="my-file-selector">
      <input id="my-file-selector" type="file" style="display:none;" @change="onFileChange">
      Load file
    </label>

    <pre>{{myjson}}</pre>

  </div>
</template>

<script>
  //  import * as L from 'leaflet'
  import * as ms from 'milgraphics';

  export default {
    name: 'hello',
    data () {
      return {
        zoom: 13,
        center: [47.413220, -1.219482],
        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        myjson: ""
      };
    },
    methods: {
      onFileChange(e) {
        console.log(e);
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length)
          return;
        var reader = new FileReader();
        var vm = this;

        reader.onload = (e) => {
          vm.myjson = e.target["result"];
          let test = new ms.GraphicsLayer(new ms.format.GeoJSON(vm.myjson));
          console.log(test);
        };
        reader.readAsText(files[0]);
      }
    }
  };
</script>

<style scoped>

</style>

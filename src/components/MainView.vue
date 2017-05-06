<template>
  <div class="p-2">
    <div class="mb-2">
      <label class="btn btn-primary btn-sm" for="my-file-selector">
        <input id="my-file-selector" type="file" style="display:none;" @change="onFileChange">
        Add JSON file</label>
      <button class="btn btn-primary btn-sm" type="button" @click="clear">Clear</button>
      <button class="btn btn-primary btn-sm disabled" type="button">Download</button>
    </div>
    <div v-if="features">
      <div class="card" v-for="feature in features">
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


  export default {
    name: 'hello',
    data () {
      return {};
    },
    computed: {
      features () {
        return this.$store.state.features;
      }
    },
    methods: {
      onFileChange(e) {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length)
          return;
        var reader = new FileReader();

        reader.onload = (e) => {
          this.myjson = e.target["result"];
          this.$store.dispatch("addTGJson", this.myjson);
        };
        reader.readAsText(files[0]);
      },
      clear() {
          this.$store.dispatch("clearFeatures");
      }
    }
  };
</script>

<style scoped>
  label.btn {
    margin-bottom: 0;
  }

</style>

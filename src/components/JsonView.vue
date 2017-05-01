<template>
  <div class="balla">
  <pre>
    {{ tjson }}
  </pre>
  </div>
</template>

<script>
  //  import * as L from 'leaflet'

  export default {
    name: 'JsonView',
    data () {
      return {
        code: ""
      };
    },
    computed: {
      tjson () {
        return this.$store.state.tgjson;
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

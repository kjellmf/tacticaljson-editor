<template>
  <div class="container-fluid" id="app">
    <div class="row no-gutters a-wrapper">
      <div class="col-9" id="map-view">
        <main-map></main-map>
      </div>
      <div class="col-3" id="sidebar">
        <nav class="nav nav-tabs tabs">
          <router-link to="/" class="nav-link" exact>Main</router-link>
          <router-link to="/json" class="nav-link" exact>JSON</router-link>
          <router-link to="/about" class="nav-link" exact>About</router-link>
        </nav>
        <router-view class="jalla"></router-view>
      </div>
    </div>

  </div>
</template>

<script>
  import MainMap from './components/MainMap';
  export default {
    components: {MainMap},
    name: 'app'
  };
</script>

<style>
  html, body {
    height: 100%;
  }

  #app {
    height: 100%;
    padding: 0;
  }
  .a-wrapper {
    height: 100%;

  }

  #sidebar {
    height: 100%;
  }

  .tabs {
    height: 2.6rem;
  }

  .jalla {
    height: calc(100% - 2.6rem);
    overflow:auto;
  }
</style>

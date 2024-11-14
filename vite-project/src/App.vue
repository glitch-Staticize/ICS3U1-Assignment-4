<script setup>
import CosineLaw from './components/CosineLaw.vue'
import AsymptoteFinder from './components/AsymptoteFinder.vue'
import GregoryLeibnizPi from './components/GregoryLeibnizPi.vue'
</script>

<template>
<div class="app-container">
  <CosineLaw/>
  <AsymptoteFinder/>
  <GregoryLeibnizPi/>
</div>
</template>

<style scoped>
.app-container {
  display: flex;
}
</style>

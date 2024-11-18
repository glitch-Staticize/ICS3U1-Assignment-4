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
  flex-wrap: wrap;
  gap: 20px; 
  justify-content: center; 
  margin: 20px; 
}

.box {
    flex: 1 1 calc(50% - 10px); 
    box-sizing: border-box;
    border: 1px solid #ccc; 
    padding: 20px;
}

.box:nth-child(3) {
    flex: 1 1 100%; 
}
</style>

<script setup>
import { ref } from 'vue';

const sideA = ref('');
const sideB = ref('');
const angleC = ref('');
let result = ref('');

// Cosine Law
function cosineLaw() {
  result = Math.sqrt(sideA.value * sideA.value + sideB.value * sideB.value - 2 * sideA.value * sideB.value * Math.cos(angleC.value));
}
</script>

<template>
  <div class="box">
    <form @submit.prevent="cosineLaw()">
      <h1>Cosine Law Calculator</h1>
      <label>Side A:</label>
      <input type="number" v-model="sideA" />
      <label>Side B:</label>
      <input type="number" v-model="sideB" />
      <label>Angle C:</label>
      <input type="number" v-model="angleC" />
      <button type="submit">Calculate</button>
      <label>Side C (Result):</label>
      <input v-model="result" type="number" readonly />
    </form>
  </div>
</template>

<style scoped></style>
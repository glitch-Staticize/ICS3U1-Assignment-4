<script setup>
import { ref } from 'vue';

const sideA = ref(0);
const sideB = ref(0);
const angleC = ref(0);

// Cosine Law
function cosineLaw() {
  return sideC = Math.sqrt(sideA * sideA + sideB * sideB - 2 * sideA * sideB * Math.cos(angleC));
}
document.getElementById("calculateCosine").onclick = function (event) {
    event.preventDefault();

    var sideA = parseFloat(document.getElementById("sideA").value);
    var sideB = parseFloat(document.getElementById("sideB").value);
    var angleC = parseFloat(document.getElementById("angleC").value) * (Math.PI / 180);

    var sideC = cosineLaw(sideA, sideB, angleC);
    document.getElementById("cosineResult").innerText = sideC;
}
</script>

<template>
  <form @submit.prevent="cosineLaw()">
    <label for="sideA">Side a:</label>
    <input type="number" id="sideA">
    <label for="sideB">Side b:</label>
    <input type="number" id="sideB">
    <label for="angleC">Angle C:</label>
    <input type="number" id="angleC">
    <p>Side c: <span id="cosineResult"></span></p>
    <button id="calculateCosine">Calculate</button>
  </form>
</template>

<style scoped>

</style>
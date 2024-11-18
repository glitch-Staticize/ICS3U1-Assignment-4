<script setup>
import { ref } from 'vue';

const nValuePi = ref();
let result = ref();

function piApprox() {
    let pi = 0;
    for (let i = 0; i < nValuePi.value; i++) {
        pi += 4 * (Math.pow(-1, i) / (2 * i + 1));
    }
   result = pi;
}
</script>

<template>
    <div class="box">
        <form @submit.prevent="piApprox()"> <!--Gregory-Leibniz Pi Approximation-->
            <h1>Gregory-Leibniz Pi Approximation</h1>
            <label>n Value:</label>
            <input type="number" v-model="nValuePi">
            <label>Pi Approximation:</label>
            <input type="number" v-model="result" readonly>
            <button type="submit" id="calculatePi">Calculate</button>
        </form>
    </div>
</template>

<style scoped></style>
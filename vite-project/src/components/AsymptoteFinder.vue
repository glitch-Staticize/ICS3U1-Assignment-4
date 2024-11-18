<script setup>
import { ref } from 'vue';

const nValue = ref();
const mValue = ref();
let result = ref();

function findAsymptote() {
    const asymptoteType = ["Linear", "Quadratic", "Cubic", "Quartic", "Quintic", "Sextic", "Septic", "Octic", "Nonic", "Decic"];

    if (mValue.value == nValue.value) {
        result = "The asymptote is horizontal";
    } else if (nValue.value > mValue.value) {
        result = "The asymptote is the x-axis";
    } else if (nValue.value < mValue.value) {
        result = "The asymptote is " + asymptoteType[mValue.value - nValue.value - 1];
    } else {
        result = "Null";
    }
}
</script>

<template>
    <div class="box">
        <form @submit.prevent="findAsymptote()"> <!--Asymptote Finder-->
            <h1>Asymptote Finder</h1>
            <label>m Value:</label>
            <input v-model="mValue" type="number">
            <label>n Value:</label>
            <input v-model="nValue" type="number">
            <label>Result:</label>
            <input v-model="result" type="text" readonly>
            <button type="submit" id="calculateAsymptote">Calculate</button>
        </form>
    </div>
</template>

<style scoped></style>
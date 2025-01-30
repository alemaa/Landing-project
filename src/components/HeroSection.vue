<template>
<div class="hero-section">
    <div class="picture">
    </div>
    <div class="hero-introduce">
        <div class="hero-introduce-title">
          <h1>{{ title }}</h1>
        </div>
        <div class="hero-description">
          <p>{{ description }}</p>
        </div>
        <div class="hero-buttons">
        <button id="purchase-button" @click="primaryButton">Purchase UI Kit</button>
        <button id="learn-button" @click="secondaryButton">Learn more</button>
        </div>
    </div>
</div>
</template>
<script setup>
import { defineProps,defineEmits } from 'vue';

defineProps({
    title: String,
    description:String
})
const emit = defineEmits([
    'primaryButton',
    'secondaryButton'
])
const primaryButton=()=>{
    alert("Button clicked! Emitting event...");
    emit('primary-button');
}
const secondaryButton=()=>{
    alert("Button clicked! Emitting event...");
    emit('secondary-button');
}
</script>
<style>
.hero-section {
    min-height: 50vh;
    position: relative;
}
body {
    overflow-x: hidden;
}
.picture {
    background-image: url('/designer_1.png');
    position: absolute;
    background-repeat: no-repeat;
    top:-70%;
    left:430px;
    right:-70%;
    bottom:-40%;
    z-index:-1;
}
.hero-introduce {
    display: flex;
    flex-direction: column;
    margin-top: 20%;
    text-align: start;
    width: 539.37px;
    height: 421px;
}
.hero-introduce-title {
    color: #091133;
    font-size: larger;
}
.hero-description {
    color: #505F98;
}
.hero-buttons {
    display: flex;
    gap: 20px;
    margin-top: 40px;
}
#purchase-button {
    background-color: #111B47;
    border: 1px solid #111B47;
    width: 189px;
    height: 36px;
    color: white;
    font-weight: bold;
}
#learn-button {
    width: 189px;
    height: 36px;
    color: black;
    background: transparent;
    border: 2px solid black;
    font-weight: bold;
    text-transform: capitalize;
}
</style>
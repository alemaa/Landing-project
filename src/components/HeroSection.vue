<template>
<div class="hero-section">
    <div class="hero-introduce">
        <div class="hero-introduce-title">
          <h1>{{ title }}</h1>
        </div>
        <div class="hero-description">
          <p>{{ description }}</p>
        </div>
        <div class="hero-buttons">
        <button id="purchase-button" @click="$emit('primary-button')">Purchase UI Kit</button>
        <button id="learn-button" @click="$emit('secondary-button')">Learn more</button>
        </div>
    </div>
</div>
</template>
<script setup>
import { defineProps } from 'vue';

defineProps({
  title: String,
  description:String
})

</script>
<style>


.hero-introduce {
    display: flex;
    flex-direction: column;
    margin-top: 20%;
    text-align: start;
}
.hero-introduce-title {
    color: #091133;
    width: 539px;
    height: 132px;
   
}
.hero-description {
    color: #505F98;
}
.hero-buttons {
    display: flex;
    gap: 20px;
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
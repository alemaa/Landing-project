<template>
<div class="hero-section">
    <div class="hero-introduce">
        <h1 class="hero-introduce-title">
            {{ title }}
        </h1>

        <div class="hero-description">
          <p>{{ description }}</p>
        </div>

        <div class="hero-buttons">
        <button class="purchase-button" @click="purchase">Purchase UI kit</button>
        <button class="learn-button" @click="learn">Learn more</button>
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
    'purchase',
    'learn'
])

const purchase=()=>{
    alert("Button clicked! Emitting event...");
    emit('purchase');
}

const learn=()=>{
    alert("Button clicked! Emitting event...");
    emit('learn');
}
</script>

<style>
.hero-section {
    min-height: 50vh;
    display: flex;
}

body {
    overflow-x: hidden;
}

.hero-introduce {
    display: flex;
    flex-direction: column;
    margin-top: 20%;
    text-align: center;
    flex-basis: 50%;
}

.hero-introduce-title {
    color: #091133;
}

.hero-description {
    color: #505F98;
}

.hero-buttons {
    display: flex;
    gap: 20px;
    margin-top: 40px;
}

.purchase-button {
    background-color: #111B47;
    border: 1px solid #111B47;
    width: 189px;
    height: 36px;
    color: white;
    font-weight: bold;
    text-transform: capitalize;
}

.learn-button {
    width: 189px;
    height: 36px;
    color: black;
    background: transparent;
    border: 2px solid black;
    font-weight: bold;
    text-transform: capitalize;
}

@media (min-width:480px) {
    .hero-introduce {
        text-align: start;
    }

    .hero-section::after {
        content: "";
        background-image: url('/public/images/designer_1.png');
        position: absolute;
        background-repeat: no-repeat;
        background-size: contain;
        width: 100%;
        height: 100%;
        margin-top: -75px;
        margin-left: 30%;
        z-index:-1;
    }
}

</style>
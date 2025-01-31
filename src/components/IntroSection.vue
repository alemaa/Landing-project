<template>
<div class="intro-section">
    <div class="intro-text-block">
        <div class="intro-background">
        </div>
        <div class="intro-text">
            <div class="intro-title">
                <h1>{{ title }}</h1>
            </div>
            <div class="intro-description">
                <p>{{ description }}</p>
            </div>
        </div>
    </div>
    <div class="intro-text-block-copy">
        <div class="intro-background-copy">
        </div>
        <div class="intro-text-copy">
            <div class="intro-title-copy">
                <h1>{{ title }}</h1>
            </div>
            <div class="intro-description-copy">
                <p>{{ description }}</p>
            </div>
        </div>
    </div>
    <div class="intro-text-block-with-button">
        <div class="intro-background-with-button">
        </div>
        <div class="intro-text-with-button">
            <div class="intro-title-with-button">
                <h1>{{ title }}</h1>
            </div>
            <div class="intro-description-with-button">
                <p>{{ description }}</p>
            </div>
            <div class="intro-button">
                <button id="intro-button-primary" @click="introButton">Purchase now</button>
            </div>
        </div>
    </div>
</div>
</template>
    <script setup>

import { defineProps , defineEmits } from 'vue';

defineProps({
    title: String,
    description:String
})
const emit=defineEmits([
    'introButton'
])
const introButton =()=>{
    alert("Button clicked");
    emit('intro-button')
}
</script>
<style>
.intro-section {
    min-height: 50vh;
}
.intro-text-block, .intro-text-block-copy, .intro-text-block-with-button {
    display: flex;
    justify-content: space-between;
    margin-top: 20%;
}
.intro-background {
    flex-basis: 50%;
    background-image: url('/undraw.png');
    background-repeat: no-repeat;
    background-size: auto;
    position: relative;
    height: 315px;
}
.intro-text, .intro-text-copy, .intro-text-with-button {
    text-align: start;
    margin-left: 15%;
    width: 445px;
    height: 228px;
}
.intro-description , .intro-description-copy, .intro-description-with-button{
    color: #6F7CB2;
}
.intro-background-copy{
    background-image: url('/undraw_social_influencer_sgsv.png');
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    height: 387px;
    width: 540px;
    margin-right:-15%;
    margin-left:-5%;
}
.intro-background-with-button {
    background-image: url('/undraw_mention_6k5d.png');
    flex-basis: 50%;
    background-repeat: no-repeat;
    background-size: auto;
    position: relative;
    height: 315px;
}
#intro-button-primary {
    background-color: #111B47;
    border: 1px solid #111B47;
    width: 150px;
    height: 32px;
    color: white;
    font-weight: bold;
    margin-top: 30px;
    text-transform: capitalize;
}
</style>
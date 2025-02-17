<template>
<div class="intro-content">
    <div class="intro-content__wrapper">
        <div class="intro-content__background">
        </div>

        <div class="intro-content__container">
                <h1 class="intro-title">
                    {{ title }}
                </h1>

            <div class="intro-description">
                <p>{{ description }}</p>
            </div>
        </div>
    </div>

    <div class="intro-text-block-copy">
        <div class="intro-background-copy">
        </div>

        <div class="intro-text-copy">
                <h1 class="intro-title-copy">
                    {{ title }}
                </h1>

            <div class="intro-description-copy">
                <p>{{ description }}</p>
            </div>
        </div>
    </div>
    <div class="intro-text-block-with-button">
        <div class="intro-background-with-button">
        </div>

        <div class="intro-text-with-button">
                <h1 class="intro-title-with-button">
                    {{ title }}
                </h1>

            <div class="intro-description-with-button">
                <p>{{ description }}</p>
            </div>

            <div class="intro-button">
                <button class="intro-button-primary" @click="intro">Purchase now</button>
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
    'intro'
])

const intro =()=>{
    alert("Button clicked");
    emit('intro')
}
</script>

<style>
.intro-content {
    min-height: 50vh;
    display: flex;
    flex-direction: column;
}

.intro-content__wrapper, .intro-text-block-copy, .intro-text-block-with-button {
    display: flex;
    justify-content: space-between;
    margin-top: 20%;
}

.intro-content__wrapper {
    flex-direction: column;
}

.intro-content__container, .intro-text-copy, .intro-text-with-button {
    text-align: center;
    height: 228px;
}

.intro-description , .intro-description-copy, .intro-description-with-button{
    color: #6F7CB2;
}

.intro-content__background {
    background-image: url('/public/images/undraw.png');
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;
    height: 315px;
    width: 300px;
    align-self: center;
    width: 50%;
}

.intro-background-copy {
    display: none;
}

.intro-background-with-button {
    display: none;
}

.intro-button-primary {
    background-color: #111B47;
    border: 1px solid #111B47;
    width: 150px;
    height: 32px;
    color: white;
    font-weight: bold;
    margin-top: 30px;
    text-transform: capitalize;
}

@media(min-width:480px) {
    .intro-content__container, .intro-text-copy, .intro-text-with-button {
        text-align: start;
        margin-left: 10%;
    }

    .intro-background-copy {
        display: block;
        background-image: url('/public/images/undraw_social_influencer_sgsv.png');
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        height: 387px;
        width: 540px;
        margin-right:-15%;
    }

    .intro-background-with-button {
        display: block;
        background-image: url('/public/images/undraw_mention_6k5d.png');
        flex-basis: 50%;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        height: 315px;
    }

    .intro-content__wrapper {
        flex-direction: row;
    }

    .intro-content__container, .intro-text-copy, .intro-text-with-button {
        width: 445px;
    }
}
</style>
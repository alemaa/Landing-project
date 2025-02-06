<template>
<section class="about-us">
    <div class="about-us__wrapper">
        <h1>
            {{title}}
        </h1>

        <div class="about-us-description">
            {{ description }}
        </div>

        <div class="card-container">
            <div  v-for="(card, index) in cards" :key="`card-${index}`">
                <div class="info-card">
                    <img src="/images/icon.svg" alt="info icon" />
                    <h2 class="card-title">
                        {{card.cardTitle}}
                    </h2>

                    <div class="card-description">
                        <p>{{ card.cardDescription }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps ({
    title: String,
    description:String,
    cards:Array,
})
</script>

<style>
.about-us {
    display: flex;
    flex-direction: column;
    min-height: 50vh;
    position: relative;

}

.about-us__wrapper{
    margin-top: 30%;
}

.about-us__wrapper h1{
    text-align: center;
}

.about-us-description {
    color: #6F7CB2;
    text-align: center;
    color: #6F7CB2;
}

.block-elements {
    margin-top: 20%;
}

.card-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 60px;
    text-align: start;
}

.info-card {
    width: 255px;
    height: 140px;
}

.card-description{
    color: #5D6970;
    font-size: 12px;
}

@media(min-width:480px) {
    .about-us {
        flex-direction: row;
        margin-top: 20%;
    }

    .about-us::after {
        content:"";
        background-image: url('/public/images/undraw.png');
        position: absolute;
        background-repeat: no-repeat;
        background-size: cover;
        width: 50%;
        height: 50%;
        margin-left: 60%;
        margin-top: 30%;
    }

    .about-us-title {
        text-align: start;
    }

    .about-us-description {
        width: 540px;
        height: 204px;
        text-align: start;
    }

    .card-container {
        margin-top: 0;
        flex-direction: row;
    }
}

</style>
<script setup>
import AboutSection from '../components/AboutSection.vue';
import HeroSection from '../components/HeroSection.vue';
import IntroSection from '../components/IntroSection.vue';
import PricingSection from '../components/PricingSection.vue';
import {ref } from "vue"
const onPrimaryButton=() =>{
    console.log('Received from child:', 'data');
}
const onSecondaryButton=() =>{
     console.log('Received from child:', 'data');
}
const introButton=() =>{
     console.log('Received from child:', 'data');
}
const purchaseButton=() =>{
     console.log('Received from child:', 'data');
}
const heroTitle = ref('Introduce Your Product Quickly & Effectively');
const title=ref('Light, Fast & Powerful');
const description=ref(`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
 Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.`);
</script>

<template>
<HeroSection :title="heroTitle"
:description="description"
@primary-button="onPrimaryButton"
@secondary-button="onSecondaryButton"/>
<AboutSection
:title="title"
:description="description"
/>
<IntroSection
:title="title"
:description="description"
@intro-button="introButton"
/>
<PricingSection
@purchase-button="purchaseButton"/>
</template>
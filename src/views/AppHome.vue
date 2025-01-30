<script setup>
import AboutSection from '../components/AboutSection.vue';
import HeroSection from '../components/HeroSection.vue';
import IntroSection from '../components/IntroSection.vue';
import PricingSection from '../components/PricingSection.vue';

const onPrimaryButton=() =>{
    console.log('Received from child:', 'data');
}

 const onSecondaryButton=() =>{
     console.log('Received from child:', 'data');
}
</script>

<template>
<HeroSection title="Introduce Your Product Quickly & Effectively"
description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
@primary-button="onPrimaryButton"
@secondary-button="onSecondaryButton"/>
<AboutSection/>
<IntroSection/>
<PricingSection/>
</template>
<template>
  <div class="container">
<AppHeader
@buy-button="onBuyButton"/>
<main>
<HeroSection title="Introduce Your Product Quickly & Effectively"
description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim."
@primary-button="onPrimaryButton"
@secondary-button="onSecondaryButton"/>
<AboutSection/>
<IntroSection/>
<PricingSection/>
</main>
<AppFooter/>
</div>
</template>

<script setup>
import AboutSection from './components/AboutSection.vue';
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import HeroSection from './components/HeroSection.vue';
import IntroSection from './components/IntroSection.vue';
import PricingSection from './components/PricingSection.vue';

const onBuyButton=() =>{
    console.log('Received from child:', 'data');
}
const onPrimaryButton=() =>{
    console.log('Received from child:', 'data');
}
const onSecondaryButton=() =>{
    console.log('Received from child:', 'data');
}
</script>

<style>
#app {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
margin-top: 60px;
}
.container {
max-width: 1050px;
padding: 0 20px;
margin: -25px auto;
}
</style>

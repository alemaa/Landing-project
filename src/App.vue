<template>
<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playwrite+AU+SA:wght@100..400&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

  <div  class="container">
    <AppHeader
        @buy="onBuyButton"
    />
    <main>
        <router-view />
    </main>
    <AppFooter
        title="Landing"
        @purchase="onPurchaseButton"
    />
</div>

</template>

<script setup>

import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import { RouterView } from 'vue-router';

const onBuyButton=() =>{
    console.log('Received from child:', 'data');
}

const onPurchaseButton=() =>{
    console.log('Received from child:', 'data');
}

</script>

<style>

#app {
    font-family: 'Roboto';
    text-align: center;
}

.container {
    max-width: 1050px;
    padding: 0 20px;
    margin: 0 auto;
}

</style>

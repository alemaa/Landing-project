<template>
  <div  class="container">
<AppHeader
@buy-button="onBuyButton"
/>
<main>
 <router-view />
</main>
<AppFooter/>
</div>

</template>

<script setup>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import { RouterView } from 'vue-router';
const onBuyButton=() =>{
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

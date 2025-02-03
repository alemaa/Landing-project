<template>
   <header class="header">
      <nav class="menu">
         <router-link class="Home" to="/">Home</router-link>
         <router-link class="About" to="/about">About</router-link>
         <router-link class="Contact" to="/contact">Contact</router-link>
      </nav>
      <div class="title">
         <h1>Landing</h1>
      </div>
      <div class="buy-button">
         <button id="button-primary" @click="buyButton">Buy now</button>
      </div>
   </header>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits([
  'buyButton'
])
const buyButton=()=>{
  alert("Button clicked! Emitting event...");
  emit('buy-button');
}
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}
.menu {
   display: flex;
   gap:50px;
}
 .menu>a {
   text-decoration: none;
   color: #505F98;
}
.title {
   color: #37447E;
   margin-top: -30px;
   justify-content: center;
}
#button-primary {
   background-color: #111B47;
   border: 1px solid #111B47;
   width: 160px;
   height: 26px;
   color: white;
   font-weight: bold;
   text-transform: capitalize;
}

</style>
<template>
   <header class="header">
      <nav class="menu">
         <router-link class="Home" to="/">Home</router-link>
         <router-link class="About" to="/about">About</router-link>
         <router-link class="Contact" to="/contact">Contact</router-link>
      </nav>

      <div class="title-icon">
          <h1 class="title">
            Landing
         </h1>
         <div class="icon" @click="myFunction" >
            <img src="/images/burger_menu.svg" alt="burger menu">
         </div>
      </div>

      <nav v-if="isMenuOpen" class="menu-mobile">
         <router-link class="Home" to="/">Home</router-link>
         <router-link class="About" to="/about">About</router-link>
         <router-link class="Contact" to="/contact">Contact</router-link>
      </nav>
      <div class="buy-button">
         <button class="button-primary" @click="buy">Buy now</button>
      </div>
   </header>
</template>

<script setup>
import { defineEmits } from 'vue';
import {ref } from 'vue';

const emit = defineEmits([
   'buy',
])

const buy =() => {
   alert("Button clicked! Emitting event...");
   emit('buy');
}

const isMenuOpen = ref(false);
   const myFunction=()=>{
   isMenuOpen.value=!isMenuOpen.value;
}
</script>

<style>
.header {
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   margin-top: 30px;
}

.title-icon {
   display: flex;
}

.title {
   flex-basis: 50%;
   color: #37447E;
   margin-top: -10px;
   justify-content: center;
}

.icon {
   flex-basis: 50%;
}

.button-primary {
   background-color: #111B47;
   border: 1px solid #111B47;
   width: 160px;
   height: 26px;
   color: white;
   font-weight: bold;
   text-transform: capitalize;
   margin-top: 30px;
}

.menu {
   display: none;
}

.menu-mobile {
   display: flex;
   flex-direction: column;
   text-align: center;
   margin-top: 30px;
   margin-bottom: 35px;
   color: rgb(92, 90, 90);
   gap: 30px;
}

.menu-mobile>a {
   text-decoration: none;
   color: #505F98;
}

@media (min-width:480px) {
   .header {
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
      flex-direction: row;
   }

   .menu-mobile {
      display: none;
   }

   .menu {
      display: flex;
      gap:50px;
   }

   .menu>a {
      text-decoration: none;
      color: #505F98;
   }

   .icon {
      display: none;
   }

   .button-primary {
      margin-top: 0;
   }
}
</style>
<template>
  <header class="header">
    <nav class="menu">
      <router-link class="Home" to="/">Home</router-link>
      <router-link class="About" to="/about">About</router-link>
      <router-link class="Contact" to="/contact">Contact</router-link>
    </nav>

    <div class="title-icon">
      <h1 class="title">Landing</h1>
      <div class="icon" @click="myFunction">
        <img src="/images/burger_menu.svg" alt="burger menu" />
      </div>
    </div>

    <nav v-if="isMenuOpen" class="menu-mobile">
      <router-link class="Home" to="/">Home</router-link>
      <router-link class="About" to="/about">About</router-link>
      <router-link class="Contact" to="/contact">Contact</router-link>
      <button class="button-mobile" @click="buy">Buy now</button>
    </nav>
    <div class="buy-button">
      <button class="button-primary" @click="buy">Buy now</button>
    </div>
  </header>
</template>

<script setup>
import { defineEmits } from "vue";
import { ref } from "vue";

const emit = defineEmits(["buy"]);

const buy = () => {
  alert("Button clicked! Emitting event...");
  emit("buy");
};

const isMenuOpen = ref(false);
const myFunction = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style>
.header {
  margin-top: 30px;
}

.title-icon {
  display: flex;
  justify-content: space-between;
}

.title {
  color: #37447e;
  margin-top: -10px;
}

.button-primary {
  display: none;
}

.button-mobile {
  background-color: #111b47;
  border: 1px solid #111b47;
  width: 160px;
  height: 26px;
  color: white;
  font-weight: bold;
  text-transform: capitalize;
  margin-top: 30px;
}

.button-primary {
  background-color: #111b47;
  border: 1px solid #111b47;
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
  margin-top: 30px;
  margin-bottom: 35px;
  color: rgb(92, 90, 90);
  gap: 30px;
  align-items: center;
}

.menu-mobile > a {
  text-decoration: none;
  color: #505f98;
}

@media (min-width: 640px) {
  .header {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .menu-mobile {
    display: none;
  }

  .menu {
    display: flex;
    gap: 50px;
  }

  .menu > a {
    text-decoration: none;
    color: #505f98;
  }

  .title {
    justify-content: center;
  }

  .icon {
    display: none;
  }

  .button-primary {
    display: block;
    margin-top: 0;
  }
}
</style>

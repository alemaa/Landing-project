<template>
  <section ref="hero-el" class="hero-content"  :style="{ '--container-width': `${width}px` }">
    <div class="hero-content__wrapper">
      <h1 class="hero-content__title">
        {{ title }}
      </h1>
      <p class="hero-content__description">{{ description }}</p>
      <div class="hero-content__buttons">
        <button class="purchase-button" @click="purchase">
          Purchase UI kit
        </button>
        <button class="learn-button" @click="learn">Learn more</button>
      </div>
    </div>
    <div class="hero-background">
      <img class="hero-image" src="/images/designer_1.png" alt="image designer" />
    </div>
  </section>
</template>

<script setup>
import { defineProps, defineEmits,useTemplateRef } from "vue";
import { useElementSize } from '@vueuse/core';

defineProps({
  title: String,
  description: String,
});

const element =useTemplateRef('hero-el')
const { width }  = useElementSize(element)

const emit = defineEmits(["purchase", "learn"]);

const purchase = () => {
  alert("Button clicked! Emitting event...");
  emit("purchase");
};

const learn = () => {
  alert("Button clicked! Emitting event...");
  emit("learn");
};
</script>

<style>
.hero-content {
  position: relative;
  display: flex;
  min-height: 100vh;
}

.hero-image {
  position: absolute;
  top: -80px;
  right: calc((100vw - var(--container-width)) / (-2)); 
  z-index: -1;
  height: 100%;
  max-width: none;
}

.hero-background {
  flex-basis: 50%;
}

.hero-content__wrapper {
  flex-basis: 50%;
  text-align: start;
}

.hero-content__title {
  color: #091133;
  font-size: 35px;
  font-weight: 500;
  line-height: 66px;
  letter-spacing: 1px;
}

.hero-content__description {
  color: #505f98;
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
}

.hero-content__buttons {
  display: flex;
  gap: 20px;
  margin-top: 40px;
  min-width: 300px;
  justify-content: center;
}

.purchase-button {
  background-color: #111b47;
  border: 1px solid #111b47;
  color: white;
  font-weight: bold;
  text-transform: capitalize;
  padding: 10px 20px 10px 20px;
}

.learn-button {
  color: black;
  background: transparent;
  border: 2px solid black;
  font-weight: bold;
  text-transform: capitalize;
  padding: 10px 20px 10px 20px;
}

@media (min-width: 640px) {
  .hero-content__buttons {
    justify-content: start;
  }
  
  .hero-content__title {
    font-size: 50px;
    font-weight: 500;
  }
}
</style>

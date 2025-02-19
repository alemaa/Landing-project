<template>
  <section
    class="intro-content"
    v-for="(component, index) in components"
    :key="`component-${index}`"
  >
    <div class="intro-content__wrapper">
      <div>
        <img
          class="intro-picture"
          :src="component.image"
          alt="undraw picture"
        />
      </div>
      <div class="intro-content__container">
        <h1 class="intro-title">
          {{ component.title }}
        </h1>

        <div class="intro-description">
          <p>{{ component.description }}</p>
        </div>
        <div class="intro-button" v-if="component.id === 3">
          <button class="intro-button-primary" @click="intro">
            Purchase now
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
  title: String,
  description: String,
  components: Array,
});

const emit = defineEmits(["intro"]);

const intro = () => {
  alert("Button clicked");
  emit("intro");
};
</script>

<style>
.intro-content {
  min-height: 50vh;
  margin-top: 20%;
}

.intro-content__wrapper {
  display: flex;
  gap: 15%;
  flex-direction: column;
  align-items: center;
}

.intro-title {
  font-weight: 500;
  font-size: 36px;
  line-height: 48px;
}

.intro-content__container {
  text-align: center;
  flex-basis: 50%;
}

.intro-description {
  color: #6f7cb2;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
}

.intro-button-primary {
  background-color: #111b47;
  border: 1px solid #111b47;
  color: white;
  font-weight: bold;
  text-transform: capitalize;
  padding: 10px 20px 10px 20px;
}

.intro-picture {
  object-fit: cover;
  flex-basis: 50%;
  width: 100%;
  height: auto;
}

@media (min-width: 640px) {
  .intro-content__wrapper {
    flex-direction: row;
  }

  .intro-content__container {
    text-align: start;
  }
}
</style>

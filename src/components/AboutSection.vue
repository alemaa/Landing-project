<template>
  <section class="about-us">
    <div class="about-us__wrapper">
      <h1>
        {{ title }}
      </h1>

      <div class="about-us-description">
        {{ description }}
      </div>

      <div class="card-container">
        <div v-for="(card, index) in cards" :key="`card-${index}`">
          <div class="info-card">
            <img src="/images/icon.svg" alt="info icon" />
            <h2 class="card-title">
              {{ card.cardTitle }}
            </h2>

            <div class="card-description">
              <p>{{ card.cardDescription }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img
      class="about-image"
      src="/images/undraw_mobile_login_ikmv.png"
      alt="about picture"
    />
  </section>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  title: String,
  description: String,
  cards: Array,
});
</script>

<style>
.about-us {
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  margin-top: -20%;
}

.about-image {
  flex-basis: 50%;
  object-fit: cover;
  align-self: center;
  width: 100%;
  height: 100%;
}

.about-us__wrapper h1 {
  text-align: center;
  font-weight: 500;
  font-size: 36px;
  line-height: 48px;
  color: #091133;
}

.about-us-description {
  color: #6f7cb2;
  text-align: center;
  color: #6f7cb2;
}

.card-container {
  display: flex;
  gap: 20px;
  text-align: start;
  margin-top: 40px;
}

.card-description {
  color: #5d6970;
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
}

@media (min-width: 640px) {
  .about-us {
    flex-direction: row;
    margin-top: 0;
  }

  .about-us__wrapper {
    margin-top: 0;
  }

  .about-image {
    align-self: flex-end;
  }

  .about-us__wrapper h1 {
    text-align: start;
  }

  .about-us-description {
    text-align: start;
  }

  .card-container {
    flex-direction: row;
  }
}
</style>

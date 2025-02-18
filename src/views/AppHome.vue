<script setup>
import AboutSection from "../components/AboutSection.vue";
import HeroSection from "../components/HeroSection.vue";
import IntroSection from "../components/IntroSection.vue";
import PricingSection from "../components/PricingSection.vue";
import { ref } from "vue";

const learn = () => {
  console.log("Received from child:", "data");
};

const intro = () => {
  console.log("Received from child:", "data");
};

const purchase = () => {
  console.log("Received from child:", "data");
};

const heroTitle = ref("Introduce Your Product Quickly & Effectively");
const title = ref("Light, Fast & Powerful");
const description =
  ref(`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
 Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.`);

const cards = ref([
  {
    id: 1,
    cardTitle: "Title goes here",
    cardDescription:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
  },
  {
    id: 2,
    cardTitle: "Title goes here",
    cardDescription:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
  },
]);

const components = ref([
  {
    id: 1,
    title: "Light, Fast & Powerful",
    description: description,
    image: "/images/undraw.png",
  },
  {
    id: 2,
    title: "Light, Fast & Powerful",
    description: description,
    image: "/images/undraw_social_influencer_sgsv.png",
  },
  {
    id: 3,
    title: "Light, Fast & Powerful",
    description: description,
    image: "/images/undraw_mention_6k5d.png",
  },
]);
</script>

<template>
  <HeroSection :title="heroTitle" :description="description" @learn="learn" />
  <AboutSection :title="title" :description="description" :cards="cards" />
  <IntroSection
    :title="title"
    :description="description"
    :components="components"
    @intro="intro"
  />
  <PricingSection @purchase="purchase" />
</template>

<template>
  <section class="pricing-section">
    <div class="text-block-title">
      <p class="section-title">A Price To Suit Everyone</p>
      <p class="pricing-description">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula <br />
        eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
        parturient <br />
        montes, nascetur ridiculus
      </p>
      <p class="price">$40</p>
      <p class="price-title">UI Design Kit</p>
    </div>
    <div class="pricing-text">
      <p>See, One price. Simple.</p>
      <button class="purchase-button" @click="purchase">Purchase now</button>
    </div>
  </section>
</template>

<script setup>
import { defineEmits } from "vue";

const emit = defineEmits(["purchase"]);

const purchase = () => {
  alert("Button clicked! Emitting event...");
  emit("purchase");
};
</script>

<style>
.pricing-section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
}

.section-title {
  color: #091133;
  font-weight: 500;
  font-size: 36px;
  line-height: 48px;
}

.pricing-description {
  color: #6f7cb2;
  font-size: 16px;
  line-height: 26px;
  font-weight: 400;
  margin-top: -20px;
}

.price {
  color: #222f65;
  font-size: 50px;
  font-weight: 500;
  line-height: 66px;
  letter-spacing: 1px;
}

.price-title {
  color: #37447e;
  font-size: 16px;
  margin-top: -40px;
  font-weight: 400;
  line-height: 26px;
}

.pricing-text {
  color: #5d6970;
  font-size: 14px;
  margin-top: 20px;
  line-height: 24px;
  font-weight: 400;
}

.text-block-title {
  color: #091133;
  font-weight: 500;
  font-size: 36px;
}

@media (min-width: 640px) {
  .pricing-section::after {
     content: "";
    background-image: url("/public/images/Rectangle.png");
    position: absolute;
    background-size: cover;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
}
</style>

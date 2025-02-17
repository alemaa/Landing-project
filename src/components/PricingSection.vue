<template>
    <div class="pricing-section">
        <div class="text-block">
            <div class="text-block-title">
                <p>A Price To Suit Everyone</p>
            </div>

            <div class="pricing-description">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula <br> eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient <br> montes, nascetur ridiculus </p>
            </div>

            <div class="price">
                <p>$40</p>
            </div>

            <div class="price-title">
                <p>UI Design Kit</p>
            </div>

            <div class="pricing-text">
                <p>See, One price. Simple.</p>
            </div>

            <div class="pricing-button">
                <button class="purchase-button" @click="purchase">Purchase now</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits([
    'purchase'
])

const purchase =() => {
    alert("Button clicked! Emitting event...");
    emit('purchase');
}
</script>

<style>
.pricing-section {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin-top: 10%;
}

.pricing-description {
    color:#6F7CB2;
}

.price {
    color: #222F65;
    font-size: 50px;
    font-weight:500;
}

.price-title {
    margin-top: -50px;
    color: #37447E;
    font-size: 16px;
}

.pricing-text {
    color: #5D6970;
    font-size: 14px;
    margin-top: 7%;
}

.text-block-title{
    color: #091133;
    font-weight: 500;
    font-size: 36px;
}

@media(min-width:480px){
    .pricing-section::after {
        content: "";
        background-image: url('/public/images/Rectangle.png');
        position: absolute;
        background-size: cover;
        width: 100%;
        height: 100%;
        margin-bottom: -15%;
        z-index: -1;
    }
}
</style>
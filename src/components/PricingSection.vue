<template>
    <div class="pricing-section">
        <div class="text-block">
            <div class="text-block-title">
                <p>A Price To Suit Everyone</p>
            </div>
            <div class="pricing-description">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
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
                <button id="purchase-button" @click="purchaseButton">Purchase now</button>
            </div>
        </div>
    </div>
    </template>
    <script setup>
</script>
<style>
.pricing-section {
    display: flex;
    min-height: 50vh;
    margin-top: 20%;
    background-image: url('/Rectangle.png');
    position: relative;
    background-size: cover;
    width: 2546.93px;
    height: 938px;
    margin-left: -40%;
    margin-bottom: -10%;
}
.text-block {
    margin-top: 10%;
    margin-left: 24%;
}
.pricing-description {
    color:#6F7CB2;
    width: 600px;
    height: 78px;
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
</style>
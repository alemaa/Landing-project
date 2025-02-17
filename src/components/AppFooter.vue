<template>
    <div class="footer">
        <div class="wrapper">
            <div class="footer-text">
                <p>©2023 Yourcompany</p>
            </div>
                <h1 class="footer-title">
                    {{ title }}
                </h1>
            <div>
                <button class="purchase-button" @click="purchase">Purchase now</button>
            </div>
        </div>
        <div class="custom-line">
            <hr />
        </div>
        <div class="footer-navbar">
            <div class="footer-menu">
                <router-link to="/">Home</router-link>
                <router-link to="/about">About</router-link>
                <router-link to="/contact">Contact</router-link>
            </div>

            <div class="social-icons">
                <div class="icon-facebook">
                    <img src="/images/facebook.svg" alt="facebook icon" />
                </div>

                <div class="icon-in">
                  <img src="/images/in.svg" alt="In icon" />
                </div>

                <div class="icon-twitter">
                   <img src="/images/twitter.svg" alt="twitter icon" />
                </div>

                <div class="icon-youtube">
                    <img src="/images/youtube.svg" alt="youtube icon" />
                </div>

                <div class="icon-instagram">
                    <img src="images/Instagram.svg" alt="instagram icon"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps,defineEmits } from 'vue';

defineProps ({
    title: String,
})

const emit = defineEmits ([
    'purchase'
])

const purchase =() => {
    alert("Button clicked! Emitting event...");
    emit('purchase');
}
</script>

<style>
.footer{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
    flex-wrap: wrap;
}

.footer::after {
    content: "";
    background-color: #E7ECFF;
    background-position: center;
    background-size: cover;
    position: absolute;
    bottom:-10px;
    right:-50%;
    top:0;
    left:-60%;
    z-index: -1;
}

.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.footer-text {
    color: #939EA4;
    font-size: 14px;
}

.footer-title {
    display: none;
}

.footer-purchase-button {
    background-color: #111B47;
    border: 1px solid #111B47;
    width: 109px;
    height: 26px;
    color: white;
    font-weight: bold;
    font-size: 12px;
    margin-top: 35px;
}

.footer-navbar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 20px;
}

.footer-menu {
    display: flex;
    flex-direction: column;
    gap: 50px;
}

.footer-menu a {
    text-decoration: none;
    color: #505F98;
}

.social-icons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    margin-top: 30px;
}

.custom-line {
    color: #CDD1D4;
}

@media(min-width:640px) {
    .footer {
      padding: 20px;
      
   
    }

    .footer-title {
        display: block;
        color: #37447E;
    }

    .wrapper {
        flex-direction: row;
    }

    .footer-purchase-button {
        margin-top: 0;
    }

    .footer-menu {
        flex-direction: row;
    }

    .footer-navbar {
        flex-direction: row;
    }

    .social-icons {
        justify-content: flex-end;
        margin-top: 0;
    }
}
</style>
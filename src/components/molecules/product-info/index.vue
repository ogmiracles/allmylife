<template>
    <h1 class="card-title">{{ product.title }}</h1>
    <div class=" card-container container sm-top ">

        <div>
            <img :src="product.image" class="card-img-top" style="width:300px" :alt="product.title">

        </div>
        <div class="product-container">
        <div class="product-info">
            <div class="product-info__color">Цвет: <span>Черный</span></div>
        <div class="product-info__memo">Память: <span>64GB</span></div>
        <div class="product-info__price">{{ product.price }} ₸</div>
        </div>

        <base-button class="product-info__button">В корзину</base-button>
        </div>
        
    </div>
</template>

<script>
export default {
    name: "ProductInfo",

}
</script>
<script setup>
import { ref, computed, watch, onMounted } from 'vue';
import BaseButton from "@/components/atoms/base-button/index.vue";


defineProps({
    product: {
        type: Object,

    }
})







</script>


<style scoped lang="scss" src="./index.scss"/>
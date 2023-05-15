<template>
    <div class="product-card-cart">
        <div class="cart-left">
            <div class="cart-left__image">
                <img :src="product.image"
                     :alt="product.title">
            </div>
            <div class="cart-left__info info">
                <div class="info__title"> {{ product.title }}</div>
                <div class="info__count">
                    <cart-count
                        v-model="count"
                        @update:modelValue="newValue => count.value=newValue"
                    />
                </div>
            </div>
        </div>
        <div class="cart-right">
            <div class="sum">
                <div class="total-sum">
                    {{ currencyValidation(Math.floor(product.price * count * 0.9)) }}
                </div>
                <div class="discount">
                    <span>{{ currencyValidation(Math.floor(product.price * count)) }}</span>
                    <span>Выгода({{ currencyValidation(Math.floor(product.price * count * 0.1)) }})</span>
                </div>
                <div class="initial-price">{{ product.price }}</div>
            </div>
            <div class="delete">
                <icon-bin @click="$emit('remove',product.id)" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CartProductCard"
}
</script>
<script setup>
import IconBin from '@/assets/icons/bin.svg?component'
import CartCount from "@/components/atoms/cart-count/index.vue";
import {ref, watch} from "vue";
import cartMethods from "../../../utils/cart";
import {currencyValidation} from "../../../helpers/numberFormater";

const props = defineProps({
    product: {
        type: Object,

    }
})

const count = ref(props.product.count)
watch(count, (a, b)=>{
  cartMethods.changeCartCount(props.product,a)
})
</script>

<style scoped lang="scss" src="./index.scss"/>


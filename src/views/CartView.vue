<script setup>
    import cartMethods from '../utils/cart';
    import { ref, watch } from 'vue';
    import { onMounted } from 'vue';
    import CartProductCard from "../components/molecules/cart-product-card/inex.vue";

    const cart = ref([]);

    const fetchCart = () => {
        cart.value = cartMethods.getCart();
    }

    const removeItem = (id) => {
        cartMethods.removeFromCartById(id);
        cart.value = cartMethods.getCart();
    }

    const clearCart = () => {
        cartMethods.clearCart();
        cart.value = cartMethods.getCart();
    }

    onMounted(async () => {
        fetchCart();
    })
</script>

<template>
    <div>
        <h1>Cart</h1>
        <div v-for="item in cart" :key="item.id">
          <cart-product-card
              @remove="removeItem"
              :product="item">

          </cart-product-card>

        </div>

        <div v-if="cart.length === 0">
            <h3>Cart is empty</h3>
        </div>

        <div v-if="cart.length > 0">
            <h3>Total: {{ cartMethods.getCartTotal() }}</h3>
            <button @click="clearCart()">Clear cart</button>
        </div>
    </div>
</template>
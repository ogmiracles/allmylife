<script setup>
import { useRoute } from "vue-router";
import axios from "axios";
import { onMounted, ref } from "vue";
import ProductInfo from "@/components/molecules/product-info/index.vue"

const route = useRoute()
const isLoaded = ref(false)
const product = ref({})
const fetchProduct = async () => {
    isLoaded.value = false
    const product_req = await axios.get(`http://localhost:8000/api/products/${route.params.id}`)
    product.value = product_req.data
    isLoaded.value = true
}
onMounted(async () => {
    await fetchProduct()
})
</script>

<template>
    <product-info :product="product">
        </product-info>
    <div class="card-body">
        <p class="card-text">{{ product.price }}</p>
    </div>
    <div>
        <h1>Product</h1>
    </div>
    <div class="product-title" v-if="isLoaded">
        <p>{{ product.title }}</p>
    </div>
    <div v-else>
        ...loading
    </div>
</template>

<style scoped>

</style>

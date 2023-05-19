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
    </div>
    <div class="product-title" v-if="isLoaded">
        <h4>Abundance</h4>
    </div>
    <div v-else>
        ...loading
    </div>
</template>

<style scoped>

</style>

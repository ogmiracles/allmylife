<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

const wishList = ref([])
const isLoaded = ref(false)

const getWishList = async () => {
  isLoaded.value = false
  const response = await axios.get('http://localhost:8000/api/wishlist/', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('access_token')}`
    }
  })
  response.data.map(async (product) => {
    const { data } = await axios.get('http://localhost:8000/api/products/' + product)
    wishList.value.push(data)
  })
  console.log(wishList.value);
  isLoaded.value = true
}

onMounted(async () => {
  await getWishList()
})
</script>

<template>
  <div>
    <div v-if="isLoaded">
      <div v-for="product in wishList" :key="product.id">
        <p>{{ product.title }}</p>
      </div>
    </div>
    <div v-else>...loading</div>
  </div>
</template>

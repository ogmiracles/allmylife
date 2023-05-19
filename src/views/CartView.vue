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
const removeItem = (id) => { 
  cartMethods.removeFromCartById(id); 
  wishList.value = cartMethods.getCart(); 
} 
 
const clearCart = () => { 
  cartMethods.clearCart(); 
  wishList.value = cartMethods.getCart(); 
}

onMounted(async () => {
  await getWishList()
})
</script>
<template> 
    <section class="h-100 h-custom" style="background-color: #eee;"> 
      <div class="container py-5 h-100"> 
        <div class="row d-flex justify-content-center align-items-center h-100"> 
          <div class="col"> 
            <div class="card"> 
              <div class="card-body p-4"> 
   
   
                <div class="row"> 
   
                  <div class="col-lg-7"> 
                    <h5 class="mb-3"><a href="#!" class="text-body"><i 
                      class="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</a></h5> 
                    <hr> 
   
                    <div class="d-flex justify-content-between align-items-center mb-4"> 
                      <div> 
                        <p class="mb-1">Shopping Cart</p> 
                      </div> 
                      <div> 
                        <div v-if="wishList.length > 0"> 
                          <button @click="clearCart()" style="border: none;">Clear Cart</button> 
                        </div> 
                      </div> 
                    </div> 
                    <div v-if="wishList.length === 0"> 
                      <h3>Cart is empty</h3> 
                    </div> 
                    <div v-for="item in wishList" :key="item.id"> 
                      <div class="card mb-3"> 
                        <div class="card-body"> 
                          <div class="d-flex justify-content-between"> 
                            <div class="d-flex flex-row align-items-center"> 
                              <div> 
                                <img :src="item.image" class="img-fluid rounded-3" :alt="item.title" style="width: 65px" /> 
                              </div> 
                              <div class="ms-3 "> 
                                <RouterLink :to="'products/' + item.id"><h6 >{{ item.title }}</h6> </RouterLink> 
                              </div> 
                            </div> 
                            <div class="d-flex flex-row align-items-center"> 
                              <div style="width: 80px;"> 
                                <h6 class="mb-0">{{item.price}}₸</h6> 
                              </div> 
                              <button @click="removeItem(item.id)"> 
                                <i class="bi bi-trash-fill "> 
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" 
                                       height="16" fill="currentColor" 
                                       class="bi bi-trash-fill" viewBox="0 0 16 16"> 
                                    <path 
                                      d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/> 
                                  </svg> 
                                </i> 
                              </button> 
                            </div> 
                          </div> 
                        </div> 
                      </div> 
                    </div> 
   
                  </div>
                </div> 
              </div> 
            </div> 
          </div> 
        </div> 
      </div> 
    </section> 
  </template>
<script setup>
import {useRoute} from "vue-router";
  import axios from "axios";
  import {onMounted, ref} from "vue";
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
  })</script>

<template>

  <main>
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="images/asus_rog_strix_g16.webp" class="d-block w-100" alt="notebook">
        </div>
        <div class="carousel-item">
          <img src="images/iphone_14_yelow.webp" class="d-block w-100" alt="iphone 14">
        </div>
        <div class="carousel-item">
          <img src="images/xiaomi_13.webp" class="d-block w-100" alt="xiaomi">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <h1 class="fw-light">Электроника высшего качества для каждого
</h1>
          <p class="lead text-body-secondary">Добро пожаловать в наш магазин электроники, где мы предлагаем широкий ассортимент продуктов по средним ценам. Независимо от того, что вы ищете - смартфон, ноутбук или телевизор - у нас есть все, что необходимо в мире электроники.</p>
          <p>
            <a href="#" class="btn btn-primary my-2">Адрес</a>
            <a href="#" class="btn btn-secondary my-2">Связь</a>
          </p>
        </div>
      </div>
    </section>

    <div class="album py-5 bg-body-tertiary">
      <div class="container">

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div class="col">
            <div class="card shadow-sm">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
              <div class="card-body">
                <p class="card-text">Iphone 14</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-success">Купить</button>
                    <button type="button" class="btn btn-sm btn-primary">Подробнее</button>
                  </div>
                  <small class="text-body-secondary">Abundance</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
              <div class="card-body">
                <p class="card-text">Iphone 13</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-success">Купить</button>
                    <button type="button" class="btn btn-sm btn-primary">Подробнее</button>
                  </div>
                  <small class="text-body-secondary">Abundance</small>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card shadow-sm">
              <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
              <div class="card-body">
                <p class="card-text">Iphone 12</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-success">Купить</button>
                    <button type="button" class="btn btn-sm btn-primary">Подробнее</button>
                  </div>
                  <small class="text-body-secondary">Abundance</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>

<style>
</style>

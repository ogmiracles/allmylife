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
            <p class="mt-1 mb-3 text-body-secondary">&copy; Abundance</p>
          </p>
        </div>
      </div>
      
    </section>

    <section class="main-content"> 
    <div class="container"> 
      <div class="row"> 
        <div class="col-lg-4 .col-sm-6"> 
          <RouterLink :to="'products/' + 9" class="active" href="#"> 
          <div class="product-card"> 
            <div class="product-thumb"> 
              <img src="https://shop.kz/upload/iblock/376/152392_1.jpg">
            </div> 
            <div class="product-details"> 
              <h4><a href="#">iPhone 12 Pro</a></h4> 
              <p>Модель iPhone 12 Pro; Операционная система iOS; Диагональ экрана (дюйм); 6.1</p> 
            </div> 
            <div class="product-bottom-details"> 
              <div class="product-price"> 
                <small>589 990тг.</small>  454 000тг. 
              </div> 
            </div> 
          </div> 
          </RouterLink> 
        </div> 
         
         
        <div class="col-lg-4 .col-sm-6"> 
          <RouterLink :to="'products/' + 5" class="active" href="#"> 
          <div class="product-card"> 
            <div class="product-thumb"> 
             <img src="https://static.shop.kz/upload/resize_cache/iblock/6be/ssh2naxd3k5ztl7myvjmu8fwthiwhqh1/450_450_1/00000167444_1234.jpg">
            </div> 
            <div class="product-details"> 
              <h4><a href="#">Samsung Galaxy S22 Ultra</a></h4> 
              <p>Модельный год 2022; Диагональ дисплея, дюйм 6.8; Разрешение дисплея 1440x3080</p> 
            </div> 
            <div class="product-bottom-details"> 
              <div class="product-price"> 
                <small>631 990тг.</small>  549 000тг. 
              </div> 
            </div> 
          </div> 
          </RouterLink> 
        </div>  
         
         
        <div class="col-lg-4 .col-sm-6"> 
          <RouterLink :to="'products/' + 12" class="active" href="#"> 
          <div class="product-card">  
            <div class="product-thumb"> 
              <img src="https://object.pscloud.io/cms/cms/Photo/img_0_77_3947_0_1.webp">
            </div> 
            <div class="product-details"> 
              <h4><a href="#">Xiaomi Redmi Note 10 Pro</a></h4> 
              <p>Размер экрана, дюйм 6.67; Тип матрицы AMOLED; Объем оперативной памяти 8 ГБ</p> 
            </div> 
            <div class="product-bottom-details"> 
              <div class="product-price"> 
                <small>164 990тг.</small>  139 900тг. 
              </div> 
         
            </div> 
          </div> 
          </RouterLink> 
        </div>         
      </div> 
    </div> 
     
  </section>
  </main>
</template>

<style>
.main { 
  height: 100vh; 
} 
 
.my-carousel { 
  padding: 0 
} 
 
.my-carousel .carousel-item { 
  display: flex; 
  max-height: 600px; 
} 
.my-carousel .carousel-item img { 
  object-fit: cover; 
} 
 
.main-content { 
  padding-top: 50px; 
  padding-bottom: 50px; 
} 
 
.product-card { 
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.06); 
  transition: all .3s; 
} 
 
.product-card:hover { 
  box-shadow: 0 14px 30px -15px rgba(0, 0, 0, 0.75); 
} 
 
.product-thumb a { 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  height: 200px; 
  padding: 20px; 
} 
 
.product-thumb img { 
  max-width: 100%; 
  max-height: 100%; 
} 
 
.product-details { 
  padding: 20px; 
} 
 
.product-details h4 a { 
  font-weight: 500; 
  display: block; 
  height: 60px; 
  overflow: hidden; 
  text-decoration: none; 
} 
 
.product-details p { 
  font-size: 15px; 
  margin-bottom: 20px; 
  color: #999; 
  height: 44px; 
  overflow: hidden; 
} 
 
.product-bottom-details { 
  overflow: hidden; 
  border-top: 1px solid #eee; 
  padding-top: 20px; 
} 
 
.product-price { 
  font-size: 18px; 
  color: #ee6e73; 
  font-weight: 600; 
   
} 
 
.product-price small { 
  color: #ccc; 
  font-weight: 400; 
  text-decoration: line-through; 
  margin-right: 5px; 
 
} 
 
.active { 
  text-decoration: none; 
}
</style>

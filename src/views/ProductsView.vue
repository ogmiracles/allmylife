<script setup>
import {ref, watch} from 'vue'
import {useRoute} from 'vue-router'
import ProductCard from "@/components/molecules/product-card/index.vue";
import ADialog from "@/components/atoms/dialog/index.vue";
import PaginationButton from "@/components/atoms/pagination/index.vue";
import {UseFetchProducts} from "@/composebles/fetch";
import Accordion from "@/components/molecules/accordion/index.vue";
import Slider from '@vueform/slider'
import {currencyValidation} from "../helpers/numberFormater";
import BaseButton from "@/components/atoms/base-button/index.vue";

const route = useRoute()
const {data, totalPages, params, page} = UseFetchProducts()
const price = ref([0, 709000])
const priceStart = ref(0)
const priceEnd = ref(709000)
const setPrice = ([start, end]) => {
    priceStart.value = start
    priceEnd.value = end
}
watch(params, () => {
    window.scrollTo({top: 0});
}, {deep: true})


watch(route, async () => {
    params.value = {...route.query}

}, {immediate: true})
const submitFilterParams = () => {
    params.value.price__gte = priceStart.value
    params.value.price__lte = priceEnd.value
    params.value.page = 1
}



const isOpen = ref(false)
const activeProduct = ref({})
const openMoreModal = (product) => {
    console.log(product)
    activeProduct.value = product
    isOpen.value = true
}
const closeOpenModal = () => {
    console.log(123)
    isOpen.value = false
    activeProduct.value = {}
}
</script>

<template>
    <a-dialog v-model="isOpen" @close="closeOpenModal">
        <div class="modal-content">
          <img :src="activeProduct.image">
            <h4>{{ activeProduct.title }}</h4>
        </div>
    </a-dialog>
    <div class="container">
        <div class="product-page">
            <div class="product-page__filter">
                <div class="product-page__filter__content">
                    <div>
                        <accordion with-content-slot label="Цена" is-open>
                            <div class="price-content">
                                <slider v-model="price" :max="709000" @slide="setPrice"/>
                                <div>
                                    <div class="price-start">От: {{ currencyValidation(priceStart) }}</div>
                                    <div class="prise-end">До: {{ currencyValidation(priceEnd) }}</div>
                                </div>
                            </div>
                        </accordion>
                    </div>
                    <div class="submit">
                        <base-button @click="submitFilterParams">Применить</base-button>
                    </div>
                </div>
            </div>
            <div class="product-page__content">
                <div class="card-list">
                    <product-card v-for="product in data?.results" :product="product" :key="product.id" @more="openMoreModal"/>
                </div>
                <pagination-button :total-page="totalPages" v-model="page"/>

            </div>
        </div>
    </div>
    

</template>

<style scoped lang="scss">
.modal-content {
    display: flex;
    gap: 20px;
}
.product-page {
  display: grid;
  grid-template-columns: 250px minmax(10px, 1fr);
  grid-template-rows: 1fr;
  gap: 30px;
  background: #f7f7f7;

  &__filter {
    background: white;

    &__content {
      display: flex;
      flex-direction: column;
      position: sticky;
      top: 0;
      padding: 24px;

      & > * {

        &:not(:last-child) {
          border-bottom: 1px solid #aaa;
          padding-bottom: 20px;
        }
      }

      .submit {
        display: flex;
        justify-content: center;
        padding-top: 20px;
      }
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
}

.card-hover:hover {
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
}

.card-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex-wrap: wrap;
  /*justify-content: space-between;*/
}

.pagination-block {
  display: flex;
  justify-content: center;
  flex-grow: 1;
}

.price-content {
  display: flex;
  gap: 20px;
  flex-direction: column;
  padding-top: 50px;
}
</style>
<style src="@vueform/slider/themes/default.css"></style>
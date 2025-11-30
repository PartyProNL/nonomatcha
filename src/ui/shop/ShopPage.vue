<template>
  <div class="pt-navbar px-sides flex flex-col">
    <Breadcrumb :parts="breadcrumbParts" />

    <h4 class="font-semibold text-5xl pb-5">All products</h4>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
      <ProductCard v-if="popularProducts" v-for="product in popularProducts" :product="product" />
      <ProductCardLoading v-else v-for="_ in 12" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {BreadcrumbPart} from "../generic/navigation/BreadcrumbPart.ts";
import Breadcrumb from "../generic/navigation/Breadcrumb.vue";
import {ProductsService} from "../../domain/products/ProductsService.ts";
import type {Product} from "../../domain/products/Product.ts";
import ProductCard from "../generic/card/ProductCard.vue";
import ProductCardLoading from "../generic/card/ProductCardLoading.vue";

const breadcrumbParts = ref([
  new BreadcrumbPart(
      "/",
      "Home"
  ),
  new BreadcrumbPart(
      "/shop",
      "Shop"
  ),
])

const productsService = new ProductsService();
const popularProducts = ref<Product[] | undefined>(undefined)

async function loadPopularProducts() {
  popularProducts.value = await productsService.getPopularProducts(12)
}

loadPopularProducts()
</script>

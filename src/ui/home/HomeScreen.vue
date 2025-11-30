<template>
  <div class="pt-navbar px-sides w-full flex flex-col">
    <h1 class="font-serif font-semibold text-[180px] px-4 leading-[70px]">nònò matcha</h1>

    <div class="flex flex-row gap-4 w-full">
      <Card class="h-[500px] w-full" />
      <Card class="h-[500px] w-full" />
      <Card class="h-[500px] w-full" />
    </div>


    <ProductsSection title="Popular">
      <ProductCard v-for="product in popularProducts" :product="product" />
    </ProductsSection>
  </div>
</template>

<script setup lang="ts">

import Card from "../generic/card/Card.vue";
import {ProductsService} from "../../domain/products/ProductsService.ts";
import {ref} from "vue";
import type {Product} from "../../domain/products/Product.ts";
import ProductCard from "../generic/card/ProductCard.vue";
import ProductsSection from "../generic/card/ProductsSection.vue";

const productsService = new ProductsService();
const popularProducts = ref<Product[]>([])

async function loadPopularProducts() {
  popularProducts.value = await productsService.getPopularProducts()
}

loadPopularProducts()
</script>

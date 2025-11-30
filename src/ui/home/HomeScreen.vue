<template>
  <div class="pt-navbar px-sides w-full flex flex-col">
    <h1 class="font-serif font-semibold px-4">
      <AutoSizeText>
        nònò matcha
      </AutoSizeText>
    </h1>

    <div class="flex flex-col md:flex-row gap-4 w-full">
      <Card class="h-[500px] w-full" />
      <Card class="h-[500px] w-full" />
      <Card class="h-[500px] w-full" />
    </div>

    <ProductsSection title="Popular" view-more-url="/shop">
      <ProductCard v-for="product in popularProducts" :product="product" />
    </ProductsSection>

    <!--  TODO actual for you products  -->
    <ProductsSection title="For you">
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
import AutoSizeText from "../generic/text/AutoSizeText.vue";

const productsService = new ProductsService();
const popularProducts = ref<Product[]>([])

async function loadPopularProducts() {
  popularProducts.value = await productsService.getPopularProducts(4)
}

loadPopularProducts()
</script>

<template>
  <a :href="`/shop/product/${product.id}`" class="flex flex-col gap-3 w-full cursor-pointer group">
    <div class="bg-surface-low rounded-3xl w-full aspect-square relative overflow-clip">
      <div
          class="absolute w-full h-full bg-cover transition-opacity opacity-100 group-hover:opacity-0"
          :style="{ backgroundImage: `url(${product.images[0]!.url })` }"
      ></div>

      <div
          class="absolute w-full h-full bg-cover transition-opacity opacity-0 group-hover:opacity-100"
          :style="{ backgroundImage: `url(${product.images[1]!.url })` }"
      ></div>
    </div>

    <div class="flex flex-col">
      <h4 class="font-bold text-2xl">{{ product.name }}</h4>
      <p class="font-medium text-2xl">€{{ product.price }}</p>
    </div>
  </a>
</template>

<script setup lang="ts">
import type {Product} from "../../../domain/products/Product.ts";

interface Props {
  product: Product;
}

defineProps<Props>();
</script>

<template>
  <div class="px-sides pt-navbar flex flex-col">
    <Breadcrumb :parts="breadcrumbParts" />

    <div v-if="product" class="flex flex-row gap-6">
      <div class="flex-6 grid grid-cols-2 gap-2">
        <div v-for="image in product.images" class="bg-surface-low rounded-3xl w-full aspect-square overflow-clip">
          <div class="w-full h-full bg-cover" :style="{ backgroundImage: `url(${image.url })` }" />
        </div>
      </div>

      <div class="flex-4 flex flex-col">
        <h2 class="font-serif font-bold text-5xl">{{ product.name }}</h2>
        <p class="font-normal text-4xl py-2">€{{ product.price }}</p>

        <p class="font-medium text-md pt-6 line-clamp-3" :class="{'line-clamp-none': descriptionExpanded}">{{ product.description }}</p>
        <div class="w-full flex flex-row justify-center">
          <div @click="onExpandDescriptionClicked" class="p-2 rounded-full cursor-pointer hover:bg-on-background/10">
            <IconDropdown :class="{'rotate-180': descriptionExpanded}" />
          </div>
        </div>

        <div class="flex flex-row gap-1 pt-5">
          <button class="rounded-full w-full cursor-pointer bg-on-background text-background font-medium text-md">Add to cart</button>
          <AmountInput :amount="testAmount" @update="onAmountUpdate" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {ProductsService} from "../../../domain/products/ProductsService.ts";
import {ref} from "vue";
import type {Product} from "../../../domain/products/Product.ts";
import Breadcrumb from "../../generic/navigation/Breadcrumb.vue";
import {BreadcrumbPart} from "../../generic/navigation/BreadcrumbPart.ts";
import IconDropdown from "../../generic/icons/IconDropdown.vue";
import AmountInput from "../../generic/input/AmountInput.vue";

const route = useRoute()
const productService = new ProductsService()

const product = ref<Product>()
const descriptionExpanded = ref(false)

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

async function loadProduct() {
  product.value = await productService.getProductById(route.params.id as string)
}

function onExpandDescriptionClicked() {
  descriptionExpanded.value = !descriptionExpanded.value
}

loadProduct()

const testAmount = ref(1)
function onAmountUpdate(amount: number) {
  testAmount.value = amount
}
</script>

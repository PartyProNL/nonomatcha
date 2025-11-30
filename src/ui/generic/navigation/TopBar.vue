<template>
  <div class="fixed top-0 w-full px-sides flex flex-row py-4 justify-between items-center bg-linear-to-b from-background via-background to-background-[0%] z-10">
    <a href="/" class="flex flex-row items-center gap-1 flex-1">
      <IconLogo />

      <h3 class="font-serif text-xl font-bold">nònò matcha</h3>
    </a>

    <div class="flex-row items-center gap-12 hidden md:flex">
      <a href="/"><TopBarItem>Home</TopBarItem></a>
      <a href="/shop"><TopBarItem :show-dropdown="true">Shop</TopBarItem></a>
      <TopBarItem :show-dropdown="true">About</TopBarItem>
      <TopBarItem>Contact</TopBarItem>
    </div>

    <div class="flex flex-row items-center justify-end gap-2 flex-1">
      <IconShoppingCart />
      <IconLanguage class="hidden md:block" />
      <IconMenu class="block md:hidden" />
    </div>
  </div>
</template>

<script setup lang="ts">

import IconLogo from "../icons/IconLogo.vue";
import IconShoppingCart from "../icons/IconShoppingCart.vue";
import IconLanguage from "../icons/IconLanguage.vue";
import TopBarItem from "./TopBarItem.vue";
import IconMenu from "../icons/IconMenu.vue";
</script>

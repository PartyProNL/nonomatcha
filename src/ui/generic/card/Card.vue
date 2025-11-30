<script setup lang="ts">

import IconOpen from "../icons/IconOpen.vue";
</script>

<template>
  <div class="bg-primary-container text-on-primary-container rounded-3xl relative overflow-clip h-[500px] w-full">
    <div
        class="w-full h-[250px] absolute bottom-0 bg-cover"
        style="background-image: url('/card-example-background.png')"
    />

    <div class="flex flex-col justify-between p-6 h-full w-full absolute">
      <h3 class="font-bold text-4xl">Fuyang Premium Matcha</h3>

      <div class="flex flex-row justify-end">
        <button class="bg-background rounded-full flex flex-row items-center gap-1 px-3 py-2 text-on-background">
          <p class="font-semibold text-md">Shop now</p>
          <IconOpen />
        </button>
      </div>
    </div>
  </div>
</template>

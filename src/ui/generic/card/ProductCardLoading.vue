<template>
  <div class="flex flex-col gap-3 w-full">
    <Skeleton class="w-full aspect-square" />
    <Skeleton class="w-full h-7" />
    <Skeleton class="w-20 h-7" />
  </div>
</template>

<script setup lang="ts">
import Skeleton from "../state/Skeleton.vue";
</script>

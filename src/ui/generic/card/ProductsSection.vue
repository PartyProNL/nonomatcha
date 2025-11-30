<template>
  <div class="flex flex-col pt-16 gap-3">
    <div class="flex flex-row justify-between w-full">
      <h4 class="font-semibold text-2xl">{{ title }}</h4>

      <a class="text-md font-medium">View more</a>
    </div>

    <div class="grid grid-cols-4 gap-4 w-full">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
}

defineProps<Props>();
</script>

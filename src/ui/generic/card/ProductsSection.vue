<template>
  <div class="flex flex-col pt-16 gap-3">
    <div class="flex flex-row justify-between w-full">
      <h4 class="font-semibold text-2xl">{{ title }}</h4>

      <a :href="viewMoreUrl" v-if="viewMoreUrl" class="text-md font-medium hover:underline">View more</a>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  viewMoreUrl?: string;
}

defineProps<Props>();
</script>

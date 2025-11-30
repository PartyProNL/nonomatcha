<template>
  <div class="flex flex-row items-center pb-3 font-medium text-md">
    <div v-for="(part, index) in parts" class="flex flex-row items-center">
      <IconChevronRight v-if="index != 0" />
      <a :href="part.url" class="hover:underline">{{ part.text }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import {BreadcrumbPart} from "./BreadcrumbPart.ts";
import IconChevronRight from "../icons/IconChevronRight.vue";

interface Props {
  parts: BreadcrumbPart[];
}

defineProps<Props>();
</script>

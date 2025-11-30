<template>
  <div class="flex flex-row items-center hover:underline">
    <p class="font-medium text-md">
      <slot />
    </p>

    <IconDropdown v-if="showDropdown" />
  </div>
</template>

<script setup lang="ts">
import IconDropdown from "../icons/IconDropdown.vue";

interface Props {
  showDropdown?: boolean;
}

defineProps<Props>();
</script>

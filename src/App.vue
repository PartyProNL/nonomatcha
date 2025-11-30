<script setup lang="ts">

import TopBar from "./ui/generic/navigation/TopBar.vue";
import Footer from "./ui/generic/Footer.vue";
</script>

<template>
  <div class="min-h-screen w-full bg-below-background text-on-background font-sans flex flex-col">
    <TopBar />
    <RouterView class="bg-background" />
    <Footer />
  </div>
</template>

<template>
  <div class="flex flex-col pb-6 text-surface-low">
    <div class="w-full h-16 rounded-b-full bg-background" />

    <div class="px-sides pt-12 grid grid-cols-3 gap-x-2.5 gap-y-5">
      <div>
        <div class="flex flex-row py-0.75 items-center gap-2">
          <IconLogo class="size-8" />
          <h3 class="font-bold text-3xl">nònò matcha</h3>
        </div>
      </div>

      <div class="h-24" />

      <div class="flex flex-row gap-1.5">
        <a href="https://tiktok.com/" class="bg-surface-low text-below-background p-2 rounded-full mb-auto">
          <IconTikTok />
        </a>

        <a href="https://instagram.com/" class="bg-surface-low text-below-background p-2 rounded-full mb-auto">
          <IconInstagram />
        </a>

        <a href="https://wechat.com/" class="bg-surface-low text-below-background p-2 rounded-full mb-auto">
          <IconWeChat />
        </a>
      </div>

      <div class="flex flex-col gap-1 font-medium text-md">
        <a href="/">Home</a>
        <a href="/">Shop</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
      </div>

      <div class="flex flex-col gap-1 font-medium text-md">
        <a href="/">Fuyang Premium Matcha</a>
        <a href="/">For someone matcha-loved</a>
      </div>

      <div class="flex flex-col gap-1 font-medium text-md">
        <a href="/">Privacy Policy</a>
        <a href="/">Terms & Conditions</a>
        <a href="/">Cookies</a>
        <a href="/">Return Policy</a>
      </div>

      <div />

      <div class="flex flex-col gap-1 font-medium text-md">
        <a href="/">Matcha</a>
        <a href="/">Matcha Sets</a>
      </div>

      <div class="flex flex-col gap-1 font-medium text-md">
        <a href="/">Nederlands</a>
        <a href="/">English</a>
        <a href="/">中文</a>
      </div>
    </div>

    <p class="w-full text-center font-medium text-md pt-3">© 2025 nònò matcha</p>
  </div>
</template>

<script setup lang="ts">
import IconLogo from "./icons/IconLogo.vue";
import IconTikTok from "./icons/social/IconTikTok.vue";
import IconInstagram from "./icons/social/IconInstagram.vue";
import IconWeChat from "./icons/social/IconWeChat.vue";
</script>

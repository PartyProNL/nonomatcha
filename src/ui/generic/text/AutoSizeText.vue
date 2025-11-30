<template>
  <div ref="container" class="relative w-full h-full">
    <span ref="textEl" class="block whitespace-nowrap">
      <slot />
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, onBeforeUnmount } from 'vue'

const container = ref<HTMLElement | null>(null)
const textEl = ref<HTMLElement | null>(null)
let observer: ResizeObserver | null = null

const resizeText = () => {
  if (!container.value || !textEl.value) return

  const parent = container.value
  const text = textEl.value

  let fontSize = 200
  text.style.fontSize = fontSize + "px"
  text.style.lineHeight = fontSize + "px"
  text.style.height = fontSize * 2 + "px"
  parent.style.height = fontSize * 2 + "px"

  while (
      (text.scrollWidth > parent.clientWidth || text.scrollHeight > parent.clientHeight) &&
      fontSize > 5
      ) {
    fontSize -= 2
    text.style.fontSize = fontSize + "px"
  }

  text.style.lineHeight = (fontSize / 2) + "px"
  text.style.height = fontSize / 2 + "px"
  parent.style.height = fontSize / 2 + "px"
}

onMounted(() => {
  nextTick(resizeText)

  observer = new ResizeObserver(() => resizeText())
  observer.observe(container.value!)
})

onBeforeUnmount(() => {
  observer?.disconnect()
})
</script>

<style scoped>
span {
  display: inline-block;
  white-space: nowrap;
}
</style>

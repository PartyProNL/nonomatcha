<template>
  <div class="flex flex-row bg-surface-low rounded-full px-2 py-1.5 gap-1 items-center select-none">
    <div class="rounded-full p-2 cursor-pointer hover:bg-on-background/10">
      <IconRemove @click="onRemoveClicked" />
    </div>

    <p class="text-md font-semibold">{{ amount }}</p>

    <div class="rounded-full p-2 cursor-pointer hover:bg-on-background/10">
      <IconAdd @click="onAddClicked" />
    </div>
  </div>
</template>

<script setup lang="ts">

import IconRemove from "../icons/IconRemove.vue";
import IconAdd from "../icons/IconAdd.vue";

interface Props {
  amount: number;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  update: [value: number]
}>()

function onAddClicked() {
  updateAmount(props.amount + 1)
}

function onRemoveClicked() {
  if (props.amount == 0) return
  updateAmount(props.amount - 1)
}

function updateAmount(amount: number) {
  emit('update', amount)
}
</script>

<template>
  <main>
    <canvas
      ref="canvasRef"
      class="w-full h-full"
    />
  </main>
</template>

<script lang="ts" setup>

import { onMounted, ref } from 'vue'

const canvasRef = ref<HTMLCanvasElement>()

onMounted(() => {
  const context = canvasRef.value?.getContext('2d')

  context?.fillRect(32, 32, 50, 50)
})
</script>

<style scoped lang="scss">
</style>

<template>
  <main>
    Hello Home!
  </main>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { contentfulClientApi, contentfulPreviewClientApi } from '@/plugins/contentful'

onMounted(async () => {
  const entries = await contentfulPreviewClientApi.getEntries()
  // const entries = await contentfulClientApi.getEntries()
  console.log(entries)
})
</script>

<style scoped lang="scss">
</style>

<template>
  <div>
    <AppBar />

    <div class="mx-auto max-w-6xl">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppBar from "@/components/molecules/AppBar.vue";
</script>

<style lang="scss">
</style>

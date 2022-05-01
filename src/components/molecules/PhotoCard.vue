<template>
  <div v-if="active">
    <h2>
      HELLO WOLRD!
    </h2>
  </div>
 <div v-on:mouseover="active = !active">
    <h1>Hover me!</h1>
 </div>

  <div>  
    {{item.fields.date}}
  </div>
</template>

<script lang="ts" setup>

    const props = defineProps({
        item: Object
    })

</script>

<style scoped>
</style>

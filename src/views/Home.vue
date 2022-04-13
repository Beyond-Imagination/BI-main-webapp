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

<script lang="ts">
import {createClient} from "contentful";
import dotenv from 'dotenv'

// 값 입력 필요
var accessToken: string =  ''
var space: string = ''

const client = createClient({
  space, accessToken
});
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
client
  .getEntries({
    limit: 20,
    order: 'sys.createdAt',
    select: 'fields',
    content_type: 'history',  // 연혁
    // content_type: 'left_member', // 떠난 멤버
    // content_type: 'member', // 멤버
    // content_type: 'photos', // 사진
    // content_type: 'projects', // 프로젝트

  })
  .then(entry => console.log(entry))
  .catch(err => console.log(err));

</script>

<style scoped lang="scss">
</style>

<template>
  <header class="px-4 py-4 flex justify-between mx-auto max-w-6xl">
    <a href="/" class="font-bold text-2xl dark:text-white dark:hover:text-indigo-300 transition-colors">
      Beyond Imagination
    </a>
    <div class="flex">
      <template v-for="(item, index) in btnItems" :key="index">
        <Button @click="onClickBtn(item)" class="mx-4">
          {{ item.label }}
        </Button>
      </template>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from 'vue-router'

import Button from "@/components/atoms/Button.vue";

interface ButtonItem {
  label: string;
  url: string;
}

const router = useRouter()

const btnItems = ref<ButtonItem[]>([
  { label: '팀 소개', url: '/introduce' },
  { label: '팀원 소개', url: '/members' },
  { label: '프로젝트 소개', url: '/projects' },
  { label: '연혁', url: '/history' },
  { label: '사진', url: '/photo' }
])

function onClickBtn (btnItem: ButtonItem) {
  router.push(btnItem.url)
}
</script>

<style scoped>

</style>
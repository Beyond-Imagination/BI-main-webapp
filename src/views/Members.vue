<template>
  <main>
    <MemberList></MemberList>
    <LeftMemberList></LeftMemberList>
  </main>
</template>

<script setup lang="ts">
import MemberList from "@/components/molecules/MemberList.vue";
import LeftMemberList from "@/components/molecules/LeftMemberList.vue";
</script>

<style scoped lang="scss">
*{
  font-family: "Noto Sans KR", Avenir, Helvetica, Arial, sans-serif;
}
</style>
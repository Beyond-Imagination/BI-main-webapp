<template>
  <main>
    <tr v-for="item,index in testData.items">
      <PhotoCard :item="item">
      </PhotoCard>
    </tr>
  </main>
</template>

<script lang="ts">
import { contentfulClientApi } from '@/plugins/contentful'
import PhotoCard from "@/components/molecules/PhotoCard.vue";

export default {
    name: 'photos',
    components: {
        PhotoCard,
    },
    data() {
        return {
            photos: [],
        };
    },
    async mounted() {
        const entries = await contentfulClientApi.getEntries({select: 'fields',content_type: 'photos', order: 'fields.join_date',})
        const map = new Map()
        entries.includes.Asset.forEach(asset => {
            const key = asset.sys.id
            const value = `https:${asset.fields.file.url}`
            map.set(key, value)
        });
        entries.items.forEach(item => {
            item.fields.photo = map.get(item.fields.photo.sys.id)
            this.leftMembers.push(item.fields)
        });
    },
}

console.log(testData);
console.log(testData.items);
</script>

<style scoped lang="scss">

</style>
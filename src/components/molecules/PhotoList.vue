<template>
  <div>  
    <PhotoCard v-for="(photo) in photos" :photo="photo"></PhotoCard>
  </div>
</template>

<script lang="ts">
import { contentfulClientApi } from '@/plugins/contentful'
import PhotoCard from "./PhotoCard.vue"
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
        const entries = await contentfulClientApi.getEntries({select: 'fields',content_type: 'photos', order: 'sys.createdAt',})
        const map = new Map()
        entries.includes.Asset.forEach(asset => {
            const key = asset.sys.id
            const value = `https:${asset.fields.file.url}`
            map.set(key, value)
        });
        entries.items.forEach(item => {
            item.fields.photo = map.get(item.fields.photo.sys.id)
            this.photos.push(item.fields)
        });
        console.log(this.photos);
    },
}


//console.log(testData.items);

</script>

<style scoped>
</style>

<template>
  <div :class = "{blurEffect : photoUrl}">  
    <PhotoCard v-for="(photo) in photos" :photo="photo" @setPhoto="setPhoto"></PhotoCard>
  </div>
  <div v-if = "photoUrl" v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" :style="{backgroundImage: 'url(' + photoUrl + ')'}"
        v-on:click="photoUrl = null"
        class="photo_container">
        <div v-show="active" style = "height : 30px; width:500px; position:absolute; background-color:rgba(0, 0, 0, 0.8);">
            {{date}}
        </div>
        <div v-show="active" style = "height : 60px; width:500px; position:absolute; bottom:0 ;left:0; background-color:rgba(0, 0, 0, 0.8);">
            <div>{{description}}</div>
            <div v-if=hashtags>{{hashtags.join(", ")}}</div>
        </div>
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
            photoUrl: "",
            date: "",
            description:"",
            hashtags:"",
            active: false,
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
    },
    methods:{
        setPhoto(selected){
            this.photoUrl = selected.photo;
            this.date = selected.date;
            this.description = selected.description;
            this.hashtags = selected.hashtags;
        },
        mouseover: function(selected){
            this.active = true;
        },    
        mouseleave: function(selected){
            this.active = false;
        },
    }
}


</script>

<style scoped>
    .photo_container{ 
        left : 25%;
        top : 10%;
        width:500px; 
        height:500px; 
        position:fixed;    
        background-size: cover;
    }

    .blurEffect{
        filter:blur(1px);
    }
</style>

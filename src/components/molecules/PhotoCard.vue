<template>
   <div>
      <div id = "photoCard" v-on:click="$emit('setPhoto', this.photo)">
         <div v-on:mouseover="mouseover" v-on:mouseleave="mouseleave" :style="{backgroundImage: 'url(' + photo.photo + ')'}" class="photo_container" >
            <div v-show="active" style = "height : 30px; position:absolute; background-color:rgba(0, 0, 0, 0.8);">
               {{photo.date}}
            </div>
            <div v-show="active" style = "height : 60px; position:absolute; bottom:0 ;left:0; background-color:rgba(0, 0, 0, 0.8);">
               <div>{{photo.description}}</div>
               <div v-if=photo.hashtags>{{photo.hashtags.join(", ")}}</div>
            </div>
         </div>
      </div>
   </div>
</template>

<script lang="ts">
export default {
    name: 'PhotoCard',
    props: {
        photo: {
            type: Object,
        },
        setPhoto: Function
    },
    data() {
        return {
            active: false,
        };
    },
    methods: {
        mouseover: function(){
        this.active = true;
        },    
        mouseleave: function(){
        this.active = false;
        },
    }
}
</script>

<style scoped>
div {
    width: 250px;
    
    display: inline-block;
    float: left;
}

.photo_container {
    width: 250px;
    height: 250px;
    background-size: cover;
    position:relative;
}
</style>

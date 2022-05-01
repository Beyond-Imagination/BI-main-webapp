<template>
<div>
    <div :style="{backgroundImage: 'url(' + photo.photo + ')'}" class="photo_container" ></div>
</div>
</template>

<script lang="ts">
export default {
    name: 'PhotoCard',
    props: {
        photo: {
            type: Object,
        },
    },
}
</script>

<style scoped>
div {
    width: 250px;
    margin: 10px;
    display: inline-block;
    float: left;
}

.photo_container {
    width: 250px;
    height: 250px;
    background-size: cover;
}

p {
    width: inherit;
    margin: 2px;
}

.name {
    font-size: 24px;
    text-align: center;
}

.captain {
    color: #EBE645;
}

</style>

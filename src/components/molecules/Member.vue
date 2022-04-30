<template>
<div>
    <div :style="{backgroundImage: 'url(' + member.photo + ')'}" class="photo_container" ></div>
    <p class="name" :class= "{captain: member.captain}">{{member.name}} ({{member.company}})</p>
    <p>합류날짜: {{member.join_date}}</p>
    <p>관심분야: {{member.tech_stacks.join(', ')}}</p>
    <p>{{member.description}}</p>
</div>
</template>

<script lang="ts">
export default {
    name: 'Member',
    props: {
        member: {
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

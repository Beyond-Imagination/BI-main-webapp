<template>
<div>
    <div :style="{backgroundImage: 'url(' + leftMember.photo + ')'}" class="photo" ></div>
    <p class="name">{{leftMember.name}} ({{leftMember.company}})</p>
    <p>합류날짜: {{leftMember.join_date}}</p>
    <p>탈퇴날짜: {{leftMember.leave_date}}</p>
</div>
</template>

<script lang="ts">
export default {
    name: 'LeftMember',
    props: {
        leftMember: {
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

.photo {
    width: 230px;
    height: 230px;
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
</style>

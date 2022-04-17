<template>
<div style="display: inline-block">
    <img :src="member.photo" :width="150">
    <p>{{member.name}} ({{member.company}})</p>
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

</style>

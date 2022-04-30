<template>
    <div id="left_member_container">
        <h1>탈퇴 멤버</h1>

        <LeftMember v-for="(leftMember) in leftMembers" :leftMember="leftMember"></LeftMember>
    </div>
</template>

<script lang="ts">
import { contentfulClientApi } from '@/plugins/contentful'
import LeftMember from "./LeftMember.vue"

export default {
    name: 'LeftMemberList',
    components: {
        LeftMember,
    },
    data() {
        return {
            leftMembers: [],
        };
    },
    async mounted() {
        const entries = await contentfulClientApi.getEntries({select: 'fields',content_type: 'left_member', order: 'fields.join_date',})

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
</script>

<style scoped>
h1 {
    font-size: 48px;
    text-align: center;
}

#left_member_container:after {
    content: "";
    display: block;
    clear: both;
}
</style>

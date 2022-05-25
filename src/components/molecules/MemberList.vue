<template>
  <div id="member_container">
    <h1>팀원소개</h1>
    <div class="members">
      <Member v-for="(member) in members" :member="member"></Member>
    </div>
  </div>
</template>

<script lang="ts">
import {contentfulClientApi} from '@/plugins/contentful'
import Member from "./Member.vue"

export default {
  name: 'MemberList',
  components: {
    Member,
  },
  data() {
    return {
      members: [],
    };
  },
  async mounted() {
    const entries = await contentfulClientApi.getEntries({
      select: 'fields',
      content_type: 'member',
      order: 'fields.join_date',
    })

    const map = new Map()
    entries.includes.Asset.forEach(asset => {
      const key = asset.sys.id
      const value = `https:${asset.fields.file.url}`
      map.set(key, value)
    });

    entries.items.forEach(item => {
      item.fields.photo = map.get(item.fields.photo.sys.id)
      if (item.fields.captain) {
        this.members.unshift(item.fields)
      } else {
        this.members.push(item.fields)
      }
    });
  },
}
</script>

<style scoped>
h1 {
  font-size: 36px;
  text-align: center;
  margin-bottom: 30px;
}

#member_container:after {
  content: "";
  display: block;
  clear: both;
}

.members {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: center;
}

</style>

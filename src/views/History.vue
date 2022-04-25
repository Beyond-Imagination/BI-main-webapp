<template>
  <main id = 'history'>   
    <div v-if="loding">
      Loding ...      
    </div> 
    <Timeline
    v-else
      :timeline-items="dataTimeline"
      :message-when-no-items="messageWhenNoItems"
      :unique-year="true"
      :show-day-and-month="true"
      order="desc"
    />
  </main>  
</template>

<script>
import Timeline from "../components/molecules/Timeline.vue";
import { contentfulPreviewClientApi } from '@/plugins/contentful'

export default {
  name: "App",
  components: {
    Timeline
  },

  async mounted() {
    const entries = await contentfulPreviewClientApi.getEntries({
    order: 'sys.createdAt',
    select: 'fields',
    content_type: 'history'
  })    

  this.dataTimeline = entries.items.map(x => {
    return {
      from: new Date(x.fields.date),
      title: x.fields.text,    
      showDayAndMonth: true,
    }    
  });
  
  this.loding = false
  
  },

  data: () => ({
    messageWhenNoItems: "There are no history data",
    dataTimeline: [],
    loding: true
  })
};
</script>

<style scoped lang="scss">
#history {  
  font-family: "Noto Sans KR", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 10px;
}
</style>
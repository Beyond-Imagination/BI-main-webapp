<template>
  <main>    
    <Timeline
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

export default {
  name: "App",
  components: {
    Timeline
  },
  data: () => ({
    messageWhenNoItems: "There arent items",
    dataTimeline: [
      {
        from: new Date(2017, 5, 22),
        title: "테스트",
        showDayAndMonth: true,
        description:
          "블라블라"
      },
      {
        from: new Date(2017, 8),
        title: "테스트2",
        description:
          "오 된다"
      }
    ]
  })
};
</script>

<style scoped lang="scss">
#history {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 60px;
}
</style>

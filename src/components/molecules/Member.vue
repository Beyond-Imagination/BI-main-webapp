<template>
  <div class="member_wrap">
    <div class="member" :class="{captain: member.captain}">
      <div :style="{backgroundImage: 'url(' + member.photo + ')'}" class="photo"></div>
      <div class="member_statement">
        <p class="name" >{{ member.name }} ({{ member.company }})</p>
        <p style="margin-bottom: 10px;">합류날짜: {{ member.join_date }} ~</p>
<!--        <p>관심분야: {{ member.tech_stacks.join(', ') }}</p>-->
        <p>{{ member.description }}</p>
      </div>
    </div>
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
/*div {*/
/*  width: 250px;*/
/*  margin: 10px;*/
/*  display: inline-block;*/
/*  float: left;*/
/**/
.member_wrap {
  width: 384px;
  height: 512px;
  padding-bottom: 20px;
  padding-right: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


}

@media (min-width: 768px) {
  .member_wrap {
    width: 50%;
    padding-right: 10px;
    padding-left: 10px;

  }
}

@media (min-width: 1024px) {
  .member_wrap {
    width: 25%;
    padding-right: 10px;
    padding-left: 10px;
  }
}


.member {
  width: 100%;
  background-color: #f8f7f7;
  padding: 20px;
  height: 100%;

  display: flex;
  flex-direction: column;;
  align-items: center;

  border-radius: 10px;

  border: white 3px solid;
}

.photo {
  width: 200px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 30px;
}
.member_statement{
  width: 100%;
}

p {
  width: inherit;
  margin: 2px;
  color: black;
}

.name {
  font-size: 20px;
  text-align: left;
  margin-bottom: 30px;
}

.captain {
  border: #dbad47 5px solid;

}

</style>

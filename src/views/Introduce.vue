<template>
  <div id="slider" @wheel="handleWheelEvent">
    <ul v-bind:style="{marginTop: -857*(activateElement-1)+'px'}" class="panel">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>

    <ul class="btns">
      <li @click="activate(1)" :class="{active: activateElement === 1}"><a href="#">A</a></li>
      <li @click="activate(2)" :class="{active: activateElement === 2}"><a href="#">B</a></li>
      <li @click="activate(3)" :class="{active: activateElement === 3}"><a href="#">C</a></li>
      <li @click="activate(4)" :class="{active: activateElement === 4}"><a href="#">D</a></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

let activateElement = ref<number>(1);
let loading = ref<boolean>(false)

const handleWheelEvent = (e: WheelEvent) => {
  console.log(e);
  console.log(loading.value);
  if (e.deltaY === 100 && activateElement.value < 4 && loading.value === false) {
    activateElement.value = activateElement.value + 1;
    loading.value = true
    setTimeout(() => {
      loading.value = false
    }, 2000);
  }

  if (e.deltaY === -100 && activateElement.value > 1 && loading.value === false) {
    activateElement.value = activateElement.value - 1;
    loading.value = true
    setTimeout(() => {
      loading.value = false
    }, 2000);
  }


}

const activate = (index: number) => {
  activateElement.value = index;
}


// function activation(index: any) {
//   panel.stytle.marginTop = `${-100 * index}%`
//
// }

</script>

<style scoped lang="scss">
#slider {
  width: 100%;
  height: calc(100vh - 72px);
  position: relative;
  overflow: hidden;

  .panel {
    width: 100%;
    height: 400%;
    transition: margin-top 2s;

    li {
      width: 100%;
      height: 25%;
      //float: top;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;

      @for $i from 1 through 3 {
        &:nth-of-type(#{$i}) {
          background-image: url("../assets/images/introduce#{$i}.png");
        }
      }
      &:nth-of-type(4) {
        background-color: black;
      }
    }

  }

  .btns {
    position: absolute;
    right: 5vh;
    top: 5%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    li {
      height: 20px;
      width: 20px;
      //padding: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;

      &.active {
        a {
          color: red;
        }
      }
    }
  }

}
</style>

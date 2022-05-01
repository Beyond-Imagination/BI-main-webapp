<template>
  <div id="slider" @wheel="handleWheelEvent">
    <div v-bind:style="{marginTop: -857*(activateElement-1)+'px'}" class="panel">
      <div class="slide">
        <div class="text-container">
          <div>
            <span class="title">세상을 바꾸는 또라이가 되자</span>
          </div>
          <div>
        <span calss="content">Computers are incredibly fast, accurate, and stupid.<br>
Human beings are incredibly slow, inaccurate, and brilliant.<br>
Together they are powerful beyond imagination.<br>
- Albert Einstein -</span>
          </div>
        </div>
      </div>
      <div class="slide">
        <div class="text-container">
          <div>
            <span class="title">프로그래밍으로 세상을 바꿔갑니다.</span>
          </div>
          <div>
        <span calss="content">다양한 분야의 개발자들이 모여 세상을 바꿀 서비스를 만들어갑니다.<br>
어떤일을 하는지 경력이 얼마인지 중요하지 않습니다.<br>
프로그래밍에대한 열정으로 같이 발전해나갈 사람들이 모였습니다.<br>
</span>
          </div>
        </div>
      </div>
      <div class="slide" style="display: flex; flex-direction: column">
        <div style="background-color: #000; width: 90%">
          <div style="display: flex; justify-content: center; margin-bottom: 32px">
            <span
                style="font-family: 'Noto Sans KR';font-style: normal;font-weight: 700;font-size: 48px;line-height: 56px;">프로젝트를 소개합니다.</span>
          </div>
          <div style="display: flex; flex-direction: row; justify-content: space-between; width: 100%">
            <div v-for="(item) in projects.items">
              <a href="/projects">
                <div v-if="item.fields.photos"
                     :style="{backgroundImage: 'url(' + item.fields.photos[0].fields.file.url + ')'}"
                     style="width: 300px; height: 300px; background-size:cover; margin-bottom: 32px; cursor: pointer">
                </div>
              </a>
              <div style="display: flex; justify-content: center">
                {{ item.fields.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slide">
        <div style="display: flex; flex-direction: row;">
          <div style="margin-right: 140px;">
            <div class="logo">
            </div>
          </div>
          <div style="display: flex; flex-direction: column;">
            <div style="margin-bottom: 80px">
              <div
                  style="font-style: normal;font-weight: 700;font-size: 48px;line-height: 56px; text-align: center; margin-bottom: 16px">
                Beyond Imagination
              </div>
              <div
                  style="font-style: normal;font-weight: 700;font-size: 16px;line-height: 24px;text-align: center;letter-spacing: 0.15px;">
                상상을 뛰어넘는 생각을 실현하기위한 모임입니다.<br>
                저희 모임에 합류하실 멋진 크루분들을 항상 기다립니다.
              </div>
            </div>
            <div style="display: flex; flex-direction: row; justify-content: space-around">
              <div>
                <a href="https://github.com/Beyond-Imagination" style="display:flex; align-items: center">
                  <div class="github-icon">
                  </div>
                  <div
                      style="font-style: normal;font-weight: 400;font-size: 16px;line-height: 24px;text-align: center;letter-spacing: 0.15px;">
                    github 바로가기
                  </div>
                </a>

              </div>
              <div>
                <a href="mailto://beyond-imagination@gmail.com" style="display:flex; align-items: center">

                  <div class="email-icon">
                  </div>
                  <div
                      style="font-style: normal;font-weight: 400;font-size: 16px;line-height: 24px;text-align: center;letter-spacing: 0.15px;">
                    email로 연락하기
                  </div>
                </a>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

    <ul class="btns">
      <li @click="activate(1)" :class="{active: activateElement === 1}"><a href="#">
        <img src="/src/assets/images/paperplane.png" alt=""></a></li>
      <li @click="activate(2)" :class="{active: activateElement === 2}"><a href="#">
        <img src="/src/assets/images/paperplane.png" alt=""></a></li>
      <li @click="activate(3)" :class="{active: activateElement === 3}"><a href="#">
        <img src="/src/assets/images/paperplane.png" alt=""></a></li>
      <li @click="activate(4)" :class="{active: activateElement === 4}"><a href="#">
        <img src="/src/assets/images/paperplane.png" alt=""></a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import {contentfulPreviewClientApi} from '@/plugins/contentful'
import type {EntryCollection} from "contentful";

export default {
  name: 'introduce-page',
  async mounted() {
    const entries = await contentfulPreviewClientApi.getEntries({
      order: '-sys.createdAt',
      select: 'fields',
      content_type: 'projects',
      limit: 3
    })
    this.projects = entries;

  },
  data: () => {
    return {
      activateElement: 1,
      loading: false,
      projects: [],
    }
  },
  methods: {
    handleWheelEvent(e: WheelEvent) {
      if (e.deltaY >= 100 && this.activateElement < 4 && this.loading === false) {
        this.activateElement = this.activateElement + 1;
        this.loading = true
        setTimeout(() => {
          this.loading = false
        }, 1500);
      }

      if (e.deltaY <= -100 && this.activateElement > 1 && this.loading === false) {
        this.activateElement = this.activateElement - 1;
        this.loading = true
        setTimeout(() => {
          this.loading = false
        }, 1500);
      }
    },
    log(param: any) {
      console.log(param)
    },
    activate(value: number) {
      this.activateElement = value;
    }
  }
};
</script>


<style scoped lang="scss">


#slider {
  width: 100%;
  height: calc(100vh - 72px);
  position: relative;
  overflow: hidden;
  font-family: 'Noto Sans KR';

  .logo {
    background: url("../assets/images/logo.png") rgba(0, 0, 0, .2);
    width: 320px;
    height: 320px;
    background-size: cover;
  }

  .github-icon {
    background: url("../assets/images/github.png") rgba(0, 0, 0, .2);
    width: 70px;
    height: 70px;
    background-size: cover;
    margin-right: 40px;
    cursor: pointer;
  }

  .email-icon {
    background: url("../assets/images/email.png") rgba(0, 0, 0, .2);
    width: 70px;
    height: 70px;
    background-size: cover;
    margin-right: 40px;
    cursor: pointer;
  }

  .panel {
    width: 100%;
    height: 400%;
    transition: margin-top 1.5s;

    .slide {
      width: 100%;
      height: 25%;
      //float: top;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;


      @for $i from 1 through 3 {
        &:nth-of-type(#{$i}) {
          background: url("../assets/images/introduce#{$i}.png") rgba(0, 0, 0, .2);
          background-blend-mode: overlay;
          background-position-x: -100px;

        }
      }

      &:nth-of-type(2) {
        background-position-x: -275px;
      }

      &:nth-of-type(4) {
        background-color: black;
      }

      .text-container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;;

        .title {
          font-size: 48px;
        }
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

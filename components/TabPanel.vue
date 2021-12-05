<template>
  <div class="g-tabs">
    <div
      class="g-tabs__panel"
      :style="{ backgroundImage: 'url(' + currentTab.background + ')' }"
    >
      <div class="g-tabs__main">
        <p class="g-tabs__title text-h4">{{ currentTab.name }}</p>
        <p class="g-tabs__text text-size-16">
          {{ currentTab.smallDescription }}.
        </p>
        <main-button
          size="xl"
          color="primary"
          tag="a"
          label="Подробнее"
          :to="currentTab.link"
        />
      </div>
    </div>

    <div class="g-tabs__tabs">
      <div
        v-for="tab in data"
        @click="changeTab(tab)"
        class="g-tab"
        :class="{ 'g-tab_active': currentTab.name === tab.name }"
      >
        <span class="g-tab__line">
          <span class="g-tab__progress"></span>
        </span>
        <div class="g-tab__image-wrapper">
          <img :src="tab.previewBackground" alt="" class="g-tab__image" />
        </div>
        <span class="g-tab__name text-weight-600">{{ tab.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import MainButton from '~/components/buttons/MainButton'
export default {
  name: 'TabPanel',
  components: { MainButton },
  data: () => {
    return {
      currentTab: {
        name: '',
        smallDescription: '',
        background: '',
        previewBackground: '',
      },
      time: 5000,
      tabInterval: null,
      tabCount: 0,
    }
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    this.currentTab = this.data[0]
    this.cycleAnimation()
  },
  methods: {
    changeTab(tabName) {
      if (this.tabCount !== this.data.indexOf(tabName)) {
        this.tabCount = this.data.indexOf(tabName)
        this.currentTab = tabName
        clearInterval(this.tabInterval)
        this.tabInterval = null
        this.cycleAnimation()
      }
    },
    cycleAnimation() {
      this.tabInterval = setInterval(() => {
        if (this.tabCount >= 3) {
          this.tabCount = 0
        } else {
          this.tabCount++
        }
        this.currentTab = this.data[this.tabCount]
      }, this.time)
    },
  },
}
</script>

<style lang="sass">
@import '../theme/vars'
@import '../theme/mix'
@keyframes changeTab
  0%
    width: 0
  10%
    width: 10%
  20%
    width: 20%
  30%
    width: 30%
  40%
    width: 40%
  50%
    width: 50%
  60%
    width: 60%
  70%
    width: 70%
  80%
    width: 80%
  90%
    width: 90%
  100%
    width: 100%
.g-tab
  padding: 12px 20px
  position: relative
  display: flex
  align-items: center
  cursor: pointer
  +lg
    width: 50%
    &:nth-child(n+1)
      border-right: 1px solid white(0.1)
    &:nth-child(2)
      border-right: none
    &:nth-child(4)
      border-right: none
    &:nth-child(3)
      border-bottom: none !important
  +md
    flex-direction: column
    align-items: flex-start
    padding: 16px 8px
  &_active
    background: dark-blue(0.15)
    .g-tab__line
      background: dark-blue(0.5)
    .g-tab__progress
      background: rgba(255, 153, 0, 1)
      animation: changeTab 5s linear
      animation-fill-mode: forwards
  &:not(:last-child)
    border-bottom: 1px solid white(0.1)
  &__line
    position: absolute
    bottom: 0
    left: 0
    width: 100%
    height: 4px
  &__progress
    position: absolute
    bottom: 0
    left: 0
    width: 0
    height: 4px
    transition: all 0.1s
  &__image-wrapper
    width: 74px
    height: 100%
    +md
      background-size: cover !important
      background: url("/images/banner-1-1.svg") no-repeat center center
      height: 100px
      width: 100%
      border-radius: 12px
  &__image
    width: 100%
    height: 100%
    +md
      width: 100%
      max-height: 100px
      display: none
  &__name
    margin-left: 23px
    text-transform: uppercase
    color: white(1)
    font-size: 16px
    line-height: 20px
    +md
      margin-left: 0
      margin-top: 8px
      font-size: 12px
      line-height: 16px
      text-transform: capitalize
.g-tabs
  display: flex
  +lg
    flex-direction: column
    border-radius: 12px
    overflow: hidden
  &__text
    color: white(0.8)
    position: relative
    z-index: 10
    max-width: 70%
    margin-bottom: 40px
    +md
      font-size: 12px
      line-height: 18px
      margin-bottom: 16px
      max-width: 90%
  &__title
    position: relative
    z-index: 10
    margin-bottom: 16px
    +md
      font-size: 20px
      line-height: 28px
      margin-bottom: 12px
      max-width: 95%
  &__main
    margin-top: auto
  &__panel
    width: 100%
    display: flex
    padding: 86px 48px
    position: relative
    background-size: cover
    background-repeat: no-repeat
    background-position: center center
    border-radius: 12px 0px 0px 12px
    +md
      padding: 136px 16px 16px 16px
      min-height: 358px
    &::after
      content: ''
      position: absolute
      height: 100%
      width: 50%
      background: url("/images/panel-gradient.svg") no-repeat center center
      background-size: cover
      left: 0
      top: 0
      border-radius: 12px
  &__tabs
    border-radius: 0 12px 12px 0
    background: #282439
    width: 25%
    flex-shrink: 0
    overflow: hidden
    +xl
      width: 30%
    +lg
      width: 100%
      display: flex
      flex-wrap: wrap
      border-radius: 0
</style>

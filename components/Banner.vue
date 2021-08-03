<template>
  <div :style="{ 'background-image': 'url(' + image + ')' }" class="banner">
    <img :src="image" alt="" class="banner__bg">
    <div class="banner__block">
      <p class="banner__title">{{ title }}</p>
      <p class="banner__text">{{ text }}</p>
      <main-button class="banner__button" size="xl" color="primary" tag="button" :label="buttonLabel" />
    </div>
    <div class="banner__gradient">
      <img src="/images/banner-gradient.svg" alt="">
    </div>
  </div>
</template>

<script>
import MainButton from '~/components/buttons/MainButton'
export default {
  name: 'Banner',
  components: {
    MainButton
  },
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    buttonLabel: {
      type: String,
      default: () => 'Подробнее'
    }
  }
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.banner
  padding: 40px 48px
  border-radius: 12px
  min-height: 334px
  position: relative
  display: flex
  background-repeat: no-repeat
  background-size: cover
  +lg
    min-height: auto
    overflow: hidden
  +md
    padding: 16px
  &__gradient
    display: none
    position: absolute
    right: 0
    top: 0
    width: 248px
    height: 100%
    img
      width: 100%
    +lg
      display: block
      width: 70%
  &__button
    margin-top: auto
    max-width: 100%
  &__bg
    position: absolute
    left: 0
    width: 100%
    height: 100%
    top: 0
    border-radius: 12px
  &__block
    width: 100%
    z-index: 10
    position: relative
    height: 100%
    min-height: 254px
    display: flex
    flex-direction: column
    justify-content: space-between
    +lg
      min-height: auto
  &__title
    font-weight: 600
    font-size: 32px
    line-height: 38px
    color: white(1)
    margin-bottom: 16px
    max-width: 50%
    +xl
      max-width: 60%
    +lg
      font-size: 24px
      line-height: 28px
      max-width: 70%
    +md
      font-size: 12px
      line-height: 16px
      margin-bottom: 12px
      max-width: 45%
    +sm
      max-width: 60%
    +media(430)
      max-width: 71%
  &__text
    padding-bottom: 28px
    margin-top: auto
    margin-bottom: auto
    font-weight: normal
    font-size: 16px
    line-height: 24px
    color: white(0.7)
    max-width: 50%
    +md
      font-size: 12px
      line-height: 18px
      padding-bottom: 16px
      max-width: 45%
    +xl
      max-width: 60%
    +lg
      max-width: 50%
    +sm
      max-width: 60%
    +media(430)
      max-width: 71%
</style>

<template>
  <div class="g-avatar">
    <div class="g-avatar__image" :class="'g-avatar__image_' + size">
      <img src="" alt="">
    </div>
    <div class="g-avatar__block">
      <span class="text-white text-normal text-weight-600">{{ name }}</span>
      <span v-if="caption !== null" class="caption text-color-gray">{{ caption }}</span>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    image: {
      type: String,
      default: () => ''
    },
    name: {
      type: String,
      default: () => 'Some user name'
    },
    caption: {
      type: String,
      default: () => null
    },
    size: {
      type: String,
      default: () => ''
    }
  }
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.g-avatar
  display: flex
  align-items: center
  flex-shrink: 0
  &__block
    display: flex
    flex-direction: column
    .caption
      margin-top: 2px
      text-transform: uppercase
      font-size: 12px
      line-height: 18px
  &__image
    width: 43px
    height: 43px
    border: 3px solid dark-blue(0.15)
    margin-right: 13px
    border-radius: 50%
    flex-shrink: 0
    &_xl
      width: 60px
      height: 60px
      border: 5px solid dark-blue(0.15)
    &__xxl
      width: 70px
      height: 70px
      border: 10px solid dark-blue(0.15)
    img
      width: 100%
      height: 100%
      border-radius: 50%
</style>

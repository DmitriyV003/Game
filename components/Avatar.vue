<template>
  <div class="g-avatar">
    <div class="g-avatar__image" :class="'g-avatar__image_' + size">
      <img :src="image" v-if="image !== null" alt="" />
      <user-icon v-else class="g-avatar__icon" />
    </div>
    <div
      v-if="nickname !== null || caption !== null"
      class="g-avatar__block"
    >
      <span
        v-if="nickname !== null"
        class="text-white text-normal text-weight-600"
        >{{ nickname }}</span
      >
      <span
        v-if="caption !== null"
        class="caption text-color-gray"
      >{{ caption }}</span>
    </div>
  </div>
</template>

<script>
import icons from '~/mixins/icons'

export default {
  name: 'Avatar',
  mixins: [icons],
  props: {
    image: {
      type: String,
      default: () => null,
    },
    nickname: {
      type: String,
      default: () => null,
    },
    caption: {
      type: String,
      default: () => null,
    },
    size: {
      type: String,
      default: () => '',
    },
  },
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.g-avatar
    display: flex
    align-items: center
    flex-shrink: 0
    &__icon
        color: $white
        font-size: 25px

    &__block
        display: flex
        flex-direction: column
        margin-left: 13px

        .caption
            margin-top: 2px
            text-transform: uppercase
            font-size: 12px
            line-height: 18px

    &__image
        width: 43px
        height: 43px
        border: 3px solid dark-blue(0.15)
        border-radius: 50%
        flex-shrink: 0
        display: flex
        align-items: center
        justify-content: center

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

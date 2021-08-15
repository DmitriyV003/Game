<template>
  <div class="g-seller-avatar">
    <img src="" alt="" class="g-seller-avatar__image" />
    <div class="g-seller-avatar__text">
      <p class="g-seller-avatar__name">{{ nickname }}</p>
      <p class="g-seller-avatar__caption">{{ name }} {{ surname }}</p>
      <p class="g-seller-avatar__caption">92 дня с Gameincome</p>

      <div class="g-seller-avatar__reputation">
        <div class="g-seller-avatar__likes">
          <div class="icon">
            <like-icon />
          </div>
          <span class="count">{{ likes }}</span>
        </div>
        <div class="g-seller-avatar__likes">
          <div class="icon">
            <dislike-icon />
          </div>
          <span class="count">{{ dislikes }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import icons from '~/mixins/icons'

export default {
  name: 'g-seller-info',
  mixins: [icons],
  props: {
    name: {
      type: String,
      default: () => 'name',
    },
    surname: {
      type: String,
      default: () => 'surname',
    },
    nickname: {
      type: String,
      default: () => 'nickname',
    },
    likes: {
      type: Number,
      default: () => 0,
    },
    dislikes: {
      type: Number,
      default: () => 0,
    },
  },
}
</script>
<style lang="sass" scoped>
@import '../theme/vars'
@import '../theme/mix'
.g-seller-avatar
    display: flex
    align-items: flex-start
    &__text
        margin-left: 15px
    &__likes
        display: flex
        align-items: center
        color: $white
        &:not(:last-child)
            margin-right: 12px
        .count
            font-size: 12px
            line-height: 18px
            color: $gray
        .icon
            width: 24px
            height: 24px
            border-radius: 50%
            display: flex
            align-items: center
            justify-content: center
            border: 1px solid #643EFF
            font-size: 12px
            margin-right: 4px
    &__reputation
        margin-top: 10px
        display: flex
        align-items: center
    &__caption
        margin-bottom: 2px
        font-size: 12px
        line-height: 18px
        color: $gray
    &__name
        font-weight: 600
        font-size: 16px
        line-height: 24px
        color: $white
        margin-bottom: 2px
    &__image
        flex-shrink: 0
        width: 60px
        height: 60px
        border-radius: 50%
        border: 5px solid rgba(100, 62, 255, 0.3)
</style>

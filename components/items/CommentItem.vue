<template>
  <div class="g-seller-comment">
    <div class="g-seller-comment__top">
      <avatar :nickname="nickname" :image="avatar" />
      <span class="g-seller-comment__date">{{
        new Date(date).toDateString()
      }}</span>
    </div>
    <p class="g-seller-comment__text">{{ text }}</p>
  </div>
</template>

<script>
import Avatar from '~/components/Avatar'

export default {
  name: 'GSellerComment',
  components: { Avatar },
  props: {
    nickname: {
      type: String,
      default: () => 'nickname',
    },
    text: {
      type: String,
      default: () => 'text',
    },
    date: {
      type: String,
      default: () => new Date().toDateString(),
    },
    avatar: {
      type: String,
      default: () => 'avatar',
    },
  },
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.g-seller-comment
    padding: 20px
    background: #282439
    border-radius: 12px
    margin-bottom: 20px
    +md
        margin-bottom: 8px

    &__date
        font-size: 14px
        letter-spacing: -0.4px
        line-height: 20px
        color: $gray

    &__text
        font-size: 16px
        color: white(0.8)
        line-height: 24px
        margin-top: 20px

    &__top
        padding-bottom: 12px
        display: flex
        align-items: center
        justify-content: space-between
        border-bottom: 1px solid rgba(154, 147, 170, 0.2)
</style>

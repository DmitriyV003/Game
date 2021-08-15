<template>
  <div>
    <div class="g-another-comment-card">
      <img :src="image" alt="" class="g-another-comment-card__image" />

      <div class="g-another-comment-card__block">
        <h3 class="g-another-comment-card__title">{{ itemName }}</h3>

        <div class="g-another-comment-card__text">{{ text }}</div>

        <div class="g-another-comment-card__bottom">
          <span class="g-another-comment-card__name">{{ userNickname }}</span>

          <div class="g-another-comment-card__stats">
            <div class="g-another-comment-card__stat">
              <eye-icon class="icon" />
              <span class="text">8</span>
            </div>
            <div class="g-another-comment-card__stat">
              <message-icon class="icon" />
              <span class="text">24</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import icons from '~/mixins/icons'

export default {
  name: 'GAnotherCommentCard',
  mixins: [icons],
  props: {
    id: {
      type: String,
      required: true,
    },
    itemName: {
      type: String,
      required: true,
    },
    userNickname: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.g-another-comment-card
    background: #282439
    border-radius: 12px
    display: flex
    flex-direction: column
    width: 270px
    margin-right: 14px
    &__text
        font-size: 14px
        line-height: 20px
        color: $gray
        letter-spacing: -0.4px
        margin-bottom: 4px
    &__stats
        display: flex
        align-items: center
    &__stat
        display: flex
        align-items: center
        &:not(:last-child)
            margin-right: 16px
        .text
            color: $white
            letter-spacing: -0.4px
            font-size: 14px
            line-height: 20px
        .icon
            color: #643EFF
            margin-right: 10px
    &__name
        font-weight: 600
        font-size: 16px
        color: $white
        line-height: 24px
        padding-right: 24px
        overflow: hidden
        text-overflow: ellipsis
    &__bottom
        display: flex
        align-items: center
        justify-content: center
        width: 100%
    &__title
        margin-bottom: 8px
        font-weight: 600
        font-size: 16px
        line-height: 20px
        color: $white
    &__image
        border-radius: 8px 8px 0 0
        width: 100%
    &__block
        padding: 12px 16px
</style>

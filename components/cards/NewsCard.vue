<template>
  <div class="g-news">
    <img :src="image" alt="" class="g-news__image" />

    <div class="g-news__block">
      <div class="g-news__top">
        <p class="g-news__title">{{ name }}</p>
        <span class="g-news__date">{{
          new Date(createdAt).toDateString()
        }}</span>
      </div>

      <p class="g-news__text">{{ desc }}</p>

      <div class="g-news__bottom">
        <show-all
          :to="'/news/' + id"
          class="g-news__read"
          label="Читать новость"
        />
        <span class="g-news__date g-news__date_mobile">{{
          new Date(createdAt).toDateString()
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import ShowAll from '~/components/buttons/MainLink'
export default {
  name: 'GNewsCard',
  components: { ShowAll },
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    createdAt: {
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
.g-news
  display: flex
  background: #282439
  border-radius: 12px
  +lg
    flex-direction: column
    width: calc(50% - 10px)
    margin-bottom: 16px !important
  +md
    width: 100%
  &:not(:last-child)
    margin-bottom: 24px
    +lg
      margin-bottom: 0
  &__bottom
    display: flex
    justify-content: space-between
    align-items: center
    margin-top: auto
  &__text
    font-size: 16px
    line-height: 24px
    color: white(0.8)
    margin-bottom: 16px
    +lg
      font-size: 14px
      letter-spacing: -0.4px
      line-height: 20px
  &__date
    font-size: 14px
    color: $gray
    letter-spacing: -0.4px
    line-height: 20px
    flex-shrink: 0
    +lg
      display: none
    &_mobile
      display: none
      +lg
        display: inline-block
  &__title
    text-transform: uppercase
    color: $white
    font-weight: 600
    font-size: 16px
    line-height: 20px
  &__top
    display: flex
    align-items: flex-start
    justify-content: space-between
    margin-bottom: 20px
    +lg
      margin-bottom: 12px
  &__block
    padding: 20px 24px 18px 20px
    display: flex
    flex-direction: column
    width: 100%
    +lg
      padding: 16px
  &__image
    border-radius: 12px 0 0 12px
    flex-shrink: 0
    +lg
      border-radius: 12px 12px 0 0
</style>

<template>
  <div>
    <div class="review-card">
      <div
        class="review-card__game-info"
        :style="{
          'background-image':
            windowSize <= 992 ? `url(${itemBackground})` : '',
        }"
      >
        <img src="/images/review-bg.svg" alt="" class="review-card__bg" />
        <div class="review-card__box-image">
          <img
            :src="itemBackground"
            alt=""
            class="review-card__image"
          />
          <rating
            v-if="itemRate"
            class="review-card__rating"
            :value="Number(itemRate)"
          />
        </div>

        <div class="review-card__block">
          <div
            class="
              review-card__title
              text-size-16
              text-color-white
              text-weight-600
              text-center
              text-uppercase
            "
          >
            {{ itemName }}
          </div>
          <div
            class="review-card__text text-center text-size-14 text-color-gray"
          >
            {{ itemDeveloper }}
          </div>
        </div>
      </div>

      <div class="review-card__body">
        <div class="review-card__top">
          <avatar
            class="review-card__avatar"
            size="xl"
            :nickname="adminName"
            :image="adminImage"
          />

          <div class="review-card__metrics review-card__metrics_desktop">
            <span class="review-card__date text-size-14 text-color-gray"
              >22 января</span
            >
            <chip
              class="review-card__icon"
              icon-image="/images/comment-icon.svg"
              :label="reviewCommentsCount"
            />
            <chip
              class="review-card__icon"
              icon-image="/images/eye.svg"
              :label="reviewViewsCount"
            />
          </div>
        </div>

        <div class="review-card__main">
          <p class="review-card__review text-size-16">
            {{ description.slice(0, 250) }}
          </p>
        </div>

        <div class="review-card__bottom">
          <nuxt-link :to="'/reviews/' + id" tag="div" class="review-card__link">
            <span class="label">Читать обзор</span>
            <chevron-right-icon />
          </nuxt-link>
        </div>

        <div class="review-card__bottom-mobile">
          <div class="review-card__metrics">
            <span class="review-card__date text-size-14 text-color-gray"
              >22 января</span
            >
            <chip
              class="review-card__icon"
              icon-image="/images/comment-icon.svg"
              :label="reviewCommentsCount"
            />
            <chip
              class="review-card__icon"
              icon-image="/images/eye.svg"
              :label="reviewViewsCount"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Rating from '~/components/cards/Rating'
import Avatar from '~/components/Avatar'
import Chip from '~/components/Chip'
import icons from '~/mixins/icons'
import { mapState } from 'vuex'
export default {
  name: 'ReviewCard',
  components: { Chip, Avatar, Rating },
  mixins: [icons],
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    itemName: {
      type: String,
      required: true
    },
    itemRate: {
      type: String,
      default: () => 0
    },
    itemBackground: {
      type: String,
      required: true
    },
    itemDeveloper: {
      type: String,
      required: true
    },
    reviewCommentsCount: {
      type: Number,
      default: () => 0
    },
    reviewViewsCount: {
      type: Number,
      default: () => 0
    },
    adminName: {
      type: String,
      required: true
    },
    adminImage: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState({
      windowSize: (state) => state.common.windowSize,
    }),
  },
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.review-card
  display: flex
  background: #282439
  border-radius: 12px
  overflow: hidden
  +lg
    flex-direction: column
    width: 270px
  &__bg
    display: none
    +lg
      display: block
      position: absolute
      left: 0
      top: 0
      width: 100%
      height: 100%
  &__bottom-mobile
    display: none
    +lg
      display: flex
      align-items: center
      justify-content: space-between
      padding-top: 16px
      border-top: 1px solid rgba(154, 147, 170, 0.5)
      margin-top: 16px
  &__link
    display: flex
    align-items: center
    cursor: pointer
    color: dark-blue(1)
    font-weight: 500
    font-size: 14px
    line-height: 24px
    span
      font-size: inherit
      line-height: inherit
      font-weight: inherit
  &__review
    margin-bottom: 16px
    font-size: 15px
    color: white(0.8)
    +lg
      max-height: 90px
      overflow: hidden
      margin-bottom: 4px
      font-size: 12px
      line-height: 18px
  &__main
    margin-top: 24px
    +lg
      margin-top: 12px
  &__date
    margin-right: 20px
    +lg
      margin-right: auto
  &__metrics
    display: flex
    align-items: center
    +lg
      width: 100%
      justify-content: space-between
    &_desktop
      +lg
        display: none
  &__icon
    &:not(:last-child)
      margin-right: 17px
  &__top
    display: flex
    align-items: center
    justify-content: space-between
  &__body
    padding: 32px 44px
    width: 100%
    +lg
      padding: 16px
  &__text
    letter-spacing: -0.4px
    +lg
      position: relative
      z-index: 10
      text-align: left !important
  &__block
    +lg
      margin-top: auto
  &__title
    line-height: 20px
    margin-bottom: 8px
    +lg
      position: relative
      z-index: 10
      text-align: left !important
  &__image
    width: 100%
    +lg
      display: none
  &__box-image
    position: relative
    margin-bottom: 12px
    +lg
      position: initial
  &__rating
    position: absolute
    top: 20px
    left: 0
  &__game-info
    width: 33%
    flex-shrink: 0
    padding: 28px 78px 16px 78px
    background: dark-blue(0.15)
    position: relative
    display: flex
    flex-direction: column
    justify-content: space-between
    +xl
      display: flex
      justify-content: center
      flex-direction: column
    +lg
      width: 100%
      height: 168px
      padding: 16px
      background-size: cover
      background-position: center center
</style>

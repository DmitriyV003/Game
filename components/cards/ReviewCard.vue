<template>
  <div>
    <div class="review-card">
      <div
        class="review-card__game-info"
        :style="{
          'background-image':
            windowSize <= 992 ? 'url(/images/review-1.svg)' : '',
        }"
      >
        <img src="/images/review-bg.svg" alt="" class="review-card__bg" />
        <div class="review-card__box-image">
          <img src="/images/review-1.svg" alt="" class="review-card__image" />
          <rating class="review-card__rating" :value="5.2" />
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
            Hitman 3
          </div>
          <div
            class="review-card__text text-center text-size-14 text-color-gray"
          >
            O Interactive
          </div>
        </div>
      </div>

      <div class="review-card__body">
        <div class="review-card__top">
          <avatar class="review-card__avatar" size="xl" name="Blacktea" />

          <div class="review-card__metrics review-card__metrics_desktop">
            <span class="review-card__date text-size-14 text-color-gray"
              >22 января</span
            >
            <chip
              class="review-card__icon"
              icon-image="/images/comment-icon.svg"
              label="8"
            />
            <chip
              class="review-card__icon"
              icon-image="/images/eye.svg"
              label="82"
            />
          </div>
        </div>

        <div class="review-card__main">
          <p class="review-card__review text-size-16">
            После богатого на громкие премьеры конца года каждый январь
            развлекательная индустрия берёт выходной. Казалось бы, у народа
            послепраздничная хандра на грани с депрессией – самое время
            выпускать яркие (и тёплые!) новинки. Но нет, блокбастеров в это
            снежное время раз-два и обчёлся, зато всяких ремастеров да нишевых
            релизов хоть отбавляй. Как в таких условиях развлечь себя, как
            отвлечься от удушливой рутины, когда за окном серость и лёд? Да
            легко. Аккурат в разгар морозов у бравой команды IOI нашлось
            отличное средство от зимней апатии – симулятор наёмного убий...
          </p>
        </div>

        <div class="review-card__bottom">
          <nuxt-link to="/" tag="div" class="review-card__link">
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
              label="8"
            />
            <chip
              class="review-card__icon"
              icon-image="/images/eye.svg"
              label="82"
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

<template>
  <div>
    <div class="comment-card">
      <div class="comment-card__game">
        <div class="comment-card__img">
          <rating size="sm" class="comment-card__rating" :value="4.9" />
          <img src="/images/comment-1.svg" alt="" class="comment-card__picture">
        </div>
        <span class="comment-card__game-name">Star Wars Jedi: Fallen Order</span>
      </div>

      <div class="comment-card__content">
        <div class="comment-card__header">
          <avatar />
          <span class="comment-card__date text-14 text-gray">12 января</span>
        </div>

        <p class="comment-card__text text-normal">Всем любителям последних джедаев и боёв на световых мечах посвящается. Вообщем-то получилось не так плохо, как может показаться на первый взгля...</p>

        <nuxt-link tag="button" to="/" class="button-reboot comment-card__link text-weight-500">
          <span>Смотреть все</span>
          <chevron-right-icon />
        </nuxt-link>

        <div class="comment-card__footer">
          <span class="text-14 text-gray">12 января</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Rating from '~/components/cards/Rating'
import Avatar from '~/components/Avatar'
import icons from '~/mixins/icons'
export default {
  components: { Avatar, Rating },
  mixins: [icons]
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.comment-card
  display: flex
  background: rgba(40, 36, 57, 1)
  border-radius: 12px
  +xl
    flex-direction: column
    align-items: center
    width: 270px
  &__date
    +xl
      display: none
  &__footer
    display: none
    +xl
      display: block
      padding-top: 16px
      border-top: 1px solid rgba(154, 147, 170, 0.5)
    span
      color: $gray
  &__text
    color: white(1)
    font-size: 15px
    +xl
      font-size: 12px
      line-height: 18px
      color: white(0.8)
  &__link
    display: flex
    align-items: center
    font-size: 14px
    line-height: 24px
    color: dark-blue(1)
    margin-top: 35px
    +xl
      margin: 4px 0 16px
  &__header
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 20px
    +xl
      margin-bottom: 12px
  &__content
    padding: 24px 20px
    border-radius: 0 12px 12px 0
    display: flex
    flex-direction: column
    justify-content: space-between
    +xl
      padding: 16px
  &__rating
    position: absolute
    left: 0
    top: 20px
    +xl
      left: -20px
      top: 0
  &__game-name
    font-weight: normal
    letter-spacing: -0.4px
    font-size: 14px
    line-height: 20px
    color: white(1)
    text-align: center
    position: relative
    z-index: 5
    +xl
      text-align: left
      margin-top: auto
      font-weight: 600
      text-transform: uppercase
      font-size: 16px
      line-height: 20px
  &__img
    position: relative
    margin-bottom: 12px
  &__picture
    width: 100%
    +xl
      display: none
  &__game
    border-radius: 12px 0 0 12px
    background: dark-blue(0.15)
    padding: 30px 33px 39px 32px
    display: flex
    flex-direction: column
    align-items: center
    flex-shrink: 0
    max-width: 173px
    +xl
      padding: 16px 20px
      max-width: initial
      position: relative
      width: 100%
      min-height: 168px
      border-radius: 12px 12px 0 0
      background: url("/images/comment-1-1.svg")
      background-size: cover
      align-items: flex-start
      &::before
        content: ''
        width: 100%
        height: 100%
        border-radius: 12px 12px 0 0
        position: absolute
        top: 0
        left: 0
        background-size: cover
        background: url("/images/comment-gradient.svg")
</style>

<template>
  <div class="g-proposal-card_mobile">
    <div class="g-proposal-card">
      <div class="g-proposal-card__avatar">
        <div class="g-proposal-card__bg">
          <div class="g-proposal-card__image">
            <span>KG</span>
          </div>
        </div>

        <div class="g-proposal-card__text">
          <p class="text-color-white text-size-16 text-weight-600">Premiumseller</p>
          <p class="g-proposal-card__caption text-uppercase">EXCELLENT SELLER</p>
          <p class="g-proposal-card__caption">97% положительных отзывов</p>
        </div>
      </div>

      <div class="g-proposal-card__info">
        <g-price class="g-proposal-card__price" :show-current-price="false" />

        <span class="g-proposal-card__new">4385.15 ₽</span>

        <main-button class="g-proposal-card__btn" full-width size="xl" color="primary" label="в корзину" />
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from '~/components/Avatar'
import GPrice from "~/components/GPrice";
import MainButton from "~/components/buttons/MainButton";
export default {
  name: 'GProposalCard',
  components: {MainButton, GPrice, Avatar}
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'  
.g-proposal-card
  padding: 20px
  background: rgba(100, 62, 255, 0.2)
  border-radius: 10px
  display: flex
  align-items: center
  justify-content: space-between
  cursor: pointer
  transition: all 0.1s
  &:hover
    background: rgba(100, 62, 255, 0.5)
  +lg
    display: block
    width: 270px
    padding: 16px
  &_mobile
    padding-right: 12px
  &__new
    margin-right: 55px
    font-weight: 600
    color: white(1)
    font-size: 24px
    line-height: 28px
    +lg
      order: -1
  &__info
    display: flex
    align-items: center
    +lg
      flex-direction: column
      align-items: flex-start
  &__price
    margin-right: 48px
    +lg
      margin: 8px 0 24px
  &__btn
    +lg
      width: 100%
  &__text
    p
      &:not(:last-child)
        margin-bottom: 4px
  &__caption
    font-size: 12px
    line-height: 18px
    color: $gray
    +lg
      line-height: 16px
  &__avatar
    display: flex
    align-items: center
    flex-shrink: 0
    +lg
      margin-bottom: 12px
  &__bg
    width: 70px
    height: 70px
    border-radius: 50%
    background: rgba(39, 126, 255, 0.2)
    display: flex
    align-items: center
    justify-content: center
    flex-shrink: 0
    margin-right: 20px
    +lg
      margin-right: 16px
  &__image
    width: 60px
    height: 60px
    border-radius: 50%
    display: flex
    align-items: center
    justify-content: center
    background: rgba(39, 126, 255)
    span
      font-size: 28px
      font-weight: 600
      line-height: 24px
      color: white(1)
</style>


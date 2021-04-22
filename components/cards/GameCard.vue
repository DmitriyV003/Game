<template>
  <div class="game-card">
    <img src="/images/card-1.svg" alt="" class="game-card__img">
    <p class="game-card__title">Rocket League</p>
    <p class="game-card__text">Psyonix, Panic Button Games</p>

    <rating class="game-card__rating" :value="4.9" />

    <div class="game-card__prices">
      <span class="game-card__sale">-15%</span>
      <div class="game-card__price-block">
        <span class="game-card__price game-card__price_old">2860 ₽</span>
        <span class="game-card__price game-card__price_new">2 585 ₽</span>
      </div>
    </div>
  </div>
</template>

<script>
import Rating from "~/components/cards/Rating";
export default {
  name: 'GameCard',
  components: { Rating }
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.game-card
  width: 282px !important
  display: flex
  flex-direction: column
  position: relative
  &__price-block
    display: flex
    align-items: center
    padding: 6px 6px 4px 21px
    background: rgba(0, 0, 0, 1)
  &__price
    &_old
      color: $gray
      font-size: 13px
      line-height: 18px
      margin-right: 8px
      text-decoration-line: line-through
    &_new
      color: white(1)
      font-weight: 500
      font-size: 16px
      line-height: 20px
  &__sale
    padding: 4px 10px
    background: orange(1)
    font-weight: 600
    font-size: 16px
    line-height: 20px
    position: relative
    &::after
      content: ''
      position: absolute /* Абсолютное позиционирование */
      right: 0
      transform: translateX(100%)
      z-index: 5
      bottom: 0 /* Положение треугольника */
      border: 15px solid transparent /* Прозрачные границы */
      border-left: 10px solid orange(1)
  &__prices
    display: flex
    align-items: center
  &__rating
    position: absolute
    z-index: 10
    left: 0
    top: 20px
  &__text
    font-weight: normal
    letter-spacing: -0.4px
    font-size: 14px
    line-height: 20px
    color: $gray
    margin-bottom: 8px
  &__title
    font-weight: 600
    font-size: 16px
    line-height: 20px
    color: white(1)
    margin-bottom: 8px
  &__img
    width: 100%
    border-radius: 12px
    margin-bottom: 12px
</style>

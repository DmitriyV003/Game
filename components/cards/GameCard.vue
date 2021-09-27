<template>
  <nuxt-link :to="'/product/' + id + '?type=' + type" class="game-card">
    <img :src="image" alt="" class="game-card__img" />
    <p class="game-card__title" :class="{ 'game-card__title_sm': adaptiveSm }">
      {{ title }}
    </p>
    <p class="game-card__text" :class="{ 'game-card__text_sm': adaptiveSm }">
      {{ developer }}
    </p>

    <rating
      class="game-card__rating"
      :value="rating"
      v-if="rating !== null && rating !== 0"
    />

    <div class="game-card__prices">
      <span
        class="game-card__sale"
        :class="{ 'game-card__sale_sm': adaptiveSm }"
        v-if="sale !== null"
        >-{{ sale }}%</span
      >
      <div
        class="game-card__price-block"
        :class="{
          'game-card__price-block_sm': adaptiveSm,
          'game-card__price-block_pl': sale !== null,
        }"
      >
        <span
          class="game-card__price game-card__price_old"
          :class="{ 'game-card__price_old_sm': adaptiveSm }"
          v-if="oldPrice !== null && newPrice !== null"
          >{{ formatNumber(oldPrice, 2) }} ₽</span
        >
        <span
          class="game-card__price game-card__price_new"
          :class="{ 'game-card__price_new_sm': adaptiveSm }"
          >{{ newPrice === null ? formatNumber(oldPrice, 2) : formatNumber(newPrice, 2) }} ₽</span
        >
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import Rating       from '~/components/cards/Rating'
import formatNumber from '~/utils/formatNumber'
export default {
  name: 'GameCard',
  components: { Rating },
  data () {
    return {
      formatNumber
    }
  },
  props: {
    adaptiveSm: {
      type: Boolean,
      default: () => false,
    },
    sale: {
      type: Number,
      default: () => null,
    },
    rating: {
      type: Number,
      default: () => null,
    },
    oldPrice: {
      type: Number,
      default: () => null,
    },
    id: {
      type: String,
      required: true,
    },
    newPrice: {
      type: Number,
      default: () => null,
    },
    title: {
      type: String,
      default: () => '',
    },
    developer: {
      type: String,
      default: () => '',
    },
    image: {
      type: String,
      default: () => '',
    },
    type: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.game-card
  display: flex
  flex-direction: column
  position: relative
  cursor: pointer
  &__price-block
    display: flex
    align-items: center
    padding: 6px 6px 4px 6px
    background: rgba(0, 0, 0, 1)
    &_pl
      padding-left: 21px
      +sm
        padding-left: 15px
    &_sm
      +sm
        padding: 7px 6px 5px 15px
  &__price
    &_old
      color: $gray
      font-size: 13px
      line-height: 18px
      margin-right: 8px
      text-decoration-line: line-through
      &_sm
        +sm
          font-size: 12px
          line-height: 14px
    &_new
      color: white(1)
      font-weight: 500
      font-size: 16px
      line-height: 20px
      &_sm
        +sm
          font-size: 13px
          line-height: 16px
  &__sale
    padding: 4px 10px
    background: orange(1)
    font-weight: 600
    font-size: 16px
    line-height: 20px
    position: relative
    color: rgba(0, 0, 0, 1)
    &_sm
      +sm
        padding: 4px 6px
        font-size: 13px
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
    &_sm
      +sm
        font-size: 12px
        line-height: 18px
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

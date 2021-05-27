<template>
  <div class="g-price__prices" :class="{ 'g-price__prices_disabled': disabled }">
    <span class="g-price__sale" :class="{ 'g-price__sale_sm': adaptiveSm }">-15%</span>
    <div class="g-price__price-block" :class="{ 'g-price__price-block_sm': adaptiveSm }">
      <span class="g-price__price g-price__price_old" :class="{ 'g-price__price_old_sm': adaptiveSm }">2860</span>
      <span v-if="showCurrentPrice" class="g-price__price g-price__price_new" :class="{ 'g-price__price_new_sm': adaptiveSm }">2 585</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GPrice',
  props: {
    adaptiveSm: {
      type: Boolean,
      default: () => false
    },
    disabled: {
      type: Boolean,
      default: () => false
    },
    showCurrentPrice: {
      type: Boolean,
      default: () => true
    }
  }
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.g-price
  &__price-block
    display: flex
    align-items: center
    padding: 6px 6px 4px 21px
    background: rgba(0, 0, 0, 1)
    &_sm
      +sm
        padding: 7px 6px 5px 15px
  &__prices
    display: flex
    align-items: center
    &_disabled
      opacity: 0.75
  &__sale
    padding: 4px 10px
    background: orange(1)
    font-weight: 600
    font-size: 16px
    line-height: 20px
    position: relative
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
</style>

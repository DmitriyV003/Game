<template>
  <div 
    class="g-price__prices" 
    :class="{ 'g-price__prices_disabled': disabled }"
    v-if="oldPrice !== 0 && newPrice !== 0"
  >
    <span 
      class="g-price__sale" 
      :class="{ 'g-price__sale_sm': adaptiveSm }"
      v-if="sale !== 0"
    >{{ sale }}</span>
    <div 
      class="g-price__price-block" 
      :class="{ 'g-price__price-block_sm': adaptiveSm, 'g-price__price-block_pl': sale === 0 }"
    >
      <span 
        class="g-price__price g-price__price_old" 
        :class="{ 'g-price__price_old_sm': adaptiveSm }"
        v-if="oldPrice !== 0 && newPrice !== 0"
      >{{ oldPrice }}</span>
      <span 
        v-if="showCurrentPrice && newPrice !== 0" 
        class="g-price__price g-price__price_new" 
        :class="{ 'g-price__price_new_sm': adaptiveSm }"
      >{{ newPrice }}</span>
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
    },
    oldPrice: {
      type: Number,
      default: () => 0
    },
    newPrice: {
      type: Number,
      default: () => 0
    },
    sale: {
      type: Number,
      default: () => 0
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
    &_pl
      padding-left: 6px
      +sm
        padding-left: 6px
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
      margin-left: 8px
      &_sm
        +sm
          font-size: 13px
          line-height: 16px
</style>

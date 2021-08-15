<template>
  <div>
    <div class="g-case">
      <img class="g-case__img" src="/images/case-1.png" alt="" />
      <p class="g-case__name">case-1</p>
      <p class="g-case__caption">★ 31 предмет</p>
      <g-price class="g-case__sale" :show-current-price="false" />
      <p class="g-case__price">9385.50 ₽</p>
    </div>
  </div>
</template>

<script>
import GPrice from '~/components/GPrice'
export default {
  name: 'GCase',
  components: { GPrice },
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.g-case
  background: rgba(136, 117, 255, 0.15)
  padding: 16px
  border-radius: 12px
  display: flex
  flex-direction: column
  &__price
    font-weight: 600
    color: $white
    font-size: 20px
    line-height: 28px
  &__sale
    margin-bottom: 8px
  &__img
    width: 100%
    margin: auto auto 24px
  &__caption
    margin-bottom: 8px
    font-size: 14px
    color: white(0.6)
    letter-spacing: -0.4px
    line-height: 20px
  &__name
    margin-bottom: 4px
    color: $white
    font-weight: 600
    font-size: 16px
    line-height: 20px
    text-transform: uppercase
</style>

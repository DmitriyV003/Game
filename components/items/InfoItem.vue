<template>
  <div class="g-info-item">
    <img class="g-info-item__img" src="/images/icons/key.svg" alt="">
    <div class="g-info-item__block">
      <span style="color: rgba(255, 92, 0, 1)" class="g-info-item__num">5 000 +</span>
      <span class="g-info-item__caption">Ключей для игр</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GInfoItem'
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.g-info-item
  display: flex
  align-items: flex-start
  +md
    flex-direction: column
  &:not(:last-child)
    margin-right: 40px
    +md
      margin-right: 8px
  &__img
    flex-shrink: 0
    margin-right: 12px
  &__block
    display: flex
    flex-direction: column
  &__caption
    font-size: 14px
    letter-spacing: -0.4px
    color: $gray
    line-height: 20px
    +md
      color: $white
      font-weight: 600
      font-size: 12px
      line-height: 16px
  &__num
    font-size: 24px
    font-weight: bold
    line-height: 32px
    +md
      font-size: 16px
      line-height: 24px
</style>

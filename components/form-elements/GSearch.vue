<template>
  <div class="g-search">
    <input placeholder="Коллекция" type="text" class="input-reboot g-search__input">
    <button class="button-reboot g-search__btn">
      <img src="/images/icons/search.svg" alt="">
    </button>
  </div>
</template>

<script>
export default {
  name: 'GSearch'
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'  
.g-search
  width: 100%
  position: relative
  &__btn
    position: absolute
    top: 15px
    right: 15px
    z-index: 10
  &__input
    border: 1px solid #433F54
    padding: 15px 42px 15px 12px
    color: $white
    background: #39354A
    border-radius: 6px
    font-size: 14px
    line-height: 20px
    letter-spacing: -0.4px
    width: 100%
    +lg
      font-size: 16px
      line-height: 24px
      padding: 12px 42px 12px 12px
    &::placeholder
      font-size: 14px
      line-height: 20px
      letter-spacing: -0.4px
      color: $gray
      +lg
        font-size: 16px
        line-height: 24px
</style>

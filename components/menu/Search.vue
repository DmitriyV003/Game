<template>
  <div class="search">
    <input placeholder="Поиск" class="input-reboot search__input" type="text">
    <img class="search__icon" src="/images/search.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style lang="sass">
  @import '../../theme/vars'
  .search
    position: relative
    height: 36px
    &__input
      width: 100%
      border: 1px solid $gray
      border-radius: 100px
      padding: 7px 45px 8px 20px
      color: $white
      &::placeholder
        color: $gray
    &__icon
      position: absolute
      right: 16px
      top: 6px
</style>

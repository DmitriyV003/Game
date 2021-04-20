<template>
  <div class="user">
    <div class="user__main">
      <div class="user__logo">
      </div>

      <div class="user__body">
        <span class="user__name">Konstantin Vinogradov</span>
        <chevron-down-icon class="user__arrow" />
      </div>
    </div>
  </div>
</template>

<script>
import icons from '~/mixins/icons'

export default {
  name: 'Profile',
  mixins: [icons]
}
</script>

<style lang="sass">
  @import 'theme/_vars'
  .user
    &__body
      display: flex
      align-items: center
      padding-right: 9px
    &__arrow
      color: $white
      margin-left: 13px
      font-size: 14px
    &__main
      border-radius: 100px
      background: dark-blue(0.2)
      display: flex
      align-items: center
      height: 36px
      cursor: pointer
    &__logo
      width: 36px
      height: 36px
      border: 2px solid rgba(100, 62, 255, 0.9)
      border-radius: 50%
      flex-shrink: 0
      margin-right: 8px
    &__name
      font-weight: 500
      line-height: 16px
      font-size: 14px
      color: $white
      max-width: 145px
      white-space: nowrap
      overflow: hidden
      position: relative
      &::after
        content: ''
        background: linear-gradient(270deg, #352A60 0%, rgba(53, 42, 96, 0) 100%)
        position: absolute
        right: 0
        top: 0
        width: 8px
        height: 100%
</style>

<template>
  <div class="g-user-data">
    <div class="g-user-data__title">
      <h2>Здравствуйте, <br>Константин Виноградов!</h2>
      <settings-icon class="g-user-data__settings" />
    </div>

    <div class="g-user-data__block">
      <span class="g-user-data__caption">Отображаемое имя</span>
      <span class="g-user-data__value">Vino_Costa</span>
    </div>

    <div class="g-user-data__block">
      <span class="g-user-data__caption">Отображаемое имя</span>
      <span class="g-user-data__value">Vino_Costa</span>
    </div>
  </div>
</template>

<script>
import icons from '~/mixins/icons'

export default {
  name: 'GUserData',
  mixins: [icons]
}
</script>

<style lang="sass">
@import '../../theme/vars'
@import '../../theme/mix'
.g-user-data
  width: 100%
  &__title
    display: flex
    justify-content: space-between
    align-items: center
    margin-bottom: 32px
    h2
      max-width: 65%
      font-size: 20px !important
      line-height: 28px !important
  &__settings
    color: rgba(100, 62, 255, 1)
    cursor: pointer
    font-size: 25px
  &__caption
    margin-bottom: 4px
    font-size: 14px
    color: $gray
    line-height: 20px
  &__value
    font-weight: 600
    color: $white
    font-size: 20px
    line-height: 28px
  &__block
    display: flex
    flex-direction: column
    &:not(:last-child)
      margin-bottom: 24px  
</style>

<template>
  <div class="g-add-item">
    <div class="g-add-item__block">
      <button class="button-reboot g-add-item__button">
        <plus-icon class="icon" />
      </button>
      <span class="g-add-item__text">{{ label }}</span>
    </div>
  </div>
</template>

<script>
import icons from '~/mixins/icons'

export default {
  name: 'GAddItem',
  mixins: [icons],
  props: {
    label: {
      type: String,
      default: () => null
    }
  }
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.g-add-item
  background: #282439
  border-radius: 12px
  display: flex
  align-items: center
  justify-content: center
  min-height: 380px
  padding: 16px
  +lg
    display: none
    height: calc(100%)
  +md
    min-height: 208px
  &__block
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
  &__text
    font-weight: 600
    color: $gray
    font-size: 16px
    line-height: 24px
    text-align: center
    text-transform: uppercase
  &__button
    display: flex
    align-items: center
    justify-content: center
    background: #643EFF
    border-radius: 50%
    width: 80px
    height: 80px
    font-size: 30px
    color: $white
    margin-bottom: 24px
</style>

<template>
  <div :class="{ 'button_full-width': fullWidth }">
    <nuxt-link
      v-if="to"
      :to="to"
      :tag="tag"
      class="button button-reboot"
      :class="['button_' + color, 'button_' + size, { 'button_full-width': fullWidth }]"
    >{{ label }}</nuxt-link>

    <button
      v-if="!to"
      class="button button-reboot"
      :class="['button_' + color, 'button_' + size, { 'button_full-width': fullWidth }]"
    >{{ label }}</button>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    to: {
      type: String,
      default: () => ''
    },
    size: {
      type: String,
      default: () => ''
    },
    tag: {
      type: String,
      default: () => 'button'
    },
    fullWidth: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>

<style lang="sass">
  @import '../../theme/vars'
  @import '../../theme/mix'
  .button
    padding: 12px 32px
    border-radius: 6px
    color: $white
    display: flex
    justify-content: center
    align-items: center
    position: relative
    z-index: 5
    +md
      padding: 8px 34px
    &_full-width
      width: 100%
    &_xl
      padding: 14px 48px
      line-height: 22px
      font-size: 16px
      text-transform: uppercase
    &_lg
      padding: 8px 32px
      line-height: 20px
    &_secondary
      border: 1px solid #643EFF
      background: transparent
      transition: all 0.1s
      &:hover
        border: 1px solid #8875FF
        background: rgba(37, 34, 48, 1)
    &_gray
      background: rgba(255, 255, 255, 0.04)
      &:hover
        background: rgba(255, 255, 255, 0.08)
    &_primary
      background: dark-blue(1)
      transition: all 0.1s
      &:hover
        background: rgba(136, 117, 255, 1)
        color: $white
</style>

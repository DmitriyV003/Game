<template>
  <div class="button__wrapper" :class="{ 'button_full-width': fullWidth }">
    <nuxt-link
      v-if="tag === 'a'"
      :to="to"
      :tag="tag"
      :class="[
        'button_' + color,
        'button_' + size,
        { 'button_full-width': fullWidth },
      ]"
      class="button"
      >{{ label }}</nuxt-link
    >

    <button
      v-if="tag === 'button'"
      class="button"
      :disabled="disabled"
      :type="type"
      :class="[
        'button_' + color,
        'button_' + size,
        { 'button_full-width': fullWidth },
        { button_disabled: disabled },
      ]"
    >
      {{ label }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: () => '',
    },
    disabled: {
      type: Boolean,
      default: () => false,
    },
    label: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      default: () => '',
    },
    size: {
      type: String,
      default: () => '',
    },
    tag: {
      type: String,
      default: () => 'button',
    },
    fullWidth: {
      type: Boolean,
      default: () => false,
    },
  },
}
</script>

<style lang="sass">
@import '../../theme/vars'
@import '../../theme/mix'
.button
  padding: 12px 32px
  border-radius: 6px
  color: $white
  display: inline-flex
  font-weight: 500
  justify-content: center
  align-items: center
  position: relative
  outline: none !important
  border: none
  z-index: 5
  +md
    padding: 8px 34px
  &_disabled
    background: #9A93AA !important
    cursor: not-allowed !important
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
      color: $white
      background: rgba(37, 34, 48, 1)
  &_gray
    background: rgba(255, 255, 255, 0.04)
    &:hover
      background: rgba(255, 255, 255, 0.08)
  &_white
    color: #643EFF
    font-weight: 500
    background: white
    &:hover
      color: rgba(136, 117, 255, 1)
  &_primary
    background: dark-blue(1)
    transition: all 0.1s
    &:hover
      background: rgba(136, 117, 255, 1)
      color: $white
</style>

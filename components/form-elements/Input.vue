<template>
  <div class="g-input">
    <span class="g-input__caption" :class="['g-input__caption_' + color]" v-if="caption !== null">{{ caption }}</span>
    <input 
      @input="$emit('input', $event.target.value)" 
      type="text"
      class="input-reboot g-input__input"
      :class="['g-input__input_' + color, { 'g-input__input_readonly': readonly }]"
      :placeholder="placeholder"
      :readonly="readonly"
    >
  </div>
</template>

<script>
export default {
  name: 'GInput',
  props: {
    placeholder: {
      type: String,
      default: () => ''
    },
    caption: {
      type: String,
      default: () => null
    },
    readonly: {
      type: Boolean,
      default: () => false
    },
    color: {
      type: String,
      default: () => ''
    }
  }
}
</script>

<style lang="sass">
@import '../../theme/mix'
@import '../../theme/vars'
.g-input
  display: flex
  flex-direction: column
  align-items: flex-start
  &__caption
    letter-spacing: -0.4px
    margin-bottom: 16px
    font-size: 14px
    color: $gray
    line-height: 20px
    &_white
      color: $white
  &__input
    border-radius: 6px
    padding: 13px 20px 12px 20px
    background: #39354A
    color: white(1)
    font-size: 16px
    line-height: 23px
    font-weight: 400
    border: 1px solid #433F54
    width: 100%
    &:focus
      background: #2D293E
    &::placeholder
      color: $gray
      font-size: 16px
      line-height: 24px
      font-weight: 400
    &_white
      background: $white
      border: 1px solid #433F54
      font-weight: 500
      color: #000000
      &:focus
        background: $white
    &_readonly
      background: #39354A !important
      border: 1px solid #433F54 !important
      color: $gray !important
      cursor: default
</style>

<template>
  <div class="g-input">
    <input 
      @input="$emit('input', $event.target.value)" 
      type="text"
      class="input-reboot g-input__input" 
      :placeholder="placeholder"
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
    }
  }
}
</script>

<style lang="sass">
@import 'theme/_mix'
@import 'theme/_vars'
.g-input
  &__input
    border-radius: 6px
    padding: 13px 20px
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
</style>

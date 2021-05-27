<template>
  <div>
    <button class="button-reboot g-sort-button" :class="{ 'g-sort-button_active': active }">
      {{ label }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'GSortButton',
  props: {
    label: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'  
.g-sort-button
  padding: 12px 32px
  border-radius: 100px
  border: 1px solid #9A93AA
  font-weight: 500
  font-size: 16px
  line-height: 24px
  color: $white
  width: 100%
  &:hover
    border-color: #8875FF
    background: rgba(255, 255, 255, 0.04)
  &_active
    border: 1px solid #643EFF
    color: #643EFF
</style>

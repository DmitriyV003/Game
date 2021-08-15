<template>
  <div class="chip">
    <img :src="iconImage" alt="" class="chip__icon" />
    <span class="chip__label">{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: 'Chip',
  props: {
    iconImage: {
      type: String,
      default: () => '',
    },
    label: {
      type: String,
      default: () => '',
    },
  },
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.chip
  display: flex
  align-items: center
  &__icon
    margin-right: 8px
  &__label
    font-size: 14px
    line-height: 20px
    letter-spacing: -0.4px
    color: white(1)
    font-weight: 400
</style>

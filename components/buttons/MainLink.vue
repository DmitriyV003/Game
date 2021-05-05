<template>
  <div>
    <nuxt-link v-if="to" :to="to" tag="div" class="show-all__link">
      <span>{{ label }}</span>
      <chevron-right-icon v-if="icon" class="show-all__icon" />
    </nuxt-link>

    <div v-if="!to" class="show-all__link">
      <span>{{ label }}</span>
      <chevron-right-icon v-if="icon" class="show-all__icon" />
    </div>
  </div>
</template>

<script>
import icons from '~/mixins/icons'

export default {
  name: 'ShowAll',
  mixins: [icons],
  props: {
    label: {
      type: String,
      default: () => ''
    },
    to: {
      type: String,
      default: () => ''
    },
    icon: {
      type: Boolean,
      default: () => true
    }
  }
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.show-all
  &__link
    display: flex
    align-items: center
    font-weight: 500
    font-size: 14px
    line-height: 24px
    color: dark-blue(1)
    cursor: pointer
    &:hover
      color: rgba(136, 117, 255, 1)
    span
      font-size: inherit
      font-weight: inherit
      color: inherit
  &__icon
    font-size: 20px !important
</style>

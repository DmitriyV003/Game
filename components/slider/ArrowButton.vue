<template>
  <button class="button-reboot arrow-button">
    <chevron-left-icon v-if="left" />
    <chevron-right-icon v-if="right" />
  </button>
</template>

<script>
import icons from '~/mixins/icons'

export default {
  name: 'ArrowButton',
  mixins: [icons],
  props: {
    left: {
      type: Boolean,
      default: () => false
    },
    right: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.arrow-button
  width: 40px
  height: 40px
  border-radius: 50%
  display: flex
  align-items: center
  justify-content: center
  background: dark-blue(0.7)
  color: white(1)
  +md
    width: 32px
    height: 32px
</style>

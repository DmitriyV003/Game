<template>
    <div 
        @click="goTo" 
        class="show-all__link"
    >
      <chevron-left-icon v-if="icon && reverse" class="show-all__icon" />
      <span>{{ label }}</span>
      <chevron-right-icon v-if="icon && !reverse" class="show-all__icon" />
    </div>
</template>

<script>
import icons from '~/mixins/icons'
import { eventBus } from '~/plugins/event-bus'

export default {
  name: 'ShowAll',
  mixins: [icons],
  methods: {
    async goTo () {
      if (this.to !== '') {
        await this.$router.push(this.to)
      } else {
        this.$emit('custom-click')
      }
    }
  },
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
    },
    reverse: {
      type: Boolean,
      default: () => false
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

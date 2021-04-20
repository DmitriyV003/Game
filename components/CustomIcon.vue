<template>
  <div class="custom-icon">
    <div v-if="!isLink" class="custom-icon__main" :class="size === 40 ? 'custom-icon__main_40' : ''">
      <slot name="icon"></slot>
    </div>

    <nuxt-link tag="div" :to="to" v-if="isLink" class="custom-icon__main" :class="size === 40 ? 'custom-icon__main_40' : ''">
      <slot name="icon"></slot>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'CustomIcon',
  props: {
    to: {
      type: String,
      default: () => ''
    },
    isLink: {
      type: Boolean,
      default: () => false
    },
    size: {
      type: Number,
      default: () => 36
    }
  }
}
</script>

<style lang="sass">
  @import 'theme/_vars'
  @import 'theme/_mix'
  .custom-icon
    flex-shrink: 0
    &__main
      display: flex
      align-items: center
      justify-content: center
      width: 36px
      height: 36px
      border-radius: 50%
      background: dark-blue(0.3)
      cursor: pointer
      color: $white
      &_40
        width: 40px
        height: 40px
      +md
        width: 32px
        height: 32px
</style>

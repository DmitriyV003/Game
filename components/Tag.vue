<template>
  <div class="g-tag">
    <span class="text-color-white text-weight-400 text-size-14 text">{{
      label
    }}</span>
    <close-icon
      class="g-tag__close"
      v-if="closable"
      @click="$emit('delete-tag', { value, filterType })"
    />
  </div>
</template>

<script>
import icons from '~/mixins/icons'

export default {
  name: 'GTag',
  mixins: [icons],
  props: {
    label: {
      type: String,
      required: true,
    },
    filterType: {
      type: String,
      default: () => '',
    },
    value: {
      type: String,
      default: () => '',
    },
    closable: {
      type: Boolean,
      default: () => false,
    },
  },
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.g-tag
    padding: 6px 12px
    border-radius: 100px
    background: rgba(100, 62, 255, 0.3)
    display: flex
    cursor: pointer
    align-items: center
    &__close
        margin-left: 8px
        cursor: pointer
        color: rgba(136, 117, 255, 1)
        font-size: 23px
    .text
        letter-spacing: -0.4px
</style>

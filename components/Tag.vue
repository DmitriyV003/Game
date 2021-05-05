<template>
  <div class="g-tag">
    <span class="text-color-white text-weight-400 text-size-14 text">{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: 'GTag',
  props: {
    label: {
      type: String,
      required: true
    }
  }
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
  .text
    letter-spacing: -0.4px
</style>

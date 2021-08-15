<template>
  <div class="g-info">
    <span class="g-info__title text-color-gray text-size-14 text-weight-400">{{
      title
    }}</span>
    <span
      v-if="text !== null"
      class="g-info__text text-color-white text-size-16 text-weight-400"
      >{{ text }}</span
    >
  </div>
</template>

<script>
export default {
  name: 'GInfoBlock',
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: () => null,
    },
  },
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.g-info
  display: flex
  flex-direction: column
  align-items: flex-start
  &_right
    align-items: flex-end
  &__title
    margin-bottom: 4px
    letter-spacing: -0.4px
</style>

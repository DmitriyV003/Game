<template>
  <div class="rating">
    <img src="/images/star.svg" alt="" class="rating__img">
    <span class="rating__value" :class="'rating__value_' + size">{{ value }}</span>
  </div>
</template>

<script>
export default {
  name: 'Rating',
  props: {
    value: {
      type: Number,
      required: true
    },
    size: {
      type: String,
      default: () => ''
    }
  }
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.rating
  display: flex
  align-items: center
  padding: 4px 6px
  background: rgba(100, 62, 255, 1)
  font-weight: 500
  font-size: 14px
  line-height: 20px
  color: white(1)
  max-width: 50px
  &__value
    line-height: 20px
    font-size: 14px
    &_sm
      font-size: 12px
      line-height: 14px
  &__img
    margin-right: 4px
</style>

<template>
  <div class="g-drop-content">
    <div @click="open = !open" class="g-drop-content__top">
      <span class="g-drop-content__title">{{ title }}</span>
      <img
        class="g-drop-content__icon"
        :class="{ 'g-drop-content__icon_active': open }"
        src="/images/icons/arrow-down.svg"
        alt=""
      />
    </div>

    <div v-show="open" class="g-drop-content__content">
      <div class="g-new-product__left g-new-product__left_mobile-none"></div>
      <div class="g-new-product__right">
        <slot name="dropContent"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GDropContent',
  data: () => {
    return {
      open: false,
    }
  },
  props: {
    title: {
      type: String,
      default: () => 'Some Title',
    },
  },
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.g-drop-content
  width: 100%
  &__content
    display: flex
    justify-content: space-between
    width: 100%
    +lg
      flex-direction: column
  &__top
    display: flex
    align-items: center
    justify-content: space-between
    cursor: pointer
    padding: 16px 0
  &__icon
    transition: all 0.2s
    &_active
      transform: rotate(180deg)
  &__title
    font-weight: 600
    color: $white
    font-size: 18px
    line-height: 24px
    +md
      font-size: 16px
      line-height: 24px
</style>

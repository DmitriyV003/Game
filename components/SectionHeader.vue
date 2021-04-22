<template>
  <div class="section-header">
    <div class="section-header__title">
      <img v-if="icon" class="section-header__icon" :src="icon" alt="">
      <h2 :class="titleStyle">{{ title }}</h2>
    </div>

    <nuxt-link v-if="linkLabel" :to="to" tag="div" class="section-header__link">
      <span>{{ linkLabel }}</span>
      <chevron-right-icon />
    </nuxt-link>
  </div>
</template>

<script>
import icons from '~/mixins/icons'

export default {
  name: 'SectionHeader',
  mixins: [icons],
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: () => null
    },
    titleStyle: {
      type: String,
      default: () => null
    },
    linkLabel: {
      type: String,
      default: () => null
    },
    to: {
      type: String,
      default: () => ''
    }
  }
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.section-header
  display: flex
  align-items: center
  justify-content: space-between
  padding-bottom: 24px
  position: relative
  z-index: 10
  +md
    padding-bottom: 12px
  &__link
    display: flex
    align-items: center
    font-weight: 500
    font-size: 14px
    line-height: 24px
    color: dark-blue(1)
    cursor: pointer
    span
      font-size: inherit
      font-weight: inherit
  &__icon
    margin-right: 12px
  &__title
    display: flex
    align-items: center
</style>

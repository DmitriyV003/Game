<template>
  <div class="section-header">
    <div class="section-header__title">
      <img v-if="icon" class="section-header__icon" :src="icon" alt="">
      <h2 :class="[titleStyle, 'section-header__title_' + size]">{{ title }}</h2>
    </div>

    <show-all 
        v-if="linkLabel" 
        :label="linkLabel" 
        :to="to" 
    />
  </div>
</template>

<script>
import icons from '~/mixins/icons'
import ShowAll from "~/components/buttons/MainLink";

export default {
  name: 'SectionHeader',
  components: {ShowAll},
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
    },
    size: {
      type: String,
      default: () => ''
    },
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
    padding-bottom: 20px
  &__icon
    margin-right: 12px
  &__title
    display: flex
    align-items: center
    &_xl
      +lg
        font-size: 24px
        line-height: 28px
</style>

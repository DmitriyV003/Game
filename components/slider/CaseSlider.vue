<template>
  <div>
    <vue-slick
      ref="caseSlider"
      :variable-width="settings.variableWidth"
      :slides-to-show="settings.slidesToShow"
      :slides-to-scroll="settings.slidesToScroll"
      :arrows="settings.arrows"
      :dots="settings.dots"
    >
      <g-case class="case-slider__card" />
      <g-case class="case-slider__card" />
      <g-case class="case-slider__card" />
      <g-case class="case-slider__card" />
    </vue-slick>
    <div class="g-slider__controls">
      <arrow-button @click.native="prev($refs.caseSlider)" class="g-slider__button g-slider__button_left" left />
      <arrow-button @click.native="next($refs.caseSlider)" class="g-slider__button g-slider__button_right" right />
    </div>
  </div>
</template>

<script>
import GCase from '~/components/cards/CaseCard'
import ArrowButton from '~/components/slider/ArrowButton'
export default {
  name: 'GCaseSlider',
  components: { ArrowButton, GCase },
  data: () => {
    return {
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
        dots: false
      }
    }
  },
  methods: {
    next (slider) {
      slider.next()
    },
    prev (slider) {
      slider.prev()
    }
  }
}
</script>

<style lang="sass">
.case-slider
  &__card
    width: 270px
    padding-right: 20px
</style>

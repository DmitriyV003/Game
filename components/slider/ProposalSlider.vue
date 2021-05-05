<template>
  <div>
    <vue-slick
      ref="proposalSlider"
      :variable-width="settings.variableWidth"
      :slides-to-show="settings.slidesToShow"
      :slides-to-scroll="settings.slidesToScroll"
      :arrows="settings.arrows"
      :dots="settings.dots"
    >
      <g-proposal-card />
      <g-proposal-card />
      <g-proposal-card />
      <g-proposal-card />
      <g-proposal-card />
    </vue-slick>
    <div class="g-slider__controls">
      <arrow-button @click.native="prev($refs.proposalSlider)" class="g-slider__button g-slider__button_left" left />
      <arrow-button @click.native="next($refs.proposalSlider)" class="g-slider__button g-slider__button_right" right />
    </div>
  </div>
</template>

<script>
import GProposalCard from '~/components/cards/ProposalCard'
import ArrowButton from "~/components/slider/ArrowButton";
export default {
  name: 'GProposalSlider',
  components: {ArrowButton, GProposalCard },
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

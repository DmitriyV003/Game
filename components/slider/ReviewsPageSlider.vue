<template>
  <div>
    <vue-slick
      ref="reviewsPageSlider"
      :variable-width="settings.variableWidth"
      :slides-to-show="settings.slidesToShow"
      :slides-to-scroll="settings.slidesToScroll"
      :arrows="settings.arrows"
      :dots="settings.dots"
    >
      <g-review-page-card
        v-for="item in data"
        :key="item.itemId"
        :image="item.itemHeaderImage"
        :id="item.itemId"
      />
    </vue-slick>
    <div class="g-slider__controls">
      <arrow-button
        @click.native="prev($refs.reviewsPageSlider)"
        class="g-slider__button g-slider__button_left"
        left
      />
      <arrow-button
        @click.native="next($refs.reviewsPageSlider)"
        class="g-slider__button g-slider__button_right"
        right
      />
    </div>
  </div>
</template>

<script>
import ArrowButton from '~/components/slider/ArrowButton'
import Dot from '~/components/slider/Dot'
import GReviewPageCard from '~/components/cards/ReviewPageCard'

export default {
  name: 'GReviewsPageSlider',
  components: { GReviewPageCard, ArrowButton, Dot },
  data: () => {
    return {
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
        dots: false,
      },
    }
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  methods: {
    next(slider) {
      slider.next()
    },
    prev(slider) {
      slider.prev()
    },
  },
}
</script>

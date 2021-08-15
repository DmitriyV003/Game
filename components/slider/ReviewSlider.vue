<template>
  <div class="g-slider review-slider">
    <vue-slick
      ref="reviewsSlider"
      :slides-to-show="1"
      :slides-to-scroll="1"
      :arrows="false"
      :dots="true"
      :responsive="reviewSliderSettings.responsive"
    >
      <review-card class="review-section__card" />
      <review-card class="review-section__card" />
      <review-card class="review-section__card" />
      <review-card class="review-section__card" />
      <review-card class="review-section__card" />

      <template #customPaging="page">
        <dot />
      </template>
    </vue-slick>
    <div class="g-slider__controls">
      <arrow-button
        @click.native="prev($refs.reviewsSlider)"
        class="g-slider__button g-slider__button_left"
        left
      />
      <arrow-button
        @click.native="next($refs.reviewsSlider)"
        class="g-slider__button g-slider__button_right"
        right
      />
    </div>
  </div>
</template>

<script>
import ReviewCard from '~/components/cards/ReviewCard'
import ArrowButton from '~/components/slider/ArrowButton'
import Dot from '~/components/slider/Dot'
export default {
  name: 'GReviewSlider',
  components: { ArrowButton, ReviewCard, Dot },
  data: () => {
    return {
      reviewSliderSettings: {
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              variableWidth: true,
              dots: false,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              dots: false,
            },
          },
        ],
      },
    }
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

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.review-section__card
  +lg
    margin-right: 16px
.review-slider
  .slick-dots
    position: initial
    display: flex !important
    justify-content: flex-start
    margin-top: 36px
    .slick-active
      .slider-dot
        background: dark-blue(1)
    li
      width: initial
      height: initial
      margin: 0
  &__card
    +lg
      margin-right: 16px
</style>

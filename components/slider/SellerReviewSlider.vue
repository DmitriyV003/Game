<template>
  <div class="g-slider genre-slider">
    <vue-slick
      ref="sellerGameSlider"
      :variable-width="settings.variableWidth"
      :slides-to-show="settings.slidesToShow"
      :slides-to-scroll="settings.slidesToScroll"
      :arrows="settings.arrows"
      :dots="settings.dots"
    >
      <g-seller-review-card
        v-for="item in data"
        :name="item.name"
        :key="item.name"
        :image="item.background"
        :rating="item.desc"
        :caption="item.caption"
      />
    </vue-slick>
    <div class="g-slider__controls">
      <arrow-button
        @click.native="prev($refs.sellerGameSlider)"
        class="g-slider__button g-slider__button_left"
        left
      />
      <arrow-button
        @click.native="next($refs.sellerGameSlider)"
        class="g-slider__button g-slider__button_right"
        right
      />
    </div>
  </div>
</template>

<script>
import ArrowButton from '~/components/slider/ArrowButton'
import GSellerReviewCard from '~/components/cards/SellerReviewCard'
export default {
  name: 'GSellerReviewSlider',
  components: { GSellerReviewCard, ArrowButton },
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

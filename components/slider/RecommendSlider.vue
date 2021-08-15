<template>
  <div class="g-slider game-slider" v-if="data !== null || data !== []">
    <vue-slick
      ref="recommendSlider"
      :variable-width="settings.variableWidth"
      :slides-to-show="settings.slidesToShow"
      :slides-to-scroll="settings.slidesToScroll"
      :center-padding="settings.centerPadding"
      :arrows="settings.arrows"
      :dots="settings.dots"
    >
      <game-card
        v-for="item in data"
        :key="item.itemId"
        :title="item.itemName"
        :developer="item.itemDeveloper"
        :image="item.itemBackground"
        class="recommend__card"
        :sale="item.itemPrice.sale"
        :old-price="item.itemPrice.old"
        :new-price="item.itemPrice.new"
        :rating="Number(item.itemScore)"
        :id="item.itemId"
      />
    </vue-slick>
    <div class="g-slider__controls">
      <arrow-button
        @click.native="prev($refs.recommendSlider)"
        class="g-slider__button g-slider__button_left"
        left
      />
      <arrow-button
        @click.native="next($refs.recommendSlider)"
        class="g-slider__button g-slider__button_right"
        right
      />
    </div>
  </div>
</template>

<script>
import GameCard from '~/components/cards/GameCard'
import ArrowButton from '~/components/slider/ArrowButton'
export default {
  name: 'GRecommendSlider',
  components: { GameCard, ArrowButton },
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

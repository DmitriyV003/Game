<template>
  <div>
    <vue-slick
      ref="gameNewsSlider"
      :variable-width="settings.variableWidth"
      :slides-to-show="settings.slidesToShow"
      :slides-to-scroll="settings.slidesToScroll"
      :arrows="settings.arrows"
      :dots="settings.dots"
    >
      <g-game-news
        v-for="item in data"
        :key="item.newsId"
        :id="item.newsId"
        :name="item.newsName"
        :image="item.newsSmallBackground"
        :desc3="item.newsDescriptionOn3Words"
        :desc="item.newsSmallDescription"
      />
    </vue-slick>
    <div class="g-slider__controls">
      <arrow-button
        @click.native="prev($refs.gameNewsSlider)"
        class="g-slider__button g-slider__button_left"
        left
      />
      <arrow-button
        @click.native="next($refs.gameNewsSlider)"
        class="g-slider__button g-slider__button_right"
        right
      />
    </div>
  </div>
</template>

<script>
import ArrowButton from '~/components/slider/ArrowButton'
import GGameNews from '~/components/cards/GameNews'
export default {
  name: 'GGameNewsSlider',
  components: { GGameNews, ArrowButton },
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
      default: () => null,
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

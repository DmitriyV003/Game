<template>
  <div class="g-slider comments-slider">
    <vue-slick
      ref="commentsSlider"
      :variable-width="commentSliderSettings.variableWidth"
      :slides-to-show="commentSliderSettings.slidesToShow"
      :slides-to-scroll="commentSliderSettings.slidesToScroll"
      :arrows="commentSliderSettings.arrows"
      :dots="commentSliderSettings.dots"
      :responsive="commentSliderSettings.responsive"
    >
      <comment-card
        v-for="item in data"
        class="g-slider__comment-card"
        :id="item.id"
        :key="item.id"
        :name="item.itemName"
        :image="item.itemHeaderImage"
        :rating="Number(item.itemRating)"
        :avatar="item.avatar"
        :nickname="item.nickname"
        :text="item.comment"
        :date="item.createdAt"
      />
    </vue-slick>
    <div class="g-slider__controls">
      <arrow-button
        @click.native="prev($refs.commentsSlider)"
        class="g-slider__button g-slider__button_left"
        left
      />
      <arrow-button
        @click.native="next($refs.commentsSlider)"
        class="g-slider__button g-slider__button_right"
        right
      />
    </div>
  </div>
</template>
<script>
import CommentCard from '~/components/cards/CommentCard'
import ArrowButton from '~/components/slider/ArrowButton'

export default {
  name: 'GCommentSlider',
  components: { CommentCard, ArrowButton },
  methods: {
    next(slider) {
      slider.next()
    },
    prev(slider) {
      slider.prev()
    },
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  data: () => {
    return {
      commentSliderSettings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: false,
        arrows: false,
        dots: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              variableWidth: true,
            },
          },
        ],
      },
    }
  },
}
</script>

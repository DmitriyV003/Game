<template>
  <div>
    <!-- For customers top  adapted = true -->
    <section class="for-sellers__top">
      <b-container>
        <div class="news-card__top">
          <bread-crumb :links="links" />
        </div>
        
        <g-promo-banner />
      </b-container>
    </section>

    <!-- Game categories  adapted = true -->
    <section class="section for-customers__section">
      <b-container>
        <div class="for-customers__wrapper">
          <b-row>
            <b-col xl="3" lg="3">
              <h2 class="for-customers__title">Игры на любой вкус</h2>
            </b-col>

            <b-col xl="9" lg="9">
              <div class="for-customers__buttons">
                <rounded-button class="for-customers__button" to="/" label="Экшн"/>
                <rounded-button class="for-customers__button" to="/" label="Приключения"/>
                <rounded-button class="for-customers__button" to="/" label="Стратегии"/>
                <rounded-button class="for-customers__button" to="/" label="Инди"/>
                <rounded-button class="for-customers__button" to="/" label="Аниме"/>
                <rounded-button class="for-customers__button" to="/" label="Ролевые"/>
                <rounded-button class="for-customers__button" to="/" label="Симуляторы"/>
                <rounded-button class="for-customers__button" to="/" label="Казуальные игры"/>
                <rounded-button class="for-customers__button" to="/" label="Гонки"/>
                <rounded-button class="for-customers__button" to="/" label="Спорт"/>
                <rounded-button class="for-customers__button" to="/" label="Онлайн-игры"/>

              </div>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </section>

    <!-- Games slider  adapted = true -->
    <section class="section">
      <b-container>
        <div class="g-slider game-slider">
          <vue-slick
            ref="recommendSlider"
            :variable-width="settings.variableWidth"
            :slides-to-show="settings.slidesToShow"
            :slides-to-scroll="settings.slidesToScroll"
            :center-padding="settings.centerPadding"
            :arrows="settings.arrows"
            :dots="settings.dots"
          >
            <game-card class="recommend__card" />
            <game-card class="recommend__card" />
            <game-card class="recommend__card" />
            <game-card class="recommend__card" />
            <game-card class="recommend__card" />
            <game-card class="recommend__card" />
            <game-card class="recommend__card" />
            <game-card class="recommend__card" />
            <game-card class="recommend__card" />
            <game-card class="recommend__card" />
            <game-card class="recommend__card" />
            <game-card class="recommend__card" />
            <game-card class="recommend__card" />
            <game-card class="recommend__card" />
            <game-card class="recommend__card" />
            <game-card class="recommend__card" />
          </vue-slick>
          <div class="g-slider__controls">
            <arrow-button @click.native="prev($refs.recommendSlider)" class="g-slider__button g-slider__button_left" left />
            <arrow-button @click.native="next($refs.recommendSlider)" class="g-slider__button g-slider__button_right" right />
          </div>
        </div>
      </b-container>
    </section>

    <!-- Soft categories  adapted = true -->
    <section class="section for-customers__section">
      <b-container>
        <div class="for-customers__wrapper">
          <b-row>
            <b-col xl="3" lg="3">
              <h2 class="for-customers__title">Софт на любой вкус</h2>
            </b-col>

            <b-col xl="9" lg="9">
              <div class="for-customers__buttons">
                <rounded-button class="for-customers__button" to="/" label="Экшн"/>
                <rounded-button class="for-customers__button" to="/" label="Приключения"/>
                <rounded-button class="for-customers__button" to="/" label="Стратегии"/>
                <rounded-button class="for-customers__button" to="/" label="Инди"/>
                <rounded-button class="for-customers__button" to="/" label="Аниме"/>
                <rounded-button class="for-customers__button" to="/" label="Ролевые"/>
                <rounded-button class="for-customers__button" to="/" label="Симуляторы"/>
                <rounded-button class="for-customers__button" to="/" label="Казуальные игры"/>
                <rounded-button class="for-customers__button" to="/" label="Гонки"/>
                <rounded-button class="for-customers__button" to="/" label="Спорт"/>
                <rounded-button class="for-customers__button" to="/" label="Онлайн-игры"/>

              </div>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </section>

    <!-- Games slider  adapted = true -->
    <section class="section">
      <b-container>
        <div class="g-slider game-slider">
          <vue-slick
            ref="recommendSlider"
            :variable-width="settings.variableWidth"
            :slides-to-show="settings.slidesToShow"
            :slides-to-scroll="settings.slidesToScroll"
            :center-padding="settings.centerPadding"
            :arrows="settings.arrows"
            :dots="settings.dots"
          >
            <game-card class="recommend__card" />
            <game-card class="recommend__card" />
            <game-card class="recommend__card" />
            <game-card class="recommend__card" />
            <game-card class="recommend__card" />
            <game-card class="recommend__card" />
            <game-card class="recommend__card" />
            <game-card class="recommend__card" />
            <game-card class="recommend__card" />
            <game-card class="recommend__card" />
            <game-card class="recommend__card" />
            <game-card class="recommend__card" />
            <game-card class="recommend__card" />
            <game-card class="recommend__card" />
            <game-card class="recommend__card" />
            <game-card class="recommend__card" />
          </vue-slick>
          <div class="g-slider__controls">
            <arrow-button @click.native="prev($refs.recommendSlider)" class="g-slider__button g-slider__button_left" left />
            <arrow-button @click.native="next($refs.recommendSlider)" class="g-slider__button g-slider__button_right" right />
          </div>
        </div>
      </b-container>
    </section>

    <!-- Game genres slider  adapted = true -->
    <section class="section">
      <b-container>
        <section-header title="Огромное количество ключей" />
        <div class="for-customers__genres">
          <g-reviews-page-slider />
        </div>
      </b-container>
    </section>

    <!-- Cases  adapted = true -->
    <section class="section">
      <b-container>
        <section-header title="Множество кейсов" />
        <div class="for-customers__cases" v-if="windowSize > 991">
          <b-row>
            <b-col xl="3" lg="3">
              <g-case />
            </b-col>
            <b-col xl="3" lg="3">
              <g-case />
            </b-col>
            <b-col xl="3" lg="3">
              <g-case />
            </b-col>
            <b-col xl="3" lg="3">
              <g-case />
            </b-col>
          </b-row>
        </div>
        <div v-else>
          <g-case-slider />
        </div>
      </b-container>
    </section>

    <!-- Clients  adapted = true -->
    <section class="section">
      <b-container>
        <section-header title="Довольные клиенты" />
        <div class="for-customers__clients" v-if="windowSize >= 1200">
          <b-row>
            <b-col xl="6">
              <comment-card adaptive-size="md" class="for-customers__comment" />
            </b-col>
            <b-col xl="6">
              <comment-card adaptive-size="md" class="for-customers__comment" />
            </b-col>
            <b-col xl="6">
              <comment-card adaptive-size="md" class="for-customers__comment" />
            </b-col>
          </b-row>
        </div>
        <div class="for-customers__clients" v-else>
          <g-comment-slider />
        </div>
      </b-container>
    </section>

    <!-- Reviews  adapted = true -->
    <section class="section">
      <b-container>
        <section-header title="Полезные обзоры" />
        <div class="for-customers__clients" v-if="windowSize >= 1200">
          <review-card class="for-customers__review" />
          <review-card class="for-customers__review" />
          <review-card class="for-customers__review" />
        </div>
        <div class="for-customers__clients" v-else>
          <g-review-slider />
        </div>
      </b-container>
    </section>

    <!-- Who  adapted = true -->
    <section class="section for-customers__who">
      <b-container>
        <b-row>
          <b-col xl="6" lg="6">
            <nuxt-link to="for-customers" class="g-who g-who_customer">
              <span>Покупателю</span>
            </nuxt-link>
          </b-col>
          <b-col xl="6" lg="6">
            <nuxt-link to="for-customers" class="g-who g-who_seller">
              <span>Продавцу</span>
            </nuxt-link>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import BreadCrumb from "~/components/BreadCrumb";
import GPromoBanner from "~/components/banners/PromoBanner";
import RoundedButton from "~/components/buttons/RoundedButton";
import GameCard from "~/components/cards/GameCard";
import ArrowButton from "~/components/slider/ArrowButton";
import GReviewsPageSlider from "~/components/slider/ReviewsPageSlider";
import SectionHeader from "~/components/SectionHeader";
import GCommentSlider from "~/components/slider/CommentSlider";
import CommentCard from '~/components/cards/CommentCard'
import { mapState } from 'vuex'
import ReviewCard from '~/components/cards/ReviewCard'
import GReviewSlider from '~/components/slider/ReviewSlider'
import GCase from '~/components/cards/CaseCard'
import GCaseSlider from "~/components/slider/CaseSlider";
export default {
  name: 'ForCustomersPage',
  components: {
    GCaseSlider,
    GCase,
    GReviewSlider,
    ReviewCard,
    CommentCard,
    GCommentSlider,
    SectionHeader, GReviewsPageSlider, ArrowButton, GameCard, RoundedButton, GPromoBanner, BreadCrumb},
  layout: 'default',
  computed: {
    ...mapState({
      windowSize: state => state.common.windowSize
    })
  },
  methods: {
    next (slider) {
      slider.next()
    },
    prev (slider) {
      slider.prev()
    }
  },
  data: () => {
    return {
      links: [
        { to: '/', label: 'Главная' },
        { to: '/for-customers', label: 'Покупателям' }
      ],
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
        dots: false
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import 'theme/_vars'
@import 'theme/_mix'
.g-who
  display: flex
  align-items: center
  justify-content: center
  position: relative
  border-radius: 12px
  cursor: pointer
  height: 311px
  color: $white
  font-size: 32px
  line-height: 38px
  overflow: hidden
  transition: all 0.1s
  background-position: center center
  background-repeat: no-repeat
  background-size: cover
  +lg
    margin-bottom: 12px
  +md
    height: 200px
  span
    font-weight: 600
    position: relative
    z-index: 10
  &::after
    content: ''
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-color: rgba(0, 0, 0, 0.45)
    transition: all 0.1s
  &:hover
    filter: drop-shadow(0px 6px 16px rgba(0, 0, 0, 0.25))
    &::after
      background-color: rgba(0, 0, 0, 0.75)
  &_customer
    background-image: url("/images/customer.png")
  &_seller
    background-image: url("/images/seller-1.png")  
.for-customers
  &__who
    +lg
      padding-bottom: 20px
  &__review
    &:not(:last-child)
      margin-bottom: 24px
  &__comment
    margin-bottom: 20px
  &__genres
    position: relative
  &__wrapper
    +sm
      padding: 16px
      background: #282439
      border-radius: 12px
  &__button
    margin-bottom: 16px
    +sm
      width: calc(50% - 8px)
    &:not(:last-child)
      margin-right: 16px
      +sm
        margin-right: 0
  &__section
    padding-top: 64px
    +md
      padding-top: 40px
  &__buttons
    display: flex
    align-items: center
    flex-wrap: wrap
    padding-left: 60px
    +lg
      padding-left: 0
    +sm
      justify-content: space-between
  &__title
    font-size: 32px
    line-height: 38px
    font-weight: 600
    color: $white
    +lg
      margin-bottom: 24px
    +md
      font-size: 20px
      line-height: 28px
</style>

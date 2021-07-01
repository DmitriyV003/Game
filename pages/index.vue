<template>
  <div>

    <!-- Hot adapted = true -->
    <section class="section hot">
      <b-container>
        <div class="hot-tabs">
          <tab-panel />
        </div>
      </b-container>
    </section>

    <!-- Recommend slider  adapted = true   -->
    <section class="section recommend">
      <b-container>
        <section-header link-label="Смотреть все" icon="/images/recommend.svg" title="Рекомендуем" />
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

    <!-- Banner 1  adapted = true   -->
    <section class="section">
      <b-container >
        <section-header title-style="text-h3" title="Fortnite" />
        <banner
          title="Лисица-охотница присоединится к отряду Fortnite в феврале"
          text="В попытке обогнать само время к отряду Fortnite присоединяется новая хитроумная воительница."
          image="/images/banner-1.png"
        />
      </b-container>
    </section>

    <!-- Fire Slider  adapted = true  -->
    <section class="section">
      <b-container >
        <section-header link-label="Смотреть все" icon="/images/fire.svg" title="Хиты продаж" />
      </b-container>
    </section>

    <!-- Banner 2  adapted = true   -->
    <section class="section">
      <b-container >
        <section-header title-style="text-h3" title="CYBERPUNK 2077" />
        <banner
          title="Cyberpunk 2077"
          text="Приключенческая ролевая игра, действие которой происходит в мегаполисе Найт-Сити, где власть, роскошь и модификации тела ценятся выше всего."
          button-label="узнать больше"
          image="/images/banner-2.png"
        />
      </b-container>
    </section>

    <!-- Sales  adapted =  true -->
    <section class="section sales-section">
      <b-container>
        <div class="sales-section__content">
          <div class="sales-section__title-block">
            <h4 class="sales-section__title">Недорогие игры</h4>
            <p class="text-gray text-normal">Хотите сэкономить? Выберите игры с самой низкой ценой</p>
          </div>

          <div class="sales-section__buttons">
            <rounded-button class="sales-section__button g-pr-none-sm g-pl-none-sm" to="/" label="до 100 ₽"/>
            <rounded-button class="sales-section__button g-pr-none-sm g-pl-none-sm" to="/" label="до 200 ₽"/>
            <rounded-button class="sales-section__button g-pr-none-sm g-pl-none-sm" to="/" label="до 300 ₽"/>
            <rounded-button class="sales-section__button g-pr-none-sm g-pl-none-sm g-mr-none" to="/" label="до 500 ₽"/>
            <rounded-button class="sales-section__button g-pr-none-sm g-pl-none-sm" to="/" label="до 600 ₽"/>
            <rounded-button class="sales-section__button g-pr-none-sm g-pl-none-sm" to="/" label="до 800 ₽"/>
            <rounded-button class="sales-section__button g-pr-none-sm g-pl-none-sm" to="/" label="до 900 ₽"/>
            <rounded-button class="sales-section__button g-pr-none-sm g-pl-none-sm g-mr-none" to="/" label="до 1000 ₽"/>
          </div>
        </div>
      </b-container>
    </section>

    <!-- Reviews  adapted = true -->
    <section class="section review-section">
      <b-container>
        <section-header title="Обзоры" link-label="Все обзоры" />
        <g-review-slider />
      </b-container>
    </section>

    <!-- Genres  adapted = true -->
    <section class="section genres">
      <b-container>
        <section-header title="Игры по жанрам" link-label="Все жанры" />

        <div class="g-slider genre-slider">
          <vue-slick
            ref="genresSlider"
            :variable-width="settings.variableWidth"
            :slides-to-show="settings.slidesToShow"
            :slides-to-scroll="settings.slidesToScroll"
            :center-padding="settings.centerPadding"
            :arrows="settings.arrows"
            :dots="settings.dots"
          >
            <genre-card class="genres__card" name="action" image="/images/genre-1.svg" />
            <genre-card class="genres__card" name="action" image="/images/genre-1.svg" />
            <genre-card class="genres__card" name="action" image="/images/genre-1.svg" />
            <genre-card class="genres__card" name="action" image="/images/genre-1.svg" />
            <genre-card class="genres__card" name="action" image="/images/genre-1.svg" />
            <genre-card class="genres__card" name="action" image="/images/genre-1.svg" />
          </vue-slick>
          <div class="g-slider__controls">
            <arrow-button @click.native="prev($refs.genresSlider)" class="g-slider__button g-slider__button_left" left />
            <arrow-button @click.native="next($refs.genresSlider)" class="g-slider__button g-slider__button_right" right />
          </div>
        </div>
      </b-container>
    </section>

    <!-- Comments  adapted = true -->
    <section class="section comments">
      <b-container>
        <section-header title="Отзывы" link-label="Все отзывы" />
        
        <g-comment-slider />
      </b-container>
    </section>

    <!-- Platforms  adapted = true -->
    <section class="section platforms">
      <b-container>
        <div class="platforms__content">
          <h2>Платформы</h2>
          <div class="platforms__list">
            <div class="platforms__wrapper">
              <div class="platforms__platform">
                <img src="/images/steam.svg" alt="">
              </div>
            </div>
            <div class="platforms__wrapper">
              <div class="platforms__platform">
                <img src="/images/steam.svg" alt="">
              </div>
            </div>
            <div class="platforms__wrapper">
              <div class="platforms__platform">
                <img src="/images/steam.svg" alt="">
              </div>
            </div>
            <div class="platforms__wrapper">
              <div class="platforms__platform">
                <img src="/images/steam.svg" alt="">
              </div>
            </div>
            <div class="platforms__wrapper">
              <div class="platforms__platform">
                <img src="/images/steam.svg" alt="">
              </div>
            </div>
            <div class="platforms__wrapper">
              <div class="platforms__platform">
                <img src="/images/steam.svg" alt="">
              </div>
            </div>
            <div class="platforms__wrapper">
              <div class="platforms__platform">
                <img src="/images/steam.svg" alt="">
              </div>
            </div>
            <div class="platforms__wrapper">
              <div class="platforms__platform">
                <img src="/images/steam.svg" alt="">
              </div>
            </div>
            <div class="platforms__wrapper g-xl-none">
              <div class="platforms__platform">
                <img src="/images/steam.svg" alt="">
              </div>
            </div>
            <div class="platforms__wrapper g-xl-none">
              <div class="platforms__platform">
                <img src="/images/steam.svg" alt="">
              </div>
            </div>
            <div class="platforms__wrapper">
              <span class="platforms__count text-color-white text-size-24 text-weight-600">+20</span>
            </div>
          </div>
        </div>
      </b-container>
    </section>
  </div>
</template>

<script>
import GameCard from '~/components/cards/GameCard'
import ArrowButton from '~/components/slider/ArrowButton'
import SliderDot from '~/components/slider/Dot'
import SectionHeader from '~/components/SectionHeader'
import Banner from '~/components/Banner'
import RoundedButton from '~/components/buttons/RoundedButton'
import GenreCard from '~/components/cards/GenreCard'
import CommentCard from '~/components/cards/CommentCard'
import TabPanel from '~/components/TabPanel'
import ReviewCard from '~/components/cards/ReviewCard'
import Dot from '~/components/slider/Dot'
import GReviewSlider from '~/components/slider/ReviewSlider'
import GCommentSlider from '~/components/slider/CommentSlider'

export default {
  components: {
    GCommentSlider,
    GReviewSlider,
    ReviewCard,
    TabPanel,
    CommentCard,
    GenreCard,
    RoundedButton,
    SectionHeader,
    SliderDot,
    ArrowButton,
    GameCard,
    Banner,
    Dot
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
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        centerPadding: '20px',
        arrows: false,
        dots: false
      },
      commentSliderSettings: {
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              variableWidth: true
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.platforms
  &__count
    width: 64px
    height: 64px
    display: flex
    align-items: center
    justify-content: center
    +lg
      width: 88px
      height: 88px
  &__wrapper
    display: flex
    align-items: center
    justify-content: center
    +lg
      width: calc(33% - 62px)
      display: flex
      align-items: center
      justify-content: center
    +sm
      width: calc(33% - 20px)
  &__list
    display: flex
    align-items: center
    margin-left: auto
    justify-content: space-between
    +lg
      margin-top: 28px
      margin-right: auto
      flex-wrap: wrap
      margin-bottom: -16px
  &__platform
    width: 64px
    height: 64px
    border-radius: 50%
    flex-shrink: 0
    display: flex
    align-items: center
    justify-content: center
    background: dark-blue(0.3)
    margin-right: 20px
    +lg
      margin-right: 0
    +lg
      margin-bottom: 16px
      width: 88px
      height: 88px
  &__content
    display: flex
    align-items: center
    justify-content: space-between
    +lg
      flex-direction: column
      align-items: flex-start
      padding: 16px
      background: rgba(40, 36, 57, 1)
      border-radius: 12px
.sales-section
  &__button
    margin-bottom: 16px
    margin-right: 16px
    +md
      margin-right: 0
      margin-bottom: 12px
    +sm
      width: calc(50% - 6px)
  &__buttons
    display: flex
    align-items: center
    flex-wrap: wrap
    margin-bottom: -16px
    justify-content: flex-end
    +lg
      margin-top: 24px
      justify-content: space-between
    +md
      margin-bottom: -12px
  &__content
    display: flex
    align-items: flex-start
    justify-content: space-between
    +lg
      flex-direction: column
    +sm
      padding: 16px
      background: rgba(40, 36, 57, 1)
      border-radius: 12px
  &__title
    margin-bottom: 24px
    +md
      margin-bottom: 16px
.recommend
  &__card
    width: 282px !important
    padding-right: 20px
.genres
  &__card
    margin-right: 15px
</style>

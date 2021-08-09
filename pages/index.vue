<template>
  <div>

    <!-- Hot adapted = true // integrate = true-->
    <section class="section hot">
      <b-container>
        <div class="hot-tabs">
          <tab-panel 
              v-if="mainPage !== null" 
              :data="mainPage.slider" 
          />
        </div>
      </b-container>
    </section>

    <!-- Recommend slider  adapted = true // integrate = true   -->
    <section class="section recommend">
      <b-container>
        <section-header 
          link-label="Смотреть все" 
          icon="/images/recommend.svg" 
          title="Рекомендуем" 
          to="/catalog"
        />
        
        <g-recommend-slider 
          v-if="mainPage !== null" 
          :data="mainPage.recommendations" 
        />
      </b-container>
    </section>

    <!-- Banner 1  adapted = true // integrate = true  -->
    <section 
        class="section"
        v-if="mainPage !== null && mainPage.inserts.length > 0"
    >
      <b-container >
        <section-header 
          title-style="text-h3" 
          :title="mainPage.inserts[0].overInsert"
        />
        <banner
          :title="mainPage.inserts[0].smallDescription"
          :text="mainPage.inserts[0].description"
          :image="mainPage.inserts[0].background"
          :button-label="mainPage.inserts[0].textOnButton"
        />
      </b-container>
    </section>

    <!-- Fire Slider  adapted = true // integrate = false -->
    <section class="section">
      <b-container >
        <section-header 
          link-label="Смотреть все" 
          icon="/images/fire.svg" 
          title="Хиты продаж" 
          to="/catalog"
        />
        <g-recommend-slider 
          v-if="mainPage !== null" 
          :data="mainPage.hits"
        />
      </b-container>
    </section>

    <!-- Banner 2  adapted = true // integrate = true  -->
    <section 
      class="section"
      v-if="mainPage !== null && mainPage.inserts.length > 1"
    >
      <b-container >
        <section-header
          title-style="text-h3"
          :title="mainPage.inserts[1].overInsert"
        />
        <banner
          :title="mainPage.inserts[1].smallDescription"
          :text="mainPage.inserts[1].description"
          :image="mainPage.inserts[1].background"
          :button-label="mainPage.inserts[1].textOnButton"
        />
      </b-container>
    </section>

    <!-- New Games Slider  adapted = true // integrate = true -->
    <section class="section">
      <b-container >
        <section-header
          link-label="Смотреть все"
          icon="/images/icons/new-items.svg"
          title="Новинки"
          to="catalog"
        />
        <g-recommend-slider
          v-if="mainPage !== null"
          :data="mainPage.novelties"
        />
      </b-container>
    </section>

    <!-- Banner 3  adapted = true // integrate = true  -->
    <section
      class="section"
      v-if="mainPage !== null && mainPage.inserts.length > 1"
    >
      <b-container >
        <section-header
          title-style="text-h3"
          :title="mainPage.inserts[1].overInsert"
        />
        <banner
          :title="mainPage.inserts[1].smallDescription"
          :text="mainPage.inserts[1].description"
          :image="mainPage.inserts[1].background"
          :button-label="mainPage.inserts[1].textOnButton"
        />
      </b-container>
    </section>

    <!-- Sales Slider  adapted = true // integrate = true -->
    <section class="section">
      <b-container >
        <section-header
          link-label="Смотреть все"
          icon="/images/icons/sale.svg"
          title="Распродажа"
          to="/catalog"
        />
        <g-recommend-slider
          v-if="mainPage !== null"
          :data="mainPage.saleOuts"
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
            <rounded-button 
                class="sales-section__button g-pr-none-sm g-pl-none-sm" 
                to="/catalog?minPrice=0&maxPrice=10000" 
                label="до 100 ₽"
            />
            <rounded-button 
                class="sales-section__button g-pr-none-sm g-pl-none-sm"
                to="/catalog?minPrice=0&maxPrice=20000"
                label="до 200 ₽"
            />
            <rounded-button 
                class="sales-section__button g-pr-none-sm g-pl-none-sm"
                to="/catalog?minPrice=0&maxPrice=30000"
                label="до 300 ₽"
            />
            <rounded-button 
                class="sales-section__button g-pr-none-sm g-pl-none-sm g-mr-none"
                to="/catalog?minPrice=0&maxPrice=50000"
                label="до 500 ₽"
            />
            <rounded-button 
                class="sales-section__button g-pr-none-sm g-pl-none-sm"
                to="/catalog?minPrice=0&maxPrice=60000"
                label="до 600 ₽"
            />
            <rounded-button 
                class="sales-section__button g-pr-none-sm g-pl-none-sm"
                to="/catalog?minPrice=0&maxPrice=80000"
                label="до 800 ₽"
            />
            <rounded-button 
                class="sales-section__button g-pr-none-sm g-pl-none-sm"
                to="/catalog?minPrice=0&maxPrice=90000"
                label="до 900 ₽"
            />
            <rounded-button 
                class="sales-section__button g-pr-none-sm g-pl-none-sm g-mr-none"
                to="/catalog?minPrice=0&maxPrice=100000"
                label="до 1000 ₽"
            />
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

    <!-- Genres  adapted = true // integrate = true -->
    <section class="section genres">
      <b-container>
        <section-header 
            title="Игры по жанрам" 
            link-label="Все жанры" 
            to="/catalog"
        />
  
        <g-genre-slider
          v-if="mainPage !== null"
          :data="mainPage.categories" 
        />
      </b-container>
    </section>

    <!-- Comments  adapted = true // integrate = false -->
    <section 
        class="section comments"
        v-if="comments !== null"
    >
      <b-container>
        <section-header title="Отзывы" link-label="Все отзывы" />
        
        <g-comment-slider :data="comments" />
      </b-container>
    </section>

    <!-- Platforms  adapted = true -->
    <section class="section platforms">
      <b-container>
        <div 
          class="platforms__content"
        >
          <h2>Платформы</h2>
          <div 
            class="platforms__list"
            v-if="mainPage !== null && mainPage.services !== null"
          >
            <div 
              class="platforms__wrapper"
              v-for="item in mainPage.services"
              :key="item.id"
            >
              <div class="platforms__platform">
                <img :src="item.background" alt="">
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
import { mapState } from 'vuex'
import GRecommendSlider from "~/components/slider/RecommendSlider";
import GGenreSlider from "~/components/slider/GenreSlider";

export default {
  components: {
    GGenreSlider,
    GRecommendSlider,
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
  async mounted () {
    try {
      await this.$store.dispatch('getMainPage')
        await this.$store.dispatch('comments/getComments')
    } catch (e) {
      
    }
  },
  computed: {
    ...mapState({
      mainPage: state => state.mainPage,
        comments: state => state.comments.comments
    })
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

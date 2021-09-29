<template>
  <div>
    <!-- News top  adapted = true   -->
    <section>
      <b-container>
        <div class="news__top">
          <bread-crumb :links="links" />

          <h1 class="news__title">Новости</h1>
        </div>
      </b-container>
    </section>

    <!-- Games  adapted = true  -->
    <section v-if="sliderNews !== null">
      <b-container>
        <div class="news__games-top">
          <show-all label="Все категории игр" />
        </div>

        <div class="news__games">
          <g-game-news-slider
            :data="sliderNews"
          />
        </div>
      </b-container>
    </section>

    <!-- News  adapted = true  -->
    <section class="news__news">
      <b-container>
        <div
          class="news__block"
          v-if="cardNews !== null"
        >
          <g-news-card
            v-for="item in cardNews"
            :key="item.newsId"
            :id="item.newsId"
            :name="item.newsName"
            :desc="item.newsSmallDescription"
            :created-at="item.newsCreatedAt"
            :image="item.newsBackground"
          />
        </div>

        <main-button color="gray" label="еще новости" size="xl" full-width />
      </b-container>
    </section>
  </div>
</template>

<script>
import BreadCrumb from '~/components/BreadCrumb'
import ShowAll from '~/components/buttons/MainLink'
import GGameNews from '~/components/cards/GameNews'
import GGameNewsSlider from '~/components/slider/GameNews'
import GNewsCard from '~/components/cards/NewsCard'
import MainButton from '~/components/buttons/MainButton'
import { mapState } from 'vuex'

export default {
  components: {
    MainButton,
    GNewsCard,
    GGameNewsSlider,
    GGameNews,
    ShowAll,
    BreadCrumb,
  },
  name: 'GNewsPage',
  layout: 'default',
  data: () => {
    return {
      links: [
        { to: '/', label: 'Главная' },
        { to: '/news', label: 'Новости' },
      ],
    }
  },
  computed: {
    ...mapState({
      sliderNews: (state) => state.news.sliderNews,
      cardNews: (state) => state.news.cardNews,
    }),
  },
  async mounted() {
    try {
      await this.$store.dispatch('news/getSliderNews')
      await this.$store.dispatch('news/getCardNews')
    } catch (e) {
      this.$bvToast.toast('Ошибка загрузки страницы!', {
        title: 'Что-то пошло не так(',
        variant: 'danger',
        solid: true,
        appendToast: true,
      })
    }
  },
}
</script>

<style lang="sass">
@import '../../theme/vars'
@import '../../theme/mix'
.news
    &__block
        margin-bottom: 40px
        +lg
            display: flex
            flex-wrap: wrap
            justify-content: space-between
            margin-bottom: 16px

    &__news
        padding: 32px 0 48px
        +lg
            padding-bottom: 28px

    &__games
        padding-bottom: 32px
        position: relative
        +md
            padding-bottom: 30px

    &__games-top
        display: flex
        justify-content: flex-end
        padding: 24px 0

    &__title
        margin-top: 32px
        +md
            margin-top: 25px

    &__top
        padding: 41px 0 16px
        border-bottom: 1px solid rgba(154, 147, 170, 0.3)
        +md
            padding: 25px 0 12px
</style>

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
    <section>
      <b-container>
        <div class="news__games-top">
          <show-all label="Все жанры игр" />
        </div>
        
        <div class="news__games">
          <g-game-news-slider />
        </div>
      </b-container>
    </section>

    <!-- News  adapted = true  -->
    <section class="news__news">
      <b-container>
        <div class="news__block">
          <g-news-card />
          <g-news-card />
          <g-news-card />
          <g-news-card />
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
import GNewsCard from "~/components/cards/NewsCard";
import MainButton from "~/components/buttons/MainButton";
export default {
  components: {MainButton, GNewsCard, GGameNewsSlider, GGameNews, ShowAll, BreadCrumb },
  name: 'GNewsPage',
  layout: 'default',
  data: () => {
    return {
      links: [
        { to: '/', label: 'Главная' },
        { to: '/news', label: 'Новости' }
      ]
    }
  }
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

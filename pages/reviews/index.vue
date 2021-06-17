<template>
  <div>
    <!-- Reviews top  adapted = true   -->
    <section>
      <b-container>
        <div class="reviews__top">
          <bread-crumb :links="links" />

          <h1 class="reviews__title">Обзоры</h1>
        </div>
      </b-container>
    </section>

    <!-- Reviews slider  adapted = true  -->
    <section>
      <b-container>
        <div class="reviews__games-top">
          <show-all label="Все жанры игр" />
        </div>

        <div class="reviews__cards">
          <g-reviews-page-slider />
        </div>
      </b-container>
    </section>

    <!-- Reviews cards  adapted = true  -->
    <section class="reviews__block">
      <b-container>
        <div class="reviews__reviews">
          <review-card class="reviews__review" />
          <review-card class="reviews__review" />
        </div>
        
        <main-button color="gray" label="еще обзоры" size="xl" full-width />
      </b-container>
    </section>
  </div>
</template>
<script>
import BreadCrumb from '~/components/BreadCrumb'
import ShowAll from "~/components/buttons/MainLink";
import GReviewsPageSlider from "~/components/slider/ReviewsPageSlider";
import ReviewCard from "~/components/cards/ReviewCard";
import MainButton from "~/components/buttons/MainButton";
export default {
  components: {MainButton, ReviewCard, GReviewsPageSlider, ShowAll, BreadCrumb},
  data: () => {
    return {
      links: [
        { to: '/', label: 'Главная' },
        { to: '/reviews', label: 'Обзоры' }
      ]
    }
  }
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'  
.reviews
  &__reviews
    margin-bottom: 40px
    +lg
      display: flex
      justify-content: space-between
      margin-bottom: 16px
    +md
      justify-content: center
      flex-direction: column
      align-items: center
  &__review
    +lg
      width: calc(50% - 10px)
      margin-bottom: 16px !important
      .review-card
        width: 100%
    +md
      width: 70%
    +sm
      width: 100%
    &:not(:last-child)
      margin-bottom: 24px
      +lg
        margin-bottom: 0
  &__block
    padding: 32px 0 48px
    +lg
      padding-top: 20px
      padding-bottom: 28px
  &__games-top
    display: flex
    justify-content: flex-end
    padding: 24px 0
  &__cards
    padding-bottom: 32px
    position: relative
    +lg
      padding-bottom: 20px
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

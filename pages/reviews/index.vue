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
import ShowAll from '~/components/buttons/MainLink'
import GReviewsPageSlider from '~/components/slider/ReviewsPageSlider'
import ReviewCard from '~/components/cards/ReviewCard'
import MainButton from '~/components/buttons/MainButton'
export default {
  components: {
    MainButton,
    ReviewCard,
    GReviewsPageSlider,
    ShowAll,
    BreadCrumb,
  },
  data: () => {
    return {
      links: [
        { to: '/', label: 'Главная' },
        { to: '/reviews', label: 'Обзоры' },
      ],
    }
  },
}
</script>

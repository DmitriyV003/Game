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
    <section v-if="reviews.length > 0">
      <b-container>
        <div class="reviews__games-top">
          <show-all
            label="Все жанры игр"
            to="/catalog?type=games&page=1"
          />
        </div>

        <div class="reviews__cards">
          <g-reviews-page-slider
            :data="games"
          />
        </div>
      </b-container>
    </section>

    <!-- Reviews cards  adapted = true  -->
    <section
      class="reviews__block"
      v-if="reviews.length > 0"
    >
      <b-container>
        <div class="reviews__reviews">
          <review-card
            v-for="item in reviews"
            class="reviews__review"
            :key="item.id"
            v-bind="item"
          />
        </div>

        <main-button
          color="gray"
          label="еще обзоры"
          size="xl"
          full-width
        />
      </b-container>
    </section>
  </div>
</template>
<script>
import BreadCrumb         from '~/components/BreadCrumb'
import ShowAll            from '~/components/buttons/MainLink'
import GReviewsPageSlider from '~/components/slider/ReviewsPageSlider'
import ReviewCard         from '~/components/cards/ReviewCard'
import MainButton         from '~/components/buttons/MainButton'
import { mapState }       from 'vuex'
export default {
  components: {
    MainButton,
    ReviewCard,
    GReviewsPageSlider,
    ShowAll,
    BreadCrumb,
  },
  async mounted() {
    try {
      await this.$store.dispatch('comments/getCommentRecommendedGames')
      await this.$store.dispatch('reviews/getReviews')
    } catch (e) {
      this.$bvToast.toast('Ошибка загрузки страницы!', {
        title: 'Что-то пошло не так(',
        variant: 'danger',
        solid: true,
        appendToast: true,
      })
    }
  },
  computed: {
    ...mapState({
      reviews: (state) => state.reviews.reviews,
      games: (state) => state.comments.recommendedGames,
    }),
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

<template>
  <div>
    <!-- Comments top  adapted = true   -->
    <section>
      <b-container>
        <div class="reviews__top">
          <bread-crumb :links="links" />

          <h1 class="reviews__title">Отзывы</h1>
        </div>
      </b-container>
    </section>

    <!-- Comments slider  adapted = true  -->
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

    <!-- Comments cards  adapted = true  -->
    <section class="reviews__block">
      <b-container>
        <div class="reviews__comments">
          <comment-card class="reviews__comment" />
          <comment-card class="reviews__comment" />
          <comment-card class="reviews__comment" />
          <comment-card class="reviews__comment" />
        </div>

        <main-button color="gray" label="больше отзывов" size="xl" full-width />
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
import CommentCard from "~/components/cards/CommentCard";
export default {
  components: {CommentCard, MainButton, ReviewCard, GReviewsPageSlider, ShowAll, BreadCrumb},
  name: 'CommentsPage',
  data: () => {
    return {
      links: [
        { to: '/', label: 'Главная' },
        { to: '/comments', label: 'Отзывы' }
      ]
    }
  }
}  
</script>

<style lang="sass">
@import 'theme/_mix'
@import 'theme/_vars'  
.reviews  
  &__comments
    display: flex
    justify-content: space-between
    flex-wrap: wrap
    margin-bottom: 20px
    +md
      margin-bottom: 16px
  &__comment
    margin-bottom: 20px
    width: calc(50% - 10px)
    +md
      width: 80%
      margin-left: auto
      margin-right: auto
      margin-bottom: 16px
    +sm
      width: 100%
    .comment-card
      width: 100%
</style>

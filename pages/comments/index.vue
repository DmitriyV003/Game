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
    <section v-if="games !== null">
      <b-container>
        <div class="reviews__games-top">
          <show-all label="Все жанры игр" to="/catalog" />
        </div>

        <div class="reviews__cards">
          <g-reviews-page-slider :data="games" />
        </div>
      </b-container>
    </section>

    <!-- Comments cards  adapted = true  -->
    <section class="reviews__block" v-if="comments !== null">
      <b-container>
        <div class="reviews__comments">
          <comment-card
            v-for="item in comments"
            class="reviews__comment"
            :id="item.id"
            :key="item.id"
            :name="item.itemName"
            :image="item.itemHeaderImage"
            :rating="Number(item.itemRate)"
            :avatar="item.userAvatar"
            :nickname="item.userNickname"
            :text="item.userFeedbackText"
            :date="item.createdAt"
          />
        </div>

        <main-button
          color="gray"
          label="больше отзывов"
          @click.native="getMoreComments"
          size="xl"
          v-if="lastPage !== currentPage"
          full-width
        />
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
import CommentCard from '~/components/cards/CommentCard'
import { mapState } from 'vuex'
export default {
  components: {
    CommentCard,
    MainButton,
    ReviewCard,
    GReviewsPageSlider,
    ShowAll,
    BreadCrumb,
  },
  name: 'CommentsPage',
  async mounted() {
    try {
      await this.$store.dispatch('comments/getComments')
      await this.$store.dispatch('comments/getCommentRecommendedGames')
      this.$store.commit('comments/SET_CURRENT_PAGE', Number(this.$route.query.page) || 1)
    } catch (e) {
      this.$bvToast.toast('Ошибка загрузки страницы!', {
        title: 'Что-то пошло не так(',
        variant: 'danger',
        solid: true,
        appendToast: true,
      })
    }
  },
  methods: {
    async getMoreComments () {
      try {
        await this.$store.dispatch('comments/getMoreComments')
        await this.$router.push({
          path: '/comments',
          query: { ...this.$route.query, page: this.currentPage },
        })
      } catch (e) {
        this.$bvToast.toast('Ошибка загрузки страницы!', {
          title: 'Что-то пошло не так(',
          variant: 'danger',
          solid: true,
          appendToast: true,
        })
      }
    }
  },
  computed: {
    ...mapState({
      comments: (state) => state.comments.comments,
      games: (state) => state.comments.recommendedGames,
      currentPage: (state) => state.comments.currentPage,
      lastPage: (state) => state.comments.lastPage,
    }),
  },
  data: () => {
    return {
      links: [
        { to: '/', label: 'Главная' },
        { to: '/comments', label: 'Отзывы' },
      ],
    }
  },
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

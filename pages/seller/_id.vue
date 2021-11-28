<template>
  <div>
    <!-- For sellers top  adapted = true -->
    <section class="for-sellers__top">
      <b-container>
        <!-- Banner  adapted = true -->
        <g-seller-banner
          v-if="sellerPage !== null"
          :name="sellerPage.name"
          :surname="sellerPage.surname"
          :nickname="sellerPage.nickname"
          :likes="sellerPage.feedbacks.likes"
          :dislikes="sellerPage.feedbacks.dislikes"
          :items="sellerPage.items"
          :purchases="sellerPage.purchases"
          :avatar="sellerPage.avatar"
          :feedback="sellerPage.feedbacks.countFeedbacks"
        />
      </b-container>
    </section>

    <!-- Seller comments  adapted = true -->
    <section
      class="section"
      v-if="sellerPage !== null && sellerPage.feedbacks.userComments !== null"
    >
      <b-container>
        <section-header title="Отзывы о продавце" />

        <div class="g-comments">
          <b-row>
            <b-col
              xl="4"
              lg="4"
              md="6"
              v-for="item in sellerPage.feedbacks.userComments"
              :key="item.commentId"
            >
              <g-seller-comment
                :nickname="item.nickname"
                :text="item.comment"
                :date="item.time"
                :avatar="item.avatar"
              />
            </b-col>
          </b-row>
        </div>
      </b-container>
    </section>

    <!-- Seller catalog  adapted = true -->
    <section
      class="section"
      v-if="sellerGames !== null"
      id="catalog"
    >
      <b-container>
        <div class="catalog-top-section__content">
          <g-catalog-section-header title="Каталог" :caption="`${sellerGames.length} продуктов`" />
        </div>

        <div class="g-seller-games">
          <b-row>
            <b-col
              class="catalog__card"
              xl="4"
              lg="4"
              md="4"
              sm="6"
              v-for="item in sellerGames"
            >
              <game-card
                :id="item.name"
                adaptive-sm
                :image="item.background"
                :title="item.name"
                :rating="Number(item.rate)"
                type="game"
              />
            </b-col>
          </b-row>

<!--          <button class="button-reboot g-seller-games__all">все игры</button>-->
        </div>
      </b-container>
    </section>

    <!-- Achievements  adapted = true -->
<!--    <section class="section">-->
<!--      <b-container>-->
<!--        <section-header title="Достижения" />-->

<!--        <div class="g-comments">-->
<!--          <g-achievement-slider :data="[{}]" />-->
<!--        </div>-->
<!--      </b-container>-->
<!--    </section>-->

    <!-- Seller games  adapted = true -->
    <section
      class="section"
      v-if="sellerGames !== null"
    >
      <b-container>
        <section-header title="Рекомендации" />

        <g-seller-game-slider
          :data="sellerGames"
        />
      </b-container>
    </section>

    <!-- Seller reviews  adapted = true -->
<!--    <section class="section">-->
<!--      <b-container>-->
<!--        <section-header title="Обзоры" />-->

<!--        <g-seller-review-slider :data="[{}]" />-->
<!--      </b-container>-->
<!--    </section>-->
  </div>
</template>

<script>
import SectionHeader from '~/components/SectionHeader'
import GSellerComment from '~/components/items/CommentItem'
import icons from '~/mixins/icons'
import GSellerBanner from '~/components/banners/seller-banner/GSellerBanner'
import GCatalogSectionHeader from '~/components/catalog/CatalogSectionHeader'
import GameCard from '~/components/cards/GameCard'
import GAchievementCard from '~/components/cards/AchievementCard'
import GAchievementSlider from '~/components/slider/AchievementSlider'
import GSellerGameSlider from '~/components/slider/SellerGameSlider'
import GSellerReviewSlider from '~/components/slider/SellerReviewSlider'
import { mapState } from 'vuex'

export default {
  name: 'GForSellers',
  components: {
    GSellerReviewSlider,
    GSellerGameSlider,
    GAchievementSlider,
    GAchievementCard,
    GameCard,
    GCatalogSectionHeader,
    GSellerBanner,
    GSellerComment,
    SectionHeader,
  },
  mixins: [icons],
  layout: 'default',
  data: () => {
    return {}
  },
  computed: {
    ...mapState({
      sellerPage: (state) => state.sellerPage,
      sellerGames: (state) => state.seller.sellerGames,
    }),
  },
  async mounted() {
    try {
      await this.$store.dispatch('getSellerPage', this.$route.params.id)
      await this.$store.dispatch('seller/getSellerItems', this.$route.params.id)
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
@import 'theme/_vars'
@import 'theme/_mix'
.g-seller-games
    margin-top: 24px
    &__all
        margin-top: 20px
        padding: 14px
        display: flex
        align-items: center
        justify-content: center
        width: 100%
        font-weight: 500
        text-transform: uppercase
        color: $white
        font-size: 16px
        line-height: 22px
        background: rgba(255, 255, 255, 0.04)
        border-radius: 8px
        cursor: pointer
        &:hover
            background: rgba(255, 255, 255, 0.1)
</style>

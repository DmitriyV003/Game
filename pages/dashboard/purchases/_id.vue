<template>
  <div class="g-page">
    <!-- Popup New dispute  adapted =  -->
    <g-new-dispute />

    <b-container>
      <h1 class="title">Личный кабинет</h1>

      <b-row>
        <b-col xl="3" lg="3">
          <!-- Dashboard navigation  adapted =  -->
          <g-dashboard-navigation />
        </b-col>

        <!-- Purchases adapted = true -->
        <b-col xl="9" lg="9" v-if="purchase !== null">
          <div class="purchase__top">
            <show-all
              to="/dashboard/purchases"
              reverse
              label="Назад к списку"
            />
          </div>

          <!-- Item info adapted = true -->
          <g-purchased
            class="purchase__purchased"
            :name="purchase.itemInfo.itemName"
            :price="Number(purchase.keyPrice)"
            :code="purchase.key"
            :image="purchase.itemInfo.itemBackground"
          />

          <b-row tag="form">
            <!-- Comment form adapted = true -->
            <b-col
              xl="8"
              order-xl="0"
              order-lg="5"
              order-md="5"
              order-sm="5"
              order="5"
            >
              <g-comment-form
                class="purchase__comment"
                :name="purchase.sellerInfo.sellerName"
                :surname="purchase.sellerInfo.sellerSurname"
              />
            </b-col>

            <!-- Like/Dislike adapted = true -->
            <b-col xl="4">
              <g-like-dislike
                :name="purchase.sellerInfo.sellerName"
                :nickname="purchase.sellerInfo.sellerNickname"
                :surname="purchase.sellerInfo.sellerSurname"
              />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import GDashboardNavigation from '~/components/dashboard/Navigation'
import GPurchaseItem from '~/components/dashboard/PurchaseItem'
import RoundedButton from '~/components/buttons/RoundedButton'
import GSortButton from '~/components/dashboard/SortButton'
import icons from '~/mixins/icons'
import ShowAll from '~/components/buttons/MainLink'
import GPurchased from '~/components/dashboard/GPurchased'
import GCommentForm from '~/components/GCommentForm'
import GLikeDislike from '~/components/cart/LikeDislike'
import GNewDispute from '~/components/popups/NewDispute'
import { mapState } from 'vuex'

export default {
  name: 'GDashboardPurchasePage',
  mixins: [icons],
  components: {
    GNewDispute,
    GLikeDislike,
    GCommentForm,
    GPurchased,
    ShowAll,
    GSortButton,
    RoundedButton,
    GPurchaseItem,
    GDashboardNavigation,
  },
  async mounted() {
    try {
      await this.$store.dispatch(
        'purchases/fetchPurchase',
        { id: this.$route.params.id, type: 'game' }
      )
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
      purchase: (state) => state.purchases.purchase,
    }),
  },
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.purchase
    &__comment
        +xl
            margin-top: 24px
        +md
            margin-top: 20px

    &__purchased
        margin-bottom: 24px
        +md
            margin-bottom: 20px

    &__top
        margin-bottom: 24px
        +lg
            margin-top: 24px

.g-page
    padding: 40px 0 60px
    +md
        padding-bottom: 28px

    .title
        margin-bottom: 32px
        +md
            margin-bottom: 24px
</style>

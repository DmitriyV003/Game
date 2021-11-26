<template>
  <div class="g-page">
    <b-container>
      <h1 class="title">Личный кабинет</h1>

      <b-row>
        <b-col xl="3" lg="3">
          <!-- Dashboard navigation  adapted =  -->
          <g-dashboard-navigation />
        </b-col>

        <!-- Purchases adapted = true -->
        <b-col xl="9" lg="9">
          <div class="purchases__top">
            <div class="purchases__filter">
              <vue-slick
                ref="sortSlider"
                :variable-width="true"
                :slides-to-show="1"
                :slides-to-scroll="1"
                :arrows="false"
                :dots="false"
                :infinite="false"
              >
                <g-sort-button
                  @click.native="changeFilter('games')"
                  :active="activeFilter === 'games'"
                  class="purchases__btn"
                  label="Игры"
                />
                <g-sort-button
                  @click.native="changeFilter('software')"
                  :active="activeFilter === 'software'"
                  class="purchases__btn"
                  label="Софт"
                />
<!--                <g-sort-button-->
<!--                  @click.native="activeFilter = 'skin'"-->
<!--                  :active="activeFilter === 'skin'"-->
<!--                  class="purchases__btn"-->
<!--                  label="Скины"-->
<!--                />-->
<!--                <g-sort-button-->
<!--                  @click.native="activeFilter = 'case'"-->
<!--                  :active="activeFilter === 'case'"-->
<!--                  class="purchases__btn"-->
<!--                  label="Кейсы"-->
<!--                />-->
              </vue-slick>
            </div>

            <div class="purchases__sort_mobile">
              <div>
                <p class="purchases__mini-title">Мои игры</p>
                <div
                  class="purchases__sort"
                  @click="purchases.sort(sortByDate)"
                >
                  <span>Сначала новые</span>
                  <img src="/images/filter.svg" alt="" />
                </div>
              </div>

              <button class="button-reboot purchases__add">
                <plus-icon class="icon" />
              </button>
            </div>

            <div class="purchases__sort purchases__sort_desktop">
              <span>Сначала новые</span>
              <img src="/images/filter.svg" alt="" />
            </div>
          </div>

          <b-row>
<!--            <b-col-->
<!--              xl="4"-->
<!--              lg="4"-->
<!--              md="6"-->
<!--              class="-->
<!--                g-purchase-item__col-->
<!--                d-xl-block d-lg-block d-md-none d-sm-none-->
<!--              "-->
<!--            >-->
<!--              <g-add-item />-->
<!--            </b-col>-->
            <b-col
              xl="4"
              lg="4"
              md="6"
              class="g-purchase-item__col"
              v-if="purchases.length > 0 || purchases !== null"
              v-for="purchase in purchases"
              :key="purchase.purchaseId"
            >
              <g-purchase-item
                :id="purchase.keyId"
                :name="purchase.itemName"
                :code="purchase.key"
                :platform="purchase.itemPlatform.join(', ')"
                :picture="purchase.itemBackground"
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
import { mapGetters, mapState } from 'vuex'
import GAddItem from '~/components/AddItem'

export default {
  name: 'GDashboardPurchasesPage',
  mixins: [icons],
  middleware: ['auth'],
  components: {
    GAddItem,
    GSortButton,
    RoundedButton,
    GPurchaseItem,
    GDashboardNavigation,
  },
  computed: {
    ...mapState({
      purchases: (state) => state.purchases.purchases,
      purchaseType: (state) => state.purchases.type,
    }),
    activeFilter: {
      get () {
        return this.purchaseType
      },
      set (value) {
        this.$store.commit('purchases/SET_TYPE', value)
      }
    }
  },
  methods: {
    async changeFilter(filter) {
      this.activeFilter = filter

      try {
        await this.$store.dispatch('purchases/getAll', filter)
      } catch (e) {
        this.$bvToast.toast('Ошибка загрузки страницы!', {
          title: 'Что-то пошло не так(',
          variant: 'danger',
          solid: true,
          appendToast: true,
        })
      }
    },
    sortByDate(a, b) {
      return new Date(a.createdAt) > new Date(b.createdAt)
        ? 1
        : new Date(a.createdAt) < new Date(b.createdAt)
        ? -1
        : 0
    },
  },
  async mounted() {
    try {
      await this.$store.dispatch('purchases/getAll', this.activeFilter)
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
.purchases
    &__add
        display: flex
        align-items: center
        justify-content: center
        flex-shrink: 0
        border-radius: 50%
        width: 56px
        height: 56px
        color: $white
        font-size: 30px
        background: #643EFF

    &__mini-title
        color: $white
        margin-bottom: 8px
        font-weight: 600
        font-size: 20px
        line-height: 28px

    &__filter
        width: calc(100% - 150px)
        +lg
            width: 100%

    &__sort
        display: flex
        align-items: center
        flex-shrink: 0
        cursor: pointer

        &_desktop
            +lg
                display: none

        &_mobile
            display: none
            +lg
                display: flex
                align-items: center
                justify-content: space-between
                margin-top: 24px

        span
            color: $white
            font-size: 14px
            line-height: 20px
            margin-right: 12px

    &__btn
        padding-right: 16px

    &__top
        margin-bottom: 24px
        display: flex
        justify-content: space-between
        align-items: center
        +lg
            display: block
            margin-top: 24px
</style>

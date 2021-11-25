<template>
  <div class="g-page">
    <b-container>
      <h1 class="title">Личный кабинет</h1>

      <b-row>
        <b-col xl="3" lg="3">
          <!-- Dashboard navigation  adapted = true -->
          <g-dashboard-navigation />
        </b-col>

        <b-col xl="9" lg="9">
          <div class="g-sales__top">
            <div class="g-sales__filters">
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
                  :active="type === 'games'"
                  class="g-sales__btn"
                  label="Игры (5)"
                  @click.native="changeSaleType('games')"
                />
                <g-sort-button
                  :active="type === 'software'"
                  class="g-sales__btn"
                  label="Софт (10)"
                  @click.native="changeSaleType('software')"
                />
                <g-sort-button
                  :active="type === 'swiches'"
                  class="g-sales__btn"
                  label="Скины (2)"
                  @click.native="changeSaleType('swiches')"
                />
                <g-sort-button
                  :active="type === 'cases'"
                  class="g-sales__btn"
                  label="Кейсы (0)"
                  @click.native="changeSaleType('cases')"
                />
              </vue-slick>
            </div>
          </div>

          <div class="g-sales__sales">
            <b-row class="align-items-end">
              <b-col xl="4" lg="5" md="6">
                <div class="g-sales__box">
                  <g-drop-menu
                    class="g-sales__drop"
                    placeholder="Статус продаж"
                    :links="salesStatuses"
                    @input="changeSalesStatus"
                  />

                  <button class="button-reboot g-sales__add">
                    <plus-icon />
                  </button>
                </div>
              </b-col>

              <b-col xl="4" offset-xl="4" offset-lg="3" lg="4" md="6">
                <div class="g-sales__first">
                  <span class="text">Сначала новые</span>
                  <filter-icon class="icon" />
                </div>
              </b-col>
            </b-row>
          </div>

          <b-row>
            <b-col class="g-sales__item" xl="4" lg="4" md="4">
              <g-add-item
                @click.native="goTo"
                label="Добавить игру на продажу"
              />
            </b-col>

            <b-col class="g-sales__item" xl="4" lg="4" md="4">
              <g-sale-item />
            </b-col>

            <b-col class="g-sales__item" xl="4" lg="4" md="4">
              <g-sale-item disabled />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import GDashboardNavigation from '~/components/dashboard/Navigation'
import GSortButton          from '~/components/dashboard/SortButton'
import GDropMenu            from '~/components/DropMenu'
import icons                from '~/mixins/icons'
import GSaleItem            from '~/components/dashboard/SaleItem'
import GAddItem             from '~/components/AddItem'
import GAddKeysPopup        from '~/components/popups/AddKeysPopup'
import { mapState }         from 'vuex'

export default {
  components: {
    GAddKeysPopup,
    GAddItem,
    GSaleItem,
    GDropMenu,
    GSortButton,
    GDashboardNavigation,
  },
  data () {
    return {
      salesStatuses: [
        { label: 'Активные продажи', value: 'bought' },
        { label: 'Неактивные продажи', value: 'archived' },
      ]
    }
  },
  computed: {
    ...mapState({
      type: (state) => state.sales.type,
    }),
  },
  mixins: [icons],
  middleware: ['auth'],
  async mounted () {
    try {
      await this.$store.dispatch('sales/getSales')
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
    changeSalesStatus (status) {
      this.$store.dispatch('sales/changeSaleType', status)
    },
    async changeSaleType(saleType) {
      try {
        await this.$store.dispatch('sales/changeSaleType', saleType)
        await this.$store.dispatch('sales/getSales')
      } catch (e) {
        this.$bvToast.toast('Ошибка загрузки страницы!', {
          title: 'Что-то пошло не так(',
          variant: 'danger',
          solid: true,
          appendToast: true,
        })
      }
    },
    async goTo() {
      try {
        await this.$router.push('/dashboard/sales/add-new')
      } catch (e) {
        this.$bvToast.toast('Ошибка загрузки страницы!', {
          title: 'Что-то пошло не так(',
          variant: 'danger',
          solid: true,
          appendToast: true,
        })
      }
    },
  },
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.g-sales
    &__item
        margin-bottom: 24px
        +md
            margin-bottom: 16px

    &__drop
        +md
            width: calc(100% - 56px - 16px)

    &__box
        +md
            display: flex
            align-items: center
            justify-content: space-between

    &__add
        display: none
        +md
            display: flex
            margin-left: 16px
            width: 56px
            height: 56px
            border-radius: 50%
            background: #643EFF
            align-items: center
            justify-content: center
            color: $white
            font-size: 30px
            flex-shrink: 0

    &__first
        display: flex
        align-items: center
        cursor: pointer
        justify-content: flex-end
        +md
            margin-top: 20px
            justify-content: flex-start

        .icon
            color: rgba(100, 62, 255, 1)
            font-size: 18px

        .text
            margin-right: 12px
            font-size: 14px
            line-height: 20px
            color: $white
            letter-spacing: -0.4px

    &__sales
        padding: 24px 0
        +lg
            padding: 20px 0

    &__top
        padding-bottom: 24px
        border-bottom: 1px solid #9A93AA
        +lg
            margin-top: 24px
            border-bottom: none
            padding-bottom: 0

    &__btn
        padding-right: 16px
</style>

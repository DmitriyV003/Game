<template>
  <div class="g-page">
    <g-change-balance-popup />

    <b-container>
      <h1 class="title">Личный кабинет</h1>

      <b-row>
        <b-col xl="3" lg="3">
          <!-- Dashboard navigation  adapted = true -->
          <g-dashboard-navigation />
        </b-col>

        <b-col xl="9" lg="9">
          <!--  Manage balance  adapted = true  -->
          <div
            class="g-balance-change"
            v-if="balance !== null"
          >
            <div class="g-balance-change__line g-balance-change__line_current">
              <div class="g-balance-change__text">
                <span class="text-color-white text-weight-600 caption"
                  >Ваш баланс:</span
                >
                <span class="text-color-white text-weight-600 value"
                  >$ {{ balance.overallBalance }}</span
                >
              </div>
              <main-button
                @click.native="
                  eventBus.$emit('changeBalancePopupOpen', 'deposit')
                "
                class="g-balance-change__btn_desktop"
                color="primary"
                label="пополнить"
                size="xl"
              />
            </div>

            <div class="g-balance-change__line g-balance-change__line_freeze">
              <div class="g-balance-change__text">
                <span class="text-color-gray text-weight-400 caption_small"
                  >Заморожено:</span
                >
                <span class="text-color-gray text-weight-600 value_small"
                  >$ {{ balance.pendingBalance }}</span
                >
              </div>
              <main-button
                @click.native="
                  eventBus.$emit('changeBalancePopupOpen', 'deposit')
                "
                class="g-balance-change__btn g-balance-change__btn_mobile"
                color="primary"
                label="пополнить"
                size="xl"
              />
            </div>

            <div
              class="g-balance-change__line g-balance-change__line_available"
            >
              <div class="g-balance-change__text">
                <span class="text-color-gray text-weight-400 caption_small"
                  >Доступно к выводу:</span
                >
                <span class="text-color-white text-weight-600 value_small"
                  >$ {{ balance.availableBalance }}</span
                >
              </div>
              <main-button
                @click.native="
                  eventBus.$emit('changeBalancePopupOpen', 'withdraw')
                "
                class="g-balance-change__btn"
                color="secondary"
                label="Вывести себе"
                size="xl"
              />
            </div>
          </div>

          <!--  Promo code  adapted = true  -->
          <g-promo

          />

          <!--  Transactions  adapted = true -->
          <section>
            <div class="g-transactions">
              <div class="g-transactions__top">
                <h5>Транзакции</h5>
              </div>

              <div class="g-transactions__titles">
                <span class="g-transactions__title g-transactions__cell"
                  >Дата</span
                >
                <span
                  class="
                    g-transactions__title
                    g-transactions__cell
                    g-transactions__cell_long
                  "
                  >Продукт</span
                >
                <span class="g-transactions__title g-transactions__cell"
                  >Операция</span
                >
                <span
                  class="
                    g-transactions__title
                    g-transactions__cell
                    g-transactions__cell_right
                  "
                  >Сумма</span
                >
              </div>

              <div
                class="g-transactions__content"
                v-if="transactions.length > 0"
              >
                <div
                  class="g-transactions__line"
                  v-for="item in transactions"
                  :key="item.created_at"
                >
                  <span
                    class="
                      g-transactions__cell
                      g-transactions__cell_14
                      g-transactions__cell_date
                    "
                    >{{ new Date(item.created_at).toLocaleDateString() }}</span
                  >
                  <span
                    class="
                      g-transactions__cell
                      g-transactions__cell_long
                      g-transactions__cell_name
                    "
                    >{{ item.product }}</span
                  >
                  <span
                    class="
                      g-transactions__cell
                      g-transactions__cell_14
                      g-transactions__cell_action
                    "
                    >{{ item.action === 1 ? 'пополнение' : 'списание' }}
                  </span>
                  <span
                    class="
                      g-transactions__cell
                      g-transactions__cell_right
                      g-transactions__cell_price
                    "
                    > ${{ (item.action === 1 ? '+' : '-') + item.amount }}</span
                  >
                </div>
              </div>

              <div class="g-transactions__bottom">
<!--                <div class="g-transactions__per-page">-->
<!--                  <span class="caption">Rows per page:</span>-->
<!--                  <g-drop-menu-->
<!--                    :links="[-->
<!--                      { label: 10, value: 10 },-->
<!--                      { label: 20, value: 20 },-->
<!--                    ]"-->
<!--                    placeholder=""-->
<!--                    size="sm"-->
<!--                  />-->
<!--                </div>-->

                <div
                  class="g-transactions__nav"
                  v-if="meta !== null && links !== null"
                >
                  <span class="text"><span>{{ meta.from }}</span> of {{ meta.last_page }}</span>
                  <div
                    class="g-transactions__arrows g-transactions__arrows_desktop"
                  >
                    <chevron-left-icon
                      class="icon"
                      :class="{ 'icon_disable': links.prev === null }"
                      @click.native="links.prev === null ? '' : goToPage(meta.current_page - 1)"
                    />
                    <chevron-right-icon
                      class="icon"
                      :class="{ 'icon_disable': links.next === null }"
                      @click.native="links.next === null ? '' : goToPage(meta.current_page + 1)"
                    />
                  </div>
                </div>

                <div
                  class="g-transactions__arrows g-transactions__arrows_mobile"
                >
                  <chevron-left-icon class="icon" />
                  <chevron-right-icon class="icon" />
                </div>
              </div>
            </div>
          </section>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import GDashboardNavigation from '~/components/dashboard/Navigation'
import MainButton           from '~/components/buttons/MainButton'
import GInput               from '~/components/form-elements/Input'
import GPromo               from '~/components/dashboard/PromoCode'
import GDropMenu            from '~/components/DropMenu'
import icons                from '~/mixins/icons'
import GChangeBalancePopup  from '~/components/popups/ChangeBalance'
import { eventBus }         from '~/plugins/event-bus'
import { mapState }                   from 'vuex'
export default {
  components: {
    GChangeBalancePopup,
    GDropMenu,
    GPromo,
    GInput,
    MainButton,
    GDashboardNavigation,
  },
  computed: {
    ...mapState({
      balance: (state) => state.finance.balance,
      transactions: (state) => state.finance.transactions.data,
      links: (state) => state.finance.transactions.links,
      meta: (state) => state.finance.transactions.meta
    }),
  },
  methods: {
    async goToPage (page) {
      try {
        await this.$store.dispatch('finance/getTransactions', page)
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
  async mounted() {
    try {
      await this.$store.dispatch('finance/getBalance')
      await this.$store.dispatch('finance/getTransactions')
    } catch (e) {
      this.$bvToast.toast('Ошибка загрузки страницы!', {
        title: 'Что-то пошло не так(',
        variant: 'danger',
        solid: true,
        appendToast: true,
      })
    }
  },
  mixins: [icons],
  middleware: ['auth'],
  data: () => {
    return {
      eventBus
    }
  },
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.g-transactions
  padding: 24px 0
  background: #282439
  border-radius: 12px
  +md
    padding: 20px 0
  &__nav
    display: flex
    align-items: center
    +md
      flex-wrap: wrap
    .text
      font-size: 14px
      margin-right: 32px
      line-height: 20px
      color: $gray
      +md
        margin-right: 0
      span
        color: $white
  &__arrows
    display: flex
    align-items: center
    +md
      width: 100%
      justify-content: space-between
    &_mobile
      display: none
      +md
        display: flex
        margin-top: 12px
    &_desktop
      +md
        display: none
    .icon
      color: rgba(100, 62, 255, 1)
      cursor: pointer
      font-size: 30px
      &_disable
        opacity: 0.5
        cursor: initial
  &__per-page
    display: flex
    align-items: center
    margin-right: 24px
    .caption
      margin-right: 24px
      color: $gray
      font-size: 14px
      letter-spacing: -0.4px
      line-height: 20px
  &__bottom
    margin-top: 24px
    display: flex
    justify-content: flex-end
    align-items: center
    padding: 0 24px
    +md
      justify-content: space-between
      margin-top: 16px
      padding: 0 16px
      flex-wrap: wrap
  &__line
    display: flex
    align-items: center
    justify-content: space-between
    padding: 12px 24px
    +md
      padding: 7px 16px
      flex-wrap: wrap
    &:nth-child(2n)
      background: rgba(154, 147, 170, 0.05)
  &__cell
    font-size: 16px
    line-height: 24px
    color: $white
    flex: 1
    +md
      flex-basis: 50%
      font-size: 13px
      line-height: 16px
    &_date
      +md
        order: 10
        text-align: right
    &_action
      +md
        order: 9
    &_name
      +md
        order: 7
    &_price
      +md
        order: 8
        flex-basis: 15%
    &_right
      text-align: right
    &_long
      flex: 3
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      padding-right: 30px
      +md
        flex-basis: 85%
        padding-right: 0
    &_14
      font-size: 14px
      color: $gray
      +md
        font-size: 12px
  &__titles
    display: flex
    align-items: center
    padding: 12px 24px
    justify-content: space-between
    border-bottom: 1px solid rgba(154, 147, 170, 0.3)
    +md
      display: none
  &__title
    font-size: 14px
    color: $gray
    letter-spacing: -0.4px
    line-height: 20px
  &__top
    margin-bottom: 4px
    padding: 0 24px
    +md
      border-bottom: 1px solid rgba(154, 147, 170, 0.3)
      padding: 0 16px 20px 16px
      margin-bottom: 0
.g-balance-change
  padding: 24px
  background: #282439
  border-radius: 12px
  margin-bottom: 24px
  +lg
    margin-top: 24px
  +md
    padding: 24px 16px
    margin-bottom: 20px
  &__btn
    +md
      width: 100%
      margin-top: 28px
      .button
        width: 100%
    &_desktop
      +md
        display: none
    &_mobile
      display: none
      +md
        display: flex
  &__text
    display: flex
    flex-direction: column
    .value
      font-size: 32px
      line-height: 38px
      &_small
        font-size: 24px
        line-height: 28px
    .caption
      font-size: 20px
      line-height: 28px
      margin-bottom: 8px
      &_small
        font-size: 14px
        margin-bottom: 4px
        line-height: 20px
        letter-spacing: -0.4px
  &__line
    display: flex
    align-items: center
    justify-content: space-between
    +md
      flex-direction: column
      align-items: flex-start
    &_current
      margin-bottom: 28px
      +md
        margin-bottom: 24px
    &_freeze
      padding-bottom: 32px
      border-bottom: 1px solid rgba(154, 147, 170, 0.3)
      +md
        padding-bottom: 24px
    &_available
      margin-top: 32px
      +md
        margin-top: 24px
</style>

<template>
  <div class="topMenu">
    <b-container>
      <header class="header">
        <div class="header__line">
          <nuxt-link class="header__logo" to="/">
            <img src="/images/logo.svg" alt="" />
          </nuxt-link>

          <div class="header__links header__links_gray">
            <nuxt-link to="/for-sellers" class="header__link"
              >Продавцам</nuxt-link
            >
            <nuxt-link to="/for-customers" class="header__link"
              >Покупателям</nuxt-link
            >
            <nuxt-link to="/" class="header__link">Оплата</nuxt-link>
            <nuxt-link to="/legal" class="header__link">Гарантии</nuxt-link>
            <nuxt-link to="/" class="header__link">Стать партнером</nuxt-link>
          </div>

          <div v-if="user !== null" class="header__actions">
            <div class="action header__action">
              <div class="action__icon">
                <img src="/images/email.svg" alt="" />
              </div>
            </div>

<!--            <div class="action header__action">-->
<!--              <div class="action__icon">-->
<!--                <img src="/images/notification.svg" alt="" />-->
<!--              </div>-->
<!--            </div>-->
          </div>

          <Profile :user="user" class="header__user" />

          <nuxt-link v-if="user === null" class="header__signin" to="/sign-up"
            >Вход / Регистрация</nuxt-link
          >

          <div @click="dropMenu = true" class="header__burger">
            <img src="/images/icons/mobile menu.svg" alt="" />
          </div>
        </div>

        <div class="header__line">
          <div class="header__links">
            <a
              href="/catalog?type=games"
              class="header__link header__link_bold"
              >Игры
            </a>
            <a
              href="/catalog?type=software"
              class="header__link header__link_bold"
              >Софт
            </a>
            <nuxt-link exact to="/skin" class="header__link header__link_bold"
              >Скины
            </nuxt-link>
            <nuxt-link exact to="/" class="header__link header__link_bold"
              >Кейсы
            </nuxt-link>
            <nuxt-link exact to="/reviews" class="header__link header__link_bold"
              >Обзоры
            </nuxt-link>
            <nuxt-link exact to="/news" class="header__link header__link_bold"
              >Новости
            </nuxt-link>
            <nuxt-link
              exact
              to="/comments"
              class="header__link header__link_bold"
              >Отзывы
            </nuxt-link>
          </div>

          <Search
            class="header__search"
            @send-search="goToSearch"
            v-model="form.searchValue"
          />

          <Balance
            v-if="user !== null && balance !== null"
            class="header__balance"
            :overall-balance="balance.overallBalance"
            :pending-balance="balance.pendingBalance"
            :available-balance="balance.availableBalance"
          />

          <nuxt-link to="/cart" tag="div" class="custom-icon">
            <span
              class="custom-icon__indicator"
              v-if="cartItems.length > 0"
            ></span>
            <div class="custom-icon__main">
              <img src="/images/bag.svg" alt="" class="custom-icon__img" />
            </div>
          </nuxt-link>

          <div v-show="dropMenu" class="header__drop-menu">
            <div class="header__drop-wrapper">
              <div class="header__drop-top">
                <nuxt-link to="/">
                  <img
                    class="header__drop-logo"
                    src="/images/logo.svg"
                    alt=""
                  />
                </nuxt-link>

                <span class="header__drop-close">
                  <close-icon @click="dropMenu = false" />
                </span>
              </div>

              <div class="header__drop-links">
                <nuxt-link class="header__drop-link" to="/catalog?type=games">
                  <game-icon class="icon" />
                  <span class="text">Игры</span>
                </nuxt-link>

                <nuxt-link
                  class="header__drop-link"
                  to="/catalog?type=software"
                >
                  <code-icon class="icon" />
                  <span class="text">Софт</span>
                </nuxt-link>

                <nuxt-link class="header__drop-link" to="/legal">
                  <region-icon class="icon" />
                  <span class="text">Region free</span>
                </nuxt-link>

                <nuxt-link class="header__drop-link" to="/reviews">
                  <text-icon class="icon" />
                  <span class="text">Обзоры</span>
                </nuxt-link>

                <nuxt-link class="header__drop-link" to="/news">
                  <news-icon class="icon" />
                  <span class="text">Новости</span>
                </nuxt-link>

                <nuxt-link class="header__drop-link" to="/comments">
                  <comment-icon class="icon" />
                  <span class="text">Отзывы</span>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </b-container>
  </div>
</template>

<script>
import icons                      from '~/mixins/icons'
import Balance                    from '~/components/menu/Balance'
import Search                     from '~/components/menu/Search'
import Profile                    from '~/components/menu/Profile'
import { mapState, mapMutations } from 'vuex'
import { eventBus }               from '~/plugins/event-bus'

export default {
  name: 'TopMenu',
  components: { Profile, Search, Balance },
  mixins: [icons],
  computed: {
    ...mapState({
      token: (state) => state.auth.token,
      user: (state) => state.user.user,
      balance: (state) => state.finance.balance,
      cartItems: (state) => state.cart.items,
    }),
  },
  data() {
    return {
      dropMenu: false,
      form: {
        searchValue: null,
      },
      eventBus
    }
  },
  async mounted() {
    const that = this
    this.windowSize = window.innerWidth
    this.setWindowSize(window.innerWidth)
    window.addEventListener('resize', function () {
      const windowSize = window.innerWidth
      that.setWindowSize(windowSize)
    })

    // TODO Delete this shit
    // if (this.token !== null) {
    //   await this.$store.dispatch('questions/getRetry')
    // }
  },
  created () {
    // TODO Delete this shit
    this.eventBus.$on('newAnswer', () => {
      this.$bvToast.toast('Новое сообщение!', {
        title: 'Уведомление',
        variant: 'primary',
        solid: true,
        appendToast: true,
      })
    })
  },
  methods: {
    ...mapMutations({
      setWindowSize: 'common/setWindowSize',
    }),
    async goToSearch() {
      await this.$router.push({
        path: '/search',
        query: { name: this.form.searchValue },
      })
    },
  },
}
</script>

<style lang="sass">
@import '../../theme/vars'
@import '../../theme/mix'
.action
  &__icon
    cursor: pointer

.topMenu
  background: #282439

.header
  padding: 20px 0

  &__signin
    padding: 6px 16px
    color: $white
    font-weight: 500
    background: #643EFF
    border-radius: 100px
    font-size: 14px
    line-height: 24px
    flex-shrink: 0

    &:hover
      color: $white
      background: rgba(136, 117, 255, 1)

  &__drop-wrapper
    height: 100%
    display: flex
    flex-direction: column

  &__drop-link
    font-weight: 500
    color: $gray
    font-size: 20px
    line-height: 28px
    text-transform: uppercase
    cursor: pointer
    display: flex
    align-items: center

    &:not(:last-child)
      margin-bottom: 28px

    &:hover
      color: $white

    .text
      margin-left: 16px

    .icon
      font-size: 28px

    span
      color: inherit
      font-size: inherit
      font-weight: inherit
      line-height: inherit

  &__drop-links
    margin: auto
    display: flex
    flex-direction: column

  &__drop-logo
    +md
      max-width: 103px

  &__drop-close
    cursor: pointer
    color: $gray
    font-size: 30px

  &__drop-top
    display: flex
    align-items: center
    justify-content: space-between

  &__drop-menu
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: 99999
    background: black
    background-size: cover
    padding: 24px 16px
    display: none
    +lg
      display: block

  &__burger
    display: none
    cursor: pointer
    +lg
      display: block
      margin-left: 16px

  &__balance
    margin-right: 16px
    flex-shrink: 0

  &__search
    margin-right: 24px
    width: 100%
    margin-left: 43px
    +xl
      margin-left: 24px
    +lg
      margin-left: 0

  &__actions
    display: flex
    align-items: center
    margin-right: 24px
    margin-left: auto
    +md
      margin-right: 12px

  &__line
    display: flex
    align-items: center
    justify-content: space-between

    &:not(:last-child)
      margin-bottom: 20px

  &__logo
    margin-right: 32px
    cursor: pointer
    max-width: 192px

    img
      width: 100%

    +md
      max-width: 120px
      margin-right: 19px

  &__links
    display: flex
    align-items: center
    justify-content: center
    +lg
      display: none

    &_gray
      +xl
        flex-wrap: wrap
        justify-content: flex-start

  &__action
    &:hover
      opacity: 0.8

    &:not(:last-child)
      margin-right: 20px
      +md
        margin-right: 12px

  &__link
    letter-spacing: -0.4px
    color: $gray
    cursor: pointer
    line-height: 20px
    font-size: 14px

    &:hover
      color: white(0.8)

    &:not(:last-child)
      margin-right: 24px

    &_bold
      text-transform: uppercase
      color: $white
      font-weight: 600
      font-size: 16px

      &:hover
        color: white(0.8)

      &:not(:last-child)
        margin-right: 28px
        +xl
          margin-right: 10px
</style>

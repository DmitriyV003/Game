<template>
  <div class="topMenu">
    <b-container>
      <header class="header">
        <div class="header__line">
          <nuxt-link tag="div" class="header__logo" to="/">
            <img src="/images/logo.svg" alt="">
          </nuxt-link>

          <div class="header__links">
            <nuxt-link to="/" class="header__link">Продавцам</nuxt-link>
            <nuxt-link to="/" class="header__link">Покупателям</nuxt-link>
            <nuxt-link to="/" class="header__link">Оплата</nuxt-link>
            <nuxt-link to="/" class="header__link">Гарантии</nuxt-link>
            <nuxt-link to="/" class="header__link">Стать партнером</nuxt-link>
          </div>

          <div class="header__actions">
            <div class="action header__action">
              <div class="action__icon">
                <img src="/images/email.svg" alt="">
              </div>
            </div>

            <div class="action header__action">
              <div class="action__icon">
                <img src="/images/notification.svg" alt="">
              </div>
            </div>
          </div>

          <Profile class="header__user" />

        </div>

        <div class="header__line">
          <div class="header__links">
            <nuxt-link exact to="/" class="header__link header__link_bold">Игры</nuxt-link>
            <nuxt-link exact to="/" class="header__link header__link_bold">Софт</nuxt-link>
            <nuxt-link exact to="/" class="header__link header__link_bold">Скины</nuxt-link>
            <nuxt-link exact to="/" class="header__link header__link_bold">Кейсы</nuxt-link>
            <nuxt-link exact to="/" class="header__link header__link_bold">GiftCard</nuxt-link>
            <nuxt-link exact to="/" class="header__link header__link_bold">Новости</nuxt-link>
            <nuxt-link exact to="/" class="header__link header__link_bold">Отзывы</nuxt-link>
          </div>

          <Search class="header__search" />

          <Balance class="header__balance" :balance="500000" />

          <div class="custom-icon">
            <div class="custom-icon__main">
              <img src="/images/bag.svg" alt="" class="custom-icon__img">
            </div>
          </div>
        </div>
      </header>
    </b-container>
  </div>
</template>

<script>
import icons from '~/mixins/icons'
import Balance from '~/components/Balance'
import Search from '~/components/Search'
import Profile from '~/components/Profile'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'TopMenu',
  components: { Profile, Search, Balance },
  mixins: [icons],
  computed: {
    ...mapState({
      token: state => state.auth.token
    })
  },
  mounted () {
    const that = this
    this.windowSize = window.innerWidth
    this.setWindowSize(window.innerWidth)
    window.addEventListener('resize', function () {
      const windowSize = window.innerWidth
      that.setWindowSize(windowSize)
    })
  },
  methods: {
    ...mapMutations({
      setWindowSize: 'common/setWindowSize'
    })
  }
}
</script>

<style lang="sass">
@import 'theme/_vars'
.action
  &__icon
    cursor: pointer
.topMenu
  background: #282439
.header
  padding: 20px 0 28px 0
  &__balance
    margin-right: 16px
    flex-shrink: 0
  &__search
    margin-right: 24px
    width: 100%
    margin-left: 43px
  &__actions
    display: flex
    align-items: center
    margin-right: 24px
    margin-left: auto
  &__line
    display: flex
    align-items: center
    justify-content: space-between
    &:not(:last-child)
      margin-bottom: 24px
  &__logo
    margin-right: 32px
  &__links
    display: flex
    align-items: center
    justify-content: center
  &__action
    &:not(:last-child)
      margin-right: 20px
  &__link
    letter-spacing: -0.4px
    color: $gray
    cursor: pointer
    line-height: 20px
    font-size: 14px
    &:hover
      color: $gray
    &:not(:last-child)
      margin-right: 24px
    &_bold
      text-transform: uppercase
      color: $white
      font-weight: 600
      font-size: 16px
      &:hover
        color: $white
      &:not(:last-child)
        margin-right: 28px
</style>

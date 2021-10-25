<template>
  <div class="user" v-if="user !== null">
    <div class="user__main" @click="balanceDropShow = !balanceDropShow">
      <div class="user__logo">
        <img :src="user.avatar" alt="" />
      </div>

      <div class="user__body">
        <span class="user__name">{{ user.name }} {{ user.surname }}</span>
        <chevron-down-icon
          :class="{ user__arrow_active: balanceDropShow }"
          class="user__arrow"
        />
      </div>
    </div>

    <transition>
      <div
        class="user__drop"
        @mouseleave="balanceDropShow = false"
        v-show="balanceDropShow"
      >
        <span class="user__email">{{ user.email }}</span>
        <div class="user__buttons">
          <nuxt-link :to="'/dashboard/profile/'" class="user__button">
            <img class="user__icon" src="/images/profile.svg" alt="" />
            <span class="user__text">Личный кабинет</span>
          </nuxt-link>
          <button class="user__button" @click="logOut">
            <img class="user__icon" src="/images/sign-out.svg" alt="" />
            <span class="user__text">Выход</span>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import icons from '~/mixins/icons'
import VueSlideUpDown from 'vue-slide-up-down'

export default {
  name: 'Profile',
  mixins: [icons],
  components: {
    VueSlideUpDown,
  },
  props: {
    user: {
      type: Object,
      default: () => null,
    },
  },
  methods: {
    async logOut() {
      await this.$store.dispatch('auth/logOut')
    },
  },
  data: () => {
    return {
      balanceDropShow: false,
    }
  },
}
</script>

<style lang="sass">
@import '../../theme/vars'
@import '../../theme/mix'
.user
  position: relative
  &__text
    font-weight: 500
    font-size: 14px
    line-height: 16px
    color: white(1)
  &__button
    border: none
    outline: none
    background: none
    display: flex
    align-items: center
    justify-content: flex-start
    cursor: pointer
    padding: 12px
    transition: all 0.1s
    width: 100%
    &:hover
      background: white(0.04)
    &:not(:last-child)
      margin-bottom: 8px
  &__icon
    margin-right: 8px
  &__email
    margin-bottom: 8px
    font-style: normal
    font-weight: 500
    font-size: 12px
    line-height: 16px
    color: white(0.25)
    display: block
    padding: 0 12px
  &__drop
    background: rgba(46, 38, 76, 1)
    position: absolute
    z-index: 100
    width: 244px
    border-radius: 10px
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.25)
    padding: 12px 0 8px 0
    bottom: 0
    transform: translateY(calc(100% + 8px))
    +md
      right: 0
  &__body
    display: flex
    align-items: center
    padding-right: 9px
  &__arrow
    color: $white
    margin-left: 13px
    font-size: 30px
    transition: all 0.1s
    +md
      margin-left: 0
    &_active
      transform: rotate(180deg)
  &__main
    border-radius: 100px
    background: dark-blue(0.2)
    display: flex
    align-items: center
    height: 36px
    cursor: pointer
    &:hover
      background: dark-blue(0.4)
      .user__name
        &::after
          background: linear-gradient(270deg, #402F88 0%, rgba(64, 47, 136, 0) 100%)
  &__logo
    width: 36px
    height: 36px
    border: 2px solid rgba(100, 62, 255, 0.9)
    border-radius: 50%
    flex-shrink: 0
    margin-right: 8px
    overflow: hidden
    img
      width: 100%
      height: 100%
      border-radius: 50%
  &__name
    font-weight: 500
    line-height: 16px
    font-size: 14px
    color: $white
    max-width: 145px
    white-space: nowrap
    overflow: hidden
    position: relative
    +md
      display: none
    &::after
      content: ''
      background: linear-gradient(270deg, #352A60 0%, rgba(53, 42, 96, 0) 100%)
      position: absolute
      right: 0
      top: 0
      width: 8px
      height: 100%
</style>

<template>
  <footer class="footer">
    <b-container>
      <div class="footer__wrapper">
        <div class="footer__column">
          <nuxt-link tag="div" to="/" class="footer__logo">
            <img src="/images/logo.svg" alt="">
          </nuxt-link>

          <div class="footer__socials lg-none">
            <CustomIcon :size="40" class="footer__social" :is-link="true" to="/" >
              <template slot="icon">
                <img src="/images/vk.svg" alt="">
              </template>
            </CustomIcon>

            <CustomIcon :size="40" class="footer__social" :is-link="true" to="/" >
              <template slot="icon">
                <img src="/images/fb.svg" alt="">
              </template>
            </CustomIcon>

            <CustomIcon :size="40" class="footer__social" :is-link="true" to="/" >
              <template slot="icon">
                <img src="/images/inst.svg" alt="">
              </template>
            </CustomIcon>
          </div>
        </div>

        <div class="footer__column">
          <div class="footer__links">
            <nuxt-link class="footer__link" to="/" tag="div">Игры</nuxt-link>
            <nuxt-link class="footer__link" to="/" tag="div">Софт</nuxt-link>
            <nuxt-link class="footer__link" to="/" tag="div">СКИНЫ</nuxt-link>
            <nuxt-link class="footer__link" to="/" tag="div">КЕЙСЫ</nuxt-link>
            <nuxt-link class="footer__link" to="/" tag="div">GiftCard</nuxt-link>
            <nuxt-link class="footer__link" to="/" tag="div">Region free</nuxt-link>
            <nuxt-link class="footer__link" to="/" tag="div">обзоры</nuxt-link>
            <nuxt-link class="footer__link" to="/" tag="div">Отзывы</nuxt-link>
          </div>

          <div class="footer__line">
            <div class="footer__list">
              <div class="footer__block footer__block_order-10">
                <nuxt-link tag="div" class="footer__item" to="/">Продавцам</nuxt-link>
                <nuxt-link tag="div" class="footer__item" to="/">Покупателям</nuxt-link>
              </div>
              <div class="footer__block footer__block_order-10">
                <nuxt-link tag="div" class="footer__item" to="/">Оплата</nuxt-link>
                <nuxt-link tag="div" class="footer__item" to="/">Гарантии</nuxt-link>
              </div>
              <div class="footer__block footer__block_order-10 no-md-margin">
                <nuxt-link tag="div" class="footer__item" to="/">Новости</nuxt-link>
                <nuxt-link tag="div" class="footer__item" to="/">Стать партнером</nuxt-link>
              </div>
              <div class="footer__block">
                <nuxt-link tag="div" class="footer__item footer__item_white" to="/">Личный кабинет</nuxt-link>
              </div>
            </div>

            <MainButton color="primary" class="footer__btn lg-none" label="Задать вопрос" />
          </div>

        </div>
      </div>

      <div class="footer__wrapper footer__wrapper_padding-top footer__wrapper_mobile">
        <div class="footer__socials">
          <CustomIcon :size="40" class="footer__social" :is-link="true" to="/" >
            <template slot="icon">
              <img src="/images/vk.svg" alt="">
            </template>
          </CustomIcon>

          <CustomIcon :size="40" class="footer__social" :is-link="true" to="/" >
            <template slot="icon">
              <img src="/images/fb.svg" alt="">
            </template>
          </CustomIcon>

          <CustomIcon :size="40" class="footer__social" :is-link="true" to="/" >
            <template slot="icon">
              <img src="/images/inst.svg" alt="">
            </template>
          </CustomIcon>
        </div>

        <MainButton color="primary" class="footer__btn" label="Задать вопрос" />
      </div>

      <div class="footer__wrapper footer__wrapper_padding-top">
        <span class="footer__text">© Gameincome 2021</span>
        <nuxt-link class="footer__text" tag="span" to="/">Политика конфиденциальности</nuxt-link>
        <span class="footer__text">made by <span class="footer__text footer__text_white">roob.in</span></span>

        <div class="footer__payments">
          <img class="footer__payment" src="/images/visa.svg" alt="">
          <img class="footer__payment" src="/images/mastercard.svg" alt="">
          <img class="footer__payment" src="/images/qiwi.svg" alt="">
          <img class="footer__payment" src="/images/yandex.svg" alt="">
        </div>
      </div>
    </b-container>
  </footer>
</template>

<script>
import CustomIcon from '~/components/CustomIcon'
import MainButton from "~/components/buttons/MainButton";
export default {
  name: 'GameInComeFooter',
  components: {MainButton, CustomIcon }
}
</script>

<style lang="sass">
 @import '../../theme/vars'
 @import '../../theme/mix'
.footer
  padding: 40px 0 16px
  background: #292538
  margin-top: 32px
  &__block
    &_order-10
      +md
        order: 10
    &:not(:last-child)
      +md
        margin-bottom: 12px
  &__payment
    &:not(:last-child)
      margin-right: 16px
  &__payments
    display: flex
    align-items: center
    +lg
      order: -5
      width: 100%
      justify-content: space-between
      padding-bottom: 20px
      border-bottom: 1px solid rgba(154, 147, 170, 0.5)
      margin-bottom: 28px
  &__text
    letter-spacing: -0.4px
    font-size: 14px
    line-height: 20px
    color: $gray
    +lg
      &:not(:last-child)
        margin-bottom: 8px
    &_white
      color: $white
  &__btn
    flex-shrink: 0
  &__line
    display: flex
    align-items: flex-start
    justify-content: space-between
  &__list
    display: flex
    align-items: flex-start
    justify-content: space-between
    width: 100%
    margin-right: 70px
    +lg
      margin-right: 0
    +md
      flex-direction: column
  &__item
    cursor: pointer
    letter-spacing: -0.4px
    font-size: 14px
    color: $gray
    line-height: 20px
    +md
      font-size: 12px
      line-height: 18px
    &_white
      color: $white
      +md
        margin-bottom: 28px
    &:not(:last-child)
      margin-bottom: 16px
      +md
        margin-bottom: 12px
  &__wrapper
    display: flex
    align-items: flex-start
    justify-content: space-between
    +lg
      flex-direction: column
    &_mobile
      display: none
      +lg
        display: flex
        flex-direction: row
        align-items: center
    &_padding-top
      padding-top: 20px
      +lg
        padding-top: 16px
    &:not(:last-child)
      padding-bottom: 32px
      border-bottom: 1px solid rgba(154, 147, 170, 0.5)
      +lg
        padding-bottom: 16px
  &__logo
    margin-bottom: 32px
    img
      width: 100%
    +lg
      margin-bottom: 24px
    +md
      max-width: 103px
  &__socials
    display: flex
    align-items: center
  &__social
    &:not(:last-child)
      margin-right: 20px
  &__links
    display: flex
    align-items: center
    margin-top: 6px
    margin-bottom: 42px
    +lg
      margin-top: 0
    +md
      flex-direction: column
      align-items: flex-start
      margin-bottom: 0
  &__link
    text-transform: uppercase
    color: $white
    line-height: 24px
    font-weight: 600
    cursor: pointer
    +md
      font-size: 12px
      line-height: 16px
    &:not(:last-child)
      margin-right: 42px
      +xl
        margin-right: 14px
      +md
        margin-right: 0
        margin-bottom: 12px
        font-size: 12px
        line-height: 16px
  &__logo
    cursor: pointer
  &__column
    display: flex
    flex-direction: column
    +md
      flex-direction: row
      width: 100%
      justify-content: space-between
</style>

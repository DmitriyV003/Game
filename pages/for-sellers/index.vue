<template>
  <div>
    <!-- For sellers top  adapted = true -->
    <section class="for-sellers__top">
      <div class="for-sellers__bg"></div>
      <b-container>
        <div class="news-card__top">
          <bread-crumb :links="links" />
        </div>

        <h1 class="for-sellers__title">
          Поможем справиться с игровым бременем!
        </h1>

        <!-- Banner  adapted = true -->
        <div class="g-sellers-banner">
          <img
            src="/images/for-sellers-img.png"
            alt=""
            class="g-sellers-banner__image"
          />
          <div class="g-sellers-banner__content">
            <h2>Gameincome</h2>
            <p class="g-sellers-banner__text">
              Надёжный маркетплейс с каталогом, в котором более 5000 ключей для
              игр, 300 видов авторских софтов, публичной и часто посещаемой
              вертелкой для кейсов и скинов из игр DOTA 2 и CS GO
            </p>
            <div class="g-sellers-banner__items">
              <g-info-item />
              <g-info-item />
              <g-info-item />
            </div>
            <main-button
              class="g-sellers-banner__btn"
              color="primary"
              label="стать продавцом"
              size="xl"
            />
          </div>
        </div>
      </b-container>
    </section>

    <!-- You  adapted = true -->
    <section class="section">
      <b-container>
        <section-header title="Вы:" />

        <b-row>
          <b-col xl="4" lg="4" md="6" class="m-auto" sm="10">
            <g-type-item />
          </b-col>
          <b-col xl="4" lg="4" md="6" class="m-auto" sm="10">
            <g-type-item />
          </b-col>
          <b-col xl="4" lg="4" md="6" class="m-auto" sm="10">
            <g-type-item />
          </b-col>
        </b-row>
      </b-container>
    </section>

    <!-- We offer  adapted = true -->
    <section class="section">
      <b-container>
        <section-header title="Мы предлагаем:" />

        <div class="g-offers__all">
          <div class="g-offers">
            <div class="g-offers__offer g-offers__bg">
              <img class="" src="/images/offer-1.png" alt="" />
            </div>
            <div class="g-offers__offer g-offers__offer_text">
              <p class="g-offers__title">Выгодное сотрудничество</p>
              <p class="g-offers__text">
                Комиссия нашего маркетплейса - <span>1%</span>!
              </p>
            </div>
          </div>
          <div class="g-offers g-offers_reverse">
            <div class="g-offers__offer g-offers__bg">
              <img class="" src="/images/offer-2.png" alt="" />
            </div>
            <div class="g-offers__offer g-offers__offer_text">
              <p class="g-offers__title">Привлекательный дизайн</p>
              <p class="g-offers__text">
                На нашем сайте покупателям тепло и уютно. Очень легко скупаются
                игры даже на самых заснеженных страницах нашего каталога
              </p>
            </div>
          </div>
          <div class="g-offers">
            <div class="g-offers__offer g-offers__bg">
              <img class="" src="/images/offer-3.png" alt="" />
            </div>
            <div class="g-offers__offer g-offers__offer_text">
              <p class="g-offers__title">Отзывчивая администрация</p>
              <p class="g-offers__text">
                Приятный менеджер и отзывчивая администрация устроят вам приём
                по традициям Gameincome
              </p>
            </div>
          </div>
        </div>
      </b-container>
    </section>

    <!-- Partners comments  adapted = true -->
    <section class="section">
      <b-container>
        <section-header title="Отзывы наших партнёров" />

        <div class="g-comments">
          <b-row>
            <b-col xl="4" lg="4" md="6">
              <g-seller-comment />
            </b-col>
            <b-col xl="4" lg="4" md="6">
              <g-seller-comment />
            </b-col>
            <b-col xl="4" lg="4" md="6">
              <g-seller-comment />
            </b-col>
            <b-col xl="4" lg="4" md="6">
              <g-seller-comment />
            </b-col>
          </b-row>
        </div>
      </b-container>
    </section>

    <!-- Become partner  adapted = true -->
    <section class="section">
      <b-container>
        <g-promo-banner
          @onButtonClicked="becomeSeller"
        />
      </b-container>
    </section>
  </div>
</template>

<script>
import BreadCrumb from '~/components/BreadCrumb'
import GInfoItem from '~/components/items/InfoItem'
import MainButton from '~/components/buttons/MainButton'
import GTypeItem from '~/components/items/TypeItem'
import SectionHeader from '~/components/SectionHeader'
import GSellerComment from '~/components/items/CommentItem'
import GPromoBanner from '~/components/banners/PromoBanner'
import { mapState } from 'vuex'

export default {
  name: 'GForSellers',
  components: {
    GPromoBanner,
    GSellerComment,
    SectionHeader,
    GTypeItem,
    MainButton,
    GInfoItem,
    BreadCrumb,
  },
  layout: 'default',
  methods: {
    async becomeSeller() {
      this.disabled = true
      try {
        await this.$store.dispatch('seller/postBecomeSeller')
      } catch (e) {
        this.$bvToast.toast(this.warning, {
          title: 'Ошибка',
          variant: 'danger',
          solid: true,
          appendToast: true,
        })
      } finally {
        this.disabled = false
      }
    },
  },
  computed: {
    ...mapState({
      warning: (state) => state.warning,
    }),
  },
  data: () => {
    return {
      disabled: false,
      links: [
        { to: '/', label: 'Главная' },
        { to: '/for-sellers', label: 'Продавцам' },
      ],
    }
  },
}
</script>

<style lang="sass" scoped>
@import 'theme/_vars'
@import 'theme/_mix'
.g-offers
  display: flex
  position: relative
  +lg
    height: 328px
    border-radius: 12px
    overflow: hidden
    &:not(:last-child)
      margin-bottom: 16px

  &_reverse
    flex-direction: row-reverse

  &__all
    border-radius: 12px
    overflow: hidden

  &__text
    font-size: 16px
    color: $white
    line-height: 24px

    span
      color: #FFE24D

  &__title
    font-weight: 600
    color: $white
    margin-bottom: 24px
    font-size: 32px
    line-height: 38px

  &__bg
    position: relative
    +lg
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%

    &::after
      content: ''
      width: 100%
      height: 100%
      left: 0
      bottom: 0
      background: linear-gradient(194.07deg, rgba(0, 0, 0, 0.05) -11.89%, rgba(0, 0, 0, 0.55) 116.67%)
      z-index: 5
      position: absolute

  &__offer
    width: 50%
    +lg
      width: 100%

    &_text
      padding: 44px
      background: #282439
      display: flex
      flex-direction: column
      justify-content: center
      +lg
        background: transparent
        z-index: 10
      +md
        text-align: center

    img
      width: 100%
      height: 100%

.g-sellers-banner
  padding: 70px 24px 20px 24px
  background: linear-gradient(95.48deg, #120F28 -4.94%, #691E66 116.71%) no-repeat
  position: relative
  border-radius: 12px
  margin-bottom: 30px
  z-index: 7
  +lg
    padding: 24px 16px
  +md
    margin-bottom: 20px

  h2
    font-size: 24px !important
    line-height: 28px !important

  &__btn
    margin-top: 24px
    display: none
    +lg
      display: flex
    +md
      .button
        width: 100%

  &__image
    position: absolute
    right: 0
    bottom: 0
    +xl
      width: 70%
    +lg
      display: none

  &__content
    width: 50%
    +lg
      width: 100%

  &__items
    display: flex
    margin-top: 56px
    justify-content: space-between
    +md
      margin-top: 21px

  &__text
    font-size: 12px
    margin-top: 16px
    color: white(0.7)
    line-height: 18px

.for-sellers
  &__bg
    bottom: 0
    left: 0
    width: 100%
    height: 90px
    position: absolute
    background: linear-gradient(180deg, rgba(31, 28, 42, 0) 0%, #1F1C2A 100%)
    z-index: 5

  &__title
    margin-bottom: 30px
    max-width: 55%
    +md
      max-width: 100%

  &__top
    position: relative
    background-size: cover
    background: url("/images/for-sellers.png") center center
</style>

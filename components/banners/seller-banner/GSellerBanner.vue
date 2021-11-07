<template>
  <div class="g-seller-info">
    <div>
      <g-seller-info
        class="g-seller-info__info"
        :name="name"
        :surname="surname"
        :nickname="nickname"
        :likes="likes"
        :dislikes="dislikes"
      />

      <a
        href="#"
        v-scroll-to="'#catalog'"
        class="button button_primary button_xl g-seller-info__btn g-seller-info__btn_desktop"
      >
        Смотреть каталог
      </a>
    </div>
    <div class="g-seller-info__block">
      <g-banner-statistics :number="purchases" text="Товара куплено" />
      <g-banner-statistics
        :number="items"
        text="Товаров выставлено на продажу"
      />
      <g-banner-statistics :number="feedback" text="Отзыв оставлен" />
      <g-banner-statistics :number="4" text="Обзор оставлен" />
    </div>

    <a
      href="#"
      v-scroll-to="'#catalog'"
      class="button button_primary button_xl g-seller-info__btn g-seller-info__btn_mobile"
    >
      Смотреть каталог
    </a>
  </div>
</template>
<script>
import GBannerStatistics from '~/components/banners/seller-banner/GBannerStatistics'
import GSellerInfo from '~/components/GSellerInfo'
import MainButton from '~/components/buttons/MainButton'

export default {
  name: 'g-seller-banner',
  components: { GBannerStatistics, GSellerInfo, MainButton },
  props: {
    name: {
      type: String,
      default: () => 'name',
    },
    surname: {
      type: String,
      default: () => 'surname',
    },
    nickname: {
      type: String,
      default: () => 'nickname',
    },
    likes: {
      type: Number,
      default: () => 0,
    },
    dislikes: {
      type: Number,
      default: () => 0,
    },
    items: {
      type: Number,
      default: () => 0,
    },
    purchases: {
      type: Number,
      default: () => 0,
    },
    feedback: {
      type: Number,
      default: () => 0,
    },
  },
}
</script>
<style lang="sass" scoped>
@import '../../../theme/vars'
@import '../../../theme/mix'
.g-seller-info
    padding: 40px 48px 32px 48px
    margin-top: 64px
    background: linear-gradient(95.48deg, #120F28 -4.94%, #691E66 116.71%)
    border-radius: 12px
    display: flex
    align-items: center
    justify-content: space-between
    +lg
        flex-direction: column
        align-items: flex-start
    +md
        padding: 20px 16px 16px 16px
        margin-top: 24px
    &__block
        width: 50%
        display: flex
        flex-wrap: wrap
        justify-content: space-between
        +lg
            width: 100%
            margin-top: 20px
    &__btn
        margin-top: 38px
        +lg
            margin-top: 16px
        &_mobile
            display: none
            +lg
                display: flex
                width: 100%
        &_desktop
            +lg
                display: none
</style>

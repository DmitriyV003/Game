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
                <g-sort-button active class="purchases__btn" label="Игры (5)" />
                <g-sort-button class="purchases__btn" label="Софт (10)" />
                <g-sort-button class="purchases__btn" label="Скины (2)" />
                <g-sort-button class="purchases__btn" label="Кейсы (0)" />
              </vue-slick>
            </div>
            
            <div class="purchases__sort_mobile">
              <div>
                <p class="purchases__mini-title">Мои игры</p>
                <div class="purchases__sort">
                  <span>Сначала новые</span>
                  <img src="/images/filter.svg" alt="">
                </div>
              </div>
              
              <button class="button-reboot purchases__add">
                <plus-icon class="icon" />
              </button>
            </div>
            
            <div class="purchases__sort purchases__sort_desktop">
              <span>Сначала новые</span>
              <img src="/images/filter.svg" alt="">
            </div>
          </div>
          
          <b-row>
            <b-col xl="4" lg="4" md="6">
              <g-purchase-item />
            </b-col>

            <b-col xl="4" lg="4" md="6">
              <g-purchase-item />
            </b-col>

            <b-col xl="4" lg="4" md="6">
              <g-purchase-item />
            </b-col>

            <b-col xl="4" lg="4" md="6">
              <g-purchase-item />
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
export default {
  name: 'GDashboardPurchasesPage',
  mixins: [icons],
  components: {GSortButton, RoundedButton, GPurchaseItem, GDashboardNavigation },
  mounted () {
    console.log(this.$route)
  }
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

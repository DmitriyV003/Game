<template>
  <div>
    
    <!-- Full sized dark background  -->
    <div class="g-nav__bg" v-show="isMenuDropped" @click="isMenuDropped = false"></div>
    
    <!-- Desktop dashboard navigation   -->
    <div class="g-nav g-nav_desktop">
      <nuxt-link
        class="g-nav__link"
        v-for="link in dashboardLinks"
        :to="link.to"
        :key="link.name"
        active-class="g-nav__link_active"
        tag="div"
      >
        <span class="icon mdi" :class="link.icon"></span>
        <p>{{ link.label }}</p>
      </nuxt-link>
    </div>

    <!-- Mobile dashboard navigation   -->
    <div class="g-nav_mobile">
      <div class="g-nav__all">
        <div @click="isMenuDropped = !isMenuDropped" class="g-nav__current">
          <div class="left">
            <span class="icon mdi" :class="[dashboardLinks.find(x => $route.name.includes(x.name)).icon]"></span>
            <span class="text">{{ dashboardLinks.find(x => $route.name.includes(x.name)).label }}</span>
          </div>
          
          <chevron-down-icon class="arrow-icon" :class="{ 'arrow-icon_active': isMenuDropped }" />
        </div>
        
        <div class="g-nav__drop" v-show="isMenuDropped">
          <nuxt-link active-class="g-nav__drop-link_active" class="g-nav__drop-link" v-for="item in dashboardLinks" :key="item.name" :to="item.to">
            <span class="mdi icon" :class="item.icon"></span>
            <span class="text">{{ item.label }}</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SlideUpDown from 'vue-slide-up-down'
import icons from '~/mixins/icons'

export default {
  name: 'GDashboardNavigation',
  components: {
    SlideUpDown
  },
  mixins: [icons],
  data: () => {
    return {
      isMenuDropped: false,
      dashboardLinks: [
        { label: 'Покупки', to: '/dashboard/purchases', name: 'dashboard-purchases', icon: 'mdi-cart-outline' },
        { label: 'Продажи', to: '/dashboard/sales', name: 'dashboard-sales', icon: 'mdi-storefront-outline' },
        { label: 'финансы', to: '/dashboard/finance', name: 'dashboard-finance', icon: 'mdi-currency-usd' },
        { label: 'Профиль', to: '/dashboard/profile', name: 'dashboard-profile', icon: 'mdi-account-outline' },
        { label: 'безопасность', to: '/dashboard/security', name: 'dashboard-security', icon: 'mdi-lock-outline' },
        { label: 'обращения', to: '/dashboard/purchases4', name: 'dashboard-purchases3', icon: 'mdi-forum-outline' }
      ]
    }
  }
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.g-nav
  background: #282439
  padding: 8px 0
  border-radius: 12px
  &_desktop
    +lg
      display: none
  &_mobile
    display: none
    +lg
      display: block
  &__drop-link
    display: flex
    align-items: center
    padding: 16px
    cursor: pointer
    color: rgba(255, 255, 255, 0.7)
    font-weight: 500
    font-size: 14px
    line-height: 24px
    &_active
      background: rgba(154, 147, 170, 0.04)
      color: $white
    .icon
      font-size: 24px
    .text
      font-size: inherit
      line-height: inherit
      font-weight: inherit
      text-transform: uppercase
      margin-left: 16px
    &:hover
      color: $white
      background: rgba(154, 147, 170, 0.04)
  &__bg
    display: none
    +lg
      display: block
      position: fixed
      width: 100%
      height: 100%
      backdrop-filter: blur(8px)
      background: #121212
      opacity: 0.6
      top: 0
      left: 0
      z-index: 50
  &__drop
    position: absolute
    left: 0
    width: 100%
    padding: 8px 0
    z-index: 55
    transform: translateY(58px)
    top: 0
    display: flex
    flex-direction: column
    background: #292538
    border: 1px solid #433F54
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25)
    border-top: none
    border-radius: 12px
  &__all
    border: 1px solid #433F54
    border-radius: 10px
    background: #2F2B40
    position: relative
    z-index: 57
  &__current
    display: flex
    align-items: center
    justify-content: space-between
    padding: 16px
    cursor: pointer
    .text
      color: $white
      text-transform: uppercase
      font-weight: 600
      font-size: 14px
      line-height: 24px
    .icon
      color: $white
      font-size: 20px
      margin-right: 16px
      width: 24px
      height: 24px
      font-weight: 400 !important
    .arrow-icon
      margin-left: auto
      font-size: 25px
      color: rgba(100, 62, 255, 1)
      transition: all 0.1s
      &_active
        transform: rotate(180deg)
    .left
      display: flex
      align-items: center
  &__link
    display: flex
    align-items: center
    padding: 16px
    color: rgba(255, 255, 255, 0.5)
    cursor: pointer
    text-transform: uppercase
    font-size: 14px
    line-height: 24px
    font-weight: 500
    &:hover
      background: rgba(154, 147, 170, 0.04)
      color: $white
    .icon
      font-size: 25px
      font-weight: 400 !important
    &_active
      color: $white
      background: rgba(154, 147, 170, 0.04)
      p
        font-weight: 600
    p
      margin-left: 16px
</style>

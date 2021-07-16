<template>
  <div class="g-skin-card">
    
    <div class="g-skin-card__wrapper">
      <div class="g-skin-card__top">
        <div class="g-skin-card__progress">
          <span class="g-skin-card__fn">FN | 0.0312591</span>
          <span class="g-skin-card__line">
          <span></span>
        </span>
        </div>

        <div class="g-skin-card__label">
          <img src="/images/icons/ruby.svg" alt="">
          <span>Sapphire</span>
        </div>
      </div>

      <button class="button-reboot g-skin-card__cart g-skin-card__cart_mobile">
        <img src="/images/icons/cart.svg" alt="">
      </button>
    </div>
    
    
    <div class="g-skin-card__image">
      <img src="/images/skin.png" alt="">
    </div>
    
    <span class="g-skin-card__desc">★ M9 Bayonet</span>
    
    <h5 class="g-skin-card__title">Doppler</h5>
    
    <span class="g-skin-card__color">Covert</span>
    
    <g-price :show-current-price="false" class="g-skin-card__price" />
    
    <span class="g-skin-card__current">6 348 ₽</span>
    
    <div class="g-skin-card__bottom">
      <main-button class="g-skin-card__buy" size="lg" color="primary" label="Купить" />
      
      <button class="button-reboot g-skin-card__cart g-skin-card__cart_desktop">
        <img src="/images/icons/cart.svg" alt="">
      </button>
    </div>
  </div>
</template>

<script>
import GPrice from '~/components/GPrice'
import MainButton from "~/components/buttons/MainButton";
export default {
  name: 'GSkinCard',
  components: {MainButton, GPrice }
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.g-skin-card
  padding: 20px
  background: rgba(136, 117, 255, 0.15)
  border-radius: 12px
  display: flex
  flex-direction: column
  &__wrapper
    +xl
      display: flex
      align-items: flex-start
      justify-content: space-between
  &__label
    display: flex
    align-items: center
    padding: 4px 6px
    border-radius: 2px
    color: $white
    font-size: 10px
    line-height: 12px
    background: rgba(5, 0, 255, 1)
    span
      margin-left: 6px
  &__buy
    flex-shrink: 0
    +md
      flex-shrink: 1
      width: 100%
      .button
        width: 100%
  &__fn
    font-size: 12px
    color: $white
    line-height: 18px
  &__line
    width: 100%
    position: relative
    height: 2px
    border-radius: 2px
    background: rgba(0, 0, 0, 1)
    margin-top: 4px
    span
      position: absolute
      left: 0
      top: 0
      height: 100%
      width: 21%
      background: rgba(100, 62, 255, 1)
  &__progress
    display: flex
    flex-direction: column
    +xl
      margin-bottom: 8px
  &__bottom
    display: flex
    align-items: center
    justify-content: space-between
  &__current
    margin-bottom: 12px
    font-weight: 600
    color: $white
    font-size: 20px
    line-height: 28px
  &__price
    margin-bottom: 8px
  &__color
    margin-bottom: 8px
    font-size: 12px
    line-height: 18px
    display: flex
    align-items: center
    color: rgba(255, 77, 77, 1)
    &::before
      content: ''
      width: 4px
      height: 4px
      border-radius: 50%
      margin-right: 2px
      background: #FF4D4D
      flex-shrink: 0
  &__title
    margin-bottom: 4px
    font-weight: 600
    font-size: 16px
    text-transform: uppercase
    color: $white
    line-height: 20px
  &__desc
    font-size: 12px
    line-height: 18px
    color: white(0.8)
  &__image
    display: flex
    align-items: center
    justify-content: center
    margin: 0 auto 8px
  &__cart 
    display: flex
    align-items: center
    justify-content: center
    margin-left: 8px
    flex-shrink: 0
    padding: 7px 10px
    background: rgba(40, 36, 57, 0.3)
    border-radius: 6px
    cursor: pointer
    &_desktop
      +xl
        display: none
    &_mobile
      display: none
      +xl
        display: flex
  &__top
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 2px
    +xl
      flex-direction: column
      align-items: flex-start
</style>

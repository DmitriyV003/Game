<template>
  <!-- Adapted = true  -->
  <div class="g-popup" v-show="val">
    <div class="g-new-dispute">
      <div class="g-popup__top">
        <p class="g-popup-title">Новый спор</p>
        <close-icon @click="val = false" class="g-popup__close" />
      </div>
      
      <div class="g-new-dispute__block">
        <div class="g-new-dispute__img">
          <img src="/images/dispute-1.svg" alt="">
        </div>
        <div class="g-new-dispute__text">
          <div class="g-new-dispute__info">
            <span class="g-new-dispute__name">HITMAN 3</span>
            <span class="g-new-dispute__price">2 230 ₽</span>
          </div>
          <div class="g-new-dispute__avatar">
            <p class="g-popup__caption">Продавец:</p>
            <avatar />
          </div>
        </div>
      </div>
      
      <div class="g-new-dispute__textarea">
        <p class="area-title">Опишите проблему подробно:</p>
        <textarea class="input-reboot textarea"></textarea>
        
        <div class="g-new-dispute__bottom">
          <main-button full-width class="g-new-dispute__button" color="primary" label="Отправить" size="xl" />
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import icons from '~/mixins/icons'
import Avatar from '~/components/Avatar'
import MainButton from '~/components/buttons/MainButton'
import {eventBus} from "~/plugins/event-bus";

export default {
  name: 'GNewDispute',
  components: { MainButton, Avatar },
  mixins: [icons],
  data: () => {
    return {
      val: false
    }
  },
  created () {
    eventBus.$on('popupClose', () => {
      this.val = false
    })

    eventBus.$on('newDisputePopupOpen', () => {
      this.val = true
    })
  }
}
</script>

<style lang="sass">
@import '../../theme/vars'
@import '../../theme/mix' 
.g-new-dispute
  background: #282439
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25)
  border-radius: 12px
  padding: 24px
  width: 560px
  max-height: calc(100vh - 300px)
  overflow-y: auto
  +md
    width: calc(100% - 32px)
    max-height: calc(100vh - 64px)
    padding: 24px 16px
  &__button
    +sm
      width: 100%
  &__bottom
    display: flex
    align-items: center
    justify-content: space-between
  &__textarea
    padding: 24px 0
    border-top: 1px solid rgba(154, 147, 170, 0.3)
    .textarea
      resize: none
      width: 100%
      min-height: 104px
      background: rgba(255, 255, 255, 0.05)
      color: $white
      margin-bottom: 32px
      border-radius: 8px
      padding: 12px 16px
      font-size: 16px
      line-height: 24px
      +sm
        margin-bottom: 24px
    .area-title
      margin-bottom: 12px
      font-size: 14px
      line-height: 20px
      color: $gray
      letter-spacing: -0.4px
  &__text
    display: flex
    flex-direction: column
    justify-content: space-between
    align-items: flex-start
    color: $white
  &__info
    display: flex
    flex-direction: column
    margin-bottom: auto
    +sm
      flex-direction: row
      justify-content: space-between
      margin-bottom: 20px
      width: 100%
  &__price
    color: inherit
    font-weight: 600
    font-size: 20px
    line-height: 28px
  &__name
    color: inherit
    font-weight: 600
    font-size: 24px
    margin-bottom: 12px
    line-height: 28px
    +sm
      margin-bottom: 0
  &__block
    display: flex
    padding: 24px 0
    border-top: 1px solid rgba(154, 147, 170, 0.3)
    +sm
      flex-direction: column
  &__img
    border-radius: 8px
    overflow: hidden
    max-width: 128px
    width: 100%
    margin-right: 20px
    +sm
      max-width: 100%
      margin-right: 0
      background: url("/images/new-dispute.svg") center center
      background-size: cover
      height: 160px
      margin-bottom: 24px
    img
      width: 100%
      +sm
        display: none
</style>

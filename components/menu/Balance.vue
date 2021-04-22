<template>
  <div class="balance">
    <div class="balance__main" @click="showBalanceDrop = ! showBalanceDrop">
      <div class="balance__icon">
        <img src="/images/wallet.svg" alt="">
      </div>
      <span class="balance__label">$ {{ balance }}</span>
    </div>

    <div class="balance__drop" @mouseleave="showBalanceDrop = false" v-show="showBalanceDrop">
      <div class="balance__block">
        <div class="balance__text">Доступный баланс</div>
        <div class="balance__text balance__text_white-and-big">$ 500 000</div>
      </div>

      <div class="balance__block balance__block_last">
        <div class="balance__text">Заморожено</div>
        <div class="balance__text balance__text_big">$ 12 000</div>
      </div>

      <div class="balance__btns">
        <main-button
          size="lg"
          color="primary"
          label="Пополнить"
          class="balance__button"
        />
        <main-button
          size="lg"
          color="secondary"
          label="Вывести"
          class="balance__button"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MainButton from '~/components/buttons/MainButton'
export default {
  name: 'Balance',
  components: { MainButton },
  props: {
    balance: {
      type: Number
    }
  },
  data: () => {
    return {
      showBalanceDrop: false
    }
  }
}
</script>

<style lang="sass">
  @import '../../theme/vars'
  .balance
    position: relative
    &__btns
      margin-top: 12px
    &__button
      button
        width: 100%
      &:not(:last-child)
        margin-bottom: 12px
    &__block
      margin-bottom: 12px
      &_last
        padding-bottom: 12px
        border-bottom: 1px solid #9A93AA
    &__drop
      padding: 12px 16px
      background: #2E264C
      box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.25)
      border-radius: 10px
      width: 200px
      right: 0
      bottom: 0
      z-index: 100
      transform: translateY(calc(100% + 8px))
      position: absolute
    &__text
      color: $gray
      letter-spacing: -0.4px
      font-size: 14px
      font-weight: normal
      line-height: 20px
      margin-bottom: 2px
      &_white-and-big
        font-weight: 500
        font-size: 20px
        line-height: 24px
        color: white(1)
        margin-bottom: 0
      &_big
        font-weight: 500
        font-size: 20px
        line-height: 24px
        margin-bottom: 0

    &__main
      background: dark-blue(0.2)
      padding: 2px 12px 2px 2px
      height: 36px
      border-radius: 100px
      display: flex
      position: relative
      align-items: center
      cursor: pointer
      transition: all 0.1s
      &:hover
        background: dark-blue(0.4)
    &__icon
      width: 32px
      height: 32px
      border-radius: 50%
      flex-shrink: 0
      background: dark-blue(0.7)
      display: flex
      align-items: center
      justify-content: center
    &__label
      font-size: 14px
      line-height: 16px
      font-weight: 500
      color: $white
      margin-left: 10px
</style>

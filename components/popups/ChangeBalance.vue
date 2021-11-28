<template>
  <div class="g-popup" v-show="val">
    <div class="g-change-balance">
      <div class="g-popup__top">
        <p class="g-popup__title">Пополнить баланс</p>
        <close-icon @click="val = false" class="g-popup__close" />
      </div>

      <div class="g-change-balance__input">
        <p class="g-popup__caption">Сумма пополнения:</p>
        <div class="g-change-balance__block">
          <g-input class="g-change-balance__value" placeholder="100" />
          <main-button
            v-if="type === 'deposit'"
            full-width
            color="primary"
            size="xl"
            label="Пополнить"
          />
          <main-button
            v-if="type === 'withdraw'"
            full-width
            color="primary"
            size="xl"
            label="Вывести"
          />
        </div>

        <div class="g-change-balance__methods">
          <p class="g-popup__caption">Выберите способ пополнения</p>

          <div class="g-change-balance__lines">
            <g-payment-method
              bg="light"
              class="g-change-balance__method"
              name="Банковская карта"
              id="card"
              image="dd"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import icons from '~/mixins/icons'
import { eventBus } from '~/plugins/event-bus'
import GInput from '~/components/form-elements/Input'
import MainButton from '~/components/buttons/MainButton'
import GPaymentMethod from '~/components/cart/PaymetMethod'

export default {
  name: 'GChangeBalancePopup',
  components: { GPaymentMethod, MainButton, GInput },
  mixins: [icons],
  data: () => {
    return {
      val: false,
      type: 'deposit',
    }
  },
  created() {
    eventBus.$on('popupClose', () => {
      this.val = false
    })

    eventBus.$on('changeBalancePopupOpen', (type) => {
      console.log(type)
      this.type = type
      this.val = true
    })
  },
}
</script>

<style lang="sass">
@import '@/theme/vars'
@import '@/theme/mix'
.g-change-balance
  background: #282439
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25)
  border-radius: 12px
  padding: 24px 24px 0 24px
  width: 560px
  max-height: calc(100vh - 150px)
  +md
    width: calc(100% - 32px)
    max-height: calc(100vh - 64px)
    padding: 24px 16px
  &__value
    width: 100%
    margin-right: 20px
    +md
      margin-right: 0
      margin-bottom: 24px
  &__method
    margin-bottom: 16px
  &__methods
    margin-top: 24px
  &__lines
    margin-top: 16px
    max-height: calc(100vh - 150px - 310px)
    overflow-y: auto
    margin-right: -24px
    padding-right: 24px
  &__block
    display: flex
    align-items: center
    justify-content: space-between
    padding-bottom: 24px
    border-bottom: 1px solid rgba(154, 147, 170, 0.3)
    +md
      flex-direction: column
      .button
        width: 100%
  &__top
    display: flex
    align-items: center
    justify-content: space-between
    padding-bottom: 28px
    +md
      padding-bottom: 24px
    .popup-title
      font-weight: 600
      color: $white
      font-size: 24px
      line-height: 28px
      margin: 0
      +md
        line-height: 32px
    .icon
      color: $gray
      cursor: pointer
      font-size: 30px
</style>

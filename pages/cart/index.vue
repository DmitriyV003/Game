<template>
  <div>
    <!-- Cart top adapted = true   -->
    <section class="cart-top">
      <b-container>
        <div class="stepper">
          <div class="stepper__item stepper__item_active">
            <span class="stepper__num">1</span>
            <span class="stepper__text">Корзина</span>
          </div>

          <span class="stepper__line"></span>

          <div
            class="stepper__item"
            :class="{ stepper__item_active: step !== 1 }"
          >
            <span class="stepper__num">2</span>
            <span class="stepper__text">Оплата</span>
          </div>

          <span class="stepper__line"></span>

          <div
            class="stepper__item"
            :class="{ stepper__item_active: step !== 2 && step !== 1 }"
          >
            <span class="stepper__num">3</span>
            <span class="stepper__text">Получение заказа</span>
          </div>
        </div>
      </b-container>
    </section>

    <!-- Order adapted =  true  -->
    <section v-if="step === 1" class="cart-main">
      <b-container>
        <div class="cart__title" v-if="items.length > 0">
          <h1>Ваш заказ</h1>
          <span> ({{ items.length }} товара)</span>
        </div>

        <b-row v-if="items">
          <b-col xl="8" lg="7" md="10" class="m-xl-0 m-lg-0 m-md-auto">
            <div class="g-background g-seller" v-for="(seller, index) in items">
              <div class="g-seller__top">
                <div class="g-seller__name">
                  Продавец: <span>{{ index }}</span>
                </div>
                <show-all
                  to="/catalog?type=games"
                  label="Больше товаров этого продавца"
                  :icon="false"
                />
              </div>

              <g-cart-item
                v-for="item in seller"
                :key="item.keyId"
                :key-id="item.keyId"
                :name="item.name"
                :image="item.image"
                :item-price="item.itemPrice"
              />
            </div>
          </b-col>

          <b-col xl="4" lg="5" md="10" class="m-xl-0 m-lg-0 m-md-auto">
            <div class="g-background g-cart-total">
              <div class="g-cart-total__line">
                <span>Товары</span>
                <span>{{ getCartTotalSum }} ₽</span>
              </div>
              <!--              <div class="g-cart-total__line">-->
              <!--                <span>Сумма скидок</span>-->
              <!--                <span class="sale">- 1 100 ₽</span>-->
              <!--              </div>-->

              <div class="g-cart-total__sum">
                <span class="text-weight-600">Итого к оплате</span>
                <span class="text-weight-600 text-size-24"
                  >{{ getCartTotalSum }} ₽</span
                >
              </div>

              <main-button
                @click.native="step = 2"
                :disabled="items.length === 0"
                class="g-cart-total__btn"
                color="primary"
                label="перейти к оплате"
                full-width
                size="xl"
              />
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <!-- Payment content adapted = true -->
    <section v-if="step === 2" class="cart-main">
      <b-container>
        <div class="cart__title">
          <h1>Способ оплаты</h1>
        </div>

        <b-row>
          <b-col xl="8" lg="7" md="10" class="m-xl-0 m-lg-0 m-md-auto">
            <div class="g-payments">
              <g-payment-method
                :id="1"
                image="/images/payment-1.svg"
                name="Банковская карта"
                class="g-payments__method"
              />
              <g-payment-method
                :id="2"
                image="/images/payment-1.svg"
                name="Счет"
                class="g-payments__method"
              />
            </div>
          </b-col>
          <b-col xl="4" lg="5" md="10" class="m-xl-0 m-lg-0 m-md-auto">
            <div class="g-wrapper g-cart-total">
              <div class="g-cart-total__line">
                <span>Товары</span>
                <span>{{ getCartTotalSum }} ₽</span>
              </div>
              <!--              <div class="g-cart-total__line">-->
              <!--                <span>Сумма скидок</span>-->
              <!--                <span class="sale">- 1 100 ₽</span>-->
              <!--              </div>-->

              <div class="g-cart-total__sum">
                <span class="text-weight-600">Итого к оплате</span>
                <span class="text-weight-600 text-size-24"
                  >{{ getCartTotalSum }} ₽</span
                >
              </div>

              <main-button
                @click.native="buy"
                :disabled="Object.keys(paymentMethod).length === 0"
                class="g-cart-total__btn"
                color="primary"
                label="перейти к оплате"
                full-width
                size="xl"
              />
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <!-- Receive Order adapted = true -->
    <section v-if="step === 3" class="cart-main">
      <b-container>
        <div class="cart__title" v-if="items.length > 0">
          <h1>Ваш заказ</h1>
          <span> ({{ items.length }} товара)</span>
        </div>

        <b-row v-if="items">
          <b-col xl="8" lg="7" md="10" class="m-xl-0 m-lg-0 m-md-auto">
            <div class="g-wrapper g-seller" v-for="(seller, index) in items">
              <div class="g-seller__top">
                <div class="g-seller__name">
                  Продавец: <span>{{ index }}</span>
                </div>
              </div>

              <g-receive-cart-item
                v-for="item in seller"
                :key="item.keyId"
                :name="item.name"
                :image="item.image"
                :key-id="item.keyId"
              />
            </div>
          </b-col>
          <b-col xl="4" lg="5" md="10" class="m-xl-0 m-lg-0 m-md-auto">
            <div class="g-wrapper g-cart-total">
              <div class="g-cart-total__line">
                <span class="name">Товары</span>
                <span>{{ getCartTotalSum }} ₽</span>
              </div>
              <!--              <div class="g-cart-total__line">-->
              <!--                <span class="name">Сумма скидок</span>-->
              <!--                <span class="sale">- 1 100 ₽</span>-->
              <!--              </div>-->
              <!--              <div class="g-cart-total__line">-->
              <!--                <span class="name"-->
              <!--                  >McAfee AntiVirus PC 1 Device 3 Years McAfee Key GLOBAL</span-->
              <!--                >-->
              <!--                <span class="sale">- 1 100 ₽</span>-->
              <!--              </div>-->

              <div class="g-cart-total__line g-cart-total__line_total">
                <span class="name">Итого</span>
                <span>{{ getCartTotalSum }} ₽</span>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import ShowAll from '~/components/buttons/MainLink'
import GCartItem from '~/components/cart/Item'
import MainButton from '~/components/buttons/MainButton'
import GPaymentMethod from '~/components/cart/PaymetMethod'
import GReceiveCartItem         from '~/components/cart/ReceiveItem'
import { mapGetters, mapState } from 'vuex'

export default {
  components: {
    GReceiveCartItem,
    GPaymentMethod,
    MainButton,
    GCartItem,
    ShowAll,
  },
  // async mounted() {
  //   try {
  //     await this.$store.dispatch('cart/checkItemsInCart')
  //   } catch (e) {
  //     console.log(e)
  //   }
  // },
  methods: {
    buy() {
      this.step = 3
      this.$store.dispatch('cart/buy')
    }
  },
  computed: {
    ...mapGetters({
      items: 'cart/getItems',
      getCartTotalSum: 'cart/getCartTotalSum',
    }),
    ...mapState({
      isPaid: (state) => state.cart.isPaid,
      paymentMethod: (state) => state.cart.paymentMethod
    }),
  },
  beforeRouteLeave(to, from, next) {
    if (this.step === 3 && to.name !== 'cart-product-key-key' && this.isPaid) {
      this.$store.dispatch('cart/deleteAllItems')
    }

    next()
  },
  layout: 'default',
  data() {
    return {
      step: 1,
    }
  },
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.cart-main
    padding-bottom: 48px
.g-payments
    &__method
        &:not(:last-child)
            margin-bottom: 20px

.g-cart-total
    +lg
        margin-top: 20px

    &__btn
        margin-bottom: 28px

    &__sum
        display: flex
        align-items: center
        justify-content: space-between
        color: $white
        font-size: 16px
        line-height: 20px
        text-transform: uppercase
        padding: 22px 0
        border-top: 1px solid rgba(154, 147, 170, 0.3)

    &__line
        display: flex
        align-items: center
        justify-content: space-between
        color: $gray
        font-size: 16px
        line-height: 24px

        &:not(:last-child)
            margin-bottom: 20px

        &_total
            text-transform: uppercase
            border-top: 1px solid rgba(154, 147, 170, 0.3)

            span
                color: $white
                font-weight: 600
                padding-top: 44px
                font-size: 20px
                line-height: 28px

        .name
            max-width: 193px

        .sale
            color: rgba(227, 88, 88, 1)
            flex-shrink: 0

.g-seller
    &:not(:last-child)
        margin-bottom: 20px
    &__more
        color: dark-blue(1)
        font-size: 14px
        line-height: 24px

    &__name
        font-size: 14px
        line-height: 20px
        color: $gray

        span
            color: $white
            line-height: 24px
            font-weight: 600

    &__top
        display: flex
        align-items: center
        justify-content: space-between
        padding-bottom: 16px
        border-bottom: 1px solid rgba(154, 147, 170, 0.2)
        +md
            padding-bottom: 12px

.cart-top
    padding: 40px 0
    +md
        padding: 24px 0

.cart-container
    display: flex
    justify-content: space-between
    +lg
        flex-direction: column

.cart
    &__title
        display: flex
        align-items: baseline
        margin-bottom: 24px

        span
            font-size: 14px
            line-height: 20px
            color: $gray
            margin-left: 16px

.stepper
    display: flex
    align-items: center
    justify-content: space-between

    &__line
        margin: 0 24px
        height: 1px
        width: 100%
        background: rgba(154, 147, 170, 0.2)
        +md
            margin: 0 12px

    &__item
        display: flex
        align-items: center
        flex-shrink: 0
        opacity: 0.5
        +lg
            flex-direction: column
            justify-content: center
        +md
            flex-shrink: 1

        &_active
            opacity: 1

    &__text
        text-transform: uppercase
        font-weight: 600
        font-size: 16px
        line-height: 20px
        color: white(1)
        +md
            font-size: 12px
            line-height: 16px
            text-align: center

    &__num
        width: 64px
        height: 64px
        flex-shrink: 0
        margin-right: 12px
        display: flex
        color: white(1)
        align-items: center
        justify-content: center
        background: dark-blue(1)
        border-radius: 50%
        font-weight: 500
        font-size: 28px
        line-height: 36px
        +lg
            margin-right: 0
            margin-bottom: 8px
        +md
            width: 40px
            height: 40px
            font-size: 16px
            line-height: 24px
</style>

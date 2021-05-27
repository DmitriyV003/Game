<template>
  <div @click="changeMethod" class="g-payment-method" :class="{ 'g-payment-method_active': paymentMethod.id === id }">
    <div class="g-payment-method__left">
      <div class="g-payment-method__img">
        <img :src="image" alt="">
      </div>
      <span class="g-payment-method__name text-size-16 text-weight-500">{{ name }}</span>
    </div>
   <div class="g-payment-method__right">
     <div class="g-payment-method__check" :class="{ 'g-payment-method__check_active': paymentMethod.id === id }">
       <check-icon class="icon" />
     </div>
   </div>
  </div>
</template>

<script>
import icons from '~/mixins/icons'
import { mapState } from 'vuex'

export default {
  name: 'GPaymentMethod',
  mixins: [icons],
  props: {
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapState({
      paymentMethod: state => state.cart.paymentMethod
    })
  },
  methods: {
    changeMethod () {
      this.$store.commit('cart/setPaymentMethod', { name: this.name, id: this.id })
    }
  }
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.g-payment-method
  width: 100%
  display: flex
  align-items: center
  justify-content: space-between
  padding: 12px
  background: #282439
  border-radius: 12px
  cursor: pointer
  transition: background-color 0.1s
  &_active
    background: rgba(76, 44, 203, 0.35)
  &:hover
    background: rgba(76, 44, 203, 0.35)
    .g-payment-method__name
      color: $white
  &__check
    width: 24px
    height: 24px
    flex-shrink: 0
    border-radius: 50%
    border: 1.5px solid #9A93AA
    display: flex
    align-items: center
    justify-content: center
    .icon
      color: $white
      display: none
    &_active
      border-color: rgba(100, 62, 255, 1)
      background: rgba(100, 62, 255, 1)
      .icon
        display: inline-block
  &__left
    display: flex
    align-items: center
  &__name
    color: rgba(255, 255, 255, 0.8)
    transition: color 0.1s
    +md
      max-width: 124px
      margin-right: 16px
      font-size: 16px
      line-height: 22px
  &__img
    display: flex
    align-items: center
    justify-content: center
    border-radius: 10px
    width: 110px
    height: 64px
    background: $white
    margin-right: 24px
    +md
      margin-right: 16px
    img
      width: 100%
</style>

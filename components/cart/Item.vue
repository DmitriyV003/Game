<template>
  <div class="g-item">
    <div class="g-item__img">
      <img src="/images/cart-item.png" alt="" />
    </div>

    <div class="g-item__content g-item__content_desktop">
      <div class="g-item__info">
        <div class="g-item__name text-size-20 text-color-white text-weight-600">
          McAfee AntiVirus PC 1 Device 3 Years McAfee Key GLOBAL
        </div>
        <div class="g-item__delivery text-size-14 text-color-gray">
          Доставка: <span class="text-color-white">Бесплатный доступ</span>
        </div>
      </div>

      <div>
        <div class="g-item__counter">
          <minus-icon @click="changeQuantity(-1)" class="icon" />
          <input v-model="quantity" class="g-item__input" type="text" />
          <plus-icon @click="changeQuantity(1)" class="icon" />
        </div>
      </div>

      <div class="g-item__price">
        <span
          class="text-size-20 text-color-white text-weight-600 g-item__total"
          >2 230 ₽</span
        >
        <g-price class="price" :show-current-price="false" />
        <span class="g-item__delete text-size-14 text-color-gray">Удалить</span>
      </div>
    </div>

    <div class="g-item__content g-item__content_mobile">
      <div class="g-item__line">
        <div class="g-item__name text-size-20 text-color-white text-weight-600">
          McAfee AntiVirus PC 1 Device 3 Years McAfee Key GLOBAL
        </div>
        <div class="g-item__counter">
          <minus-icon class="icon" />
          <input v-model="quantity" class="g-item__input" type="text" />
          <plus-icon class="icon" />
        </div>
      </div>

      <div class="g-item__line g-item__line_center">
        <span
          class="text-size-20 text-color-white text-weight-600 g-item__total"
          >2 230 ₽</span
        >
        <div class="g-item__delivery text-size-14 text-color-gray">
          Доставка:
        </div>
      </div>

      <div class="g-item__line">
        <g-price adaptive-sm class="price" :show-current-price="false" />
        <div class="g-item__delivery text-size-14 text-color-gray">
          <span class="text-color-white">Бесплатный доступ</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import icons from '~/mixins/icons'
import GPrice from '~/components/GPrice'

export default {
  name: 'GCartItem',
  components: { GPrice },
  mixins: [icons],
  props: {
    quantity: {
      type: Number,
      default: () => 1,
    },
  },
  methods: {
    changeQuantity(number) {},
  },
}
</script>

<style lang="sass" scoped></style>

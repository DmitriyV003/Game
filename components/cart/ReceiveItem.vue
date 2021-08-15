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
          Товаров: <span class="text-color-white">1</span>
        </div>
      </div>

      <div>
        <div class="g-item__show-key">
          <main-button color="primary" size="xl" label="показать ключ" />
        </div>
      </div>
    </div>

    <div class="g-item__content g-item__content_mobile">
      <div class="g-item__line">
        <div class="g-item__name text-size-20 text-color-white text-weight-600">
          McAfee AntiVirus PC 1 Device 3 Years McAfee Key GLOBAL
        </div>
        <div class="g-item__delivery text-size-14 text-color-gray">
          Товаров: <span class="text-color-white">1</span>
        </div>
      </div>

      <div class="g-item__line">
        <main-button
          :full-width="true"
          color="primary"
          size="xl"
          label="показать ключ"
        />
      </div>
    </div>
  </div>
</template>

<script>
import icons from '~/mixins/icons'
import MainButton from '~/components/buttons/MainButton'

export default {
  name: 'GReceiveCartItem',
  components: { MainButton },
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

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.g-item
  &__show-key
    .button
      +xl
        padding-left: 26px
        padding-right: 26px
</style>

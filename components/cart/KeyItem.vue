<template>
  <div>
    <div class="g-item">
      <div class="g-item__img">
        <img :src="image" alt="" />
      </div>

      <div class="g-item__content g-item__content_desktop">
        <div class="g-item__info">
          <div
            class="g-item__name text-size-20 text-color-white text-weight-600"
          >
            {{ name }}
          </div>
        </div>

        <div>
          <div class="g-item__counter">
            <show-all :icon="false" label="Открыть спор" />
          </div>
        </div>
      </div>

      <div class="g-item__content g-item__content_mobile">
        <div class="g-item__line g-item__line_title">
          <div
            class="g-item__name text-size-20 text-color-white text-weight-600"
          >
            {{ name }}
          </div>
          <div class="g-item__counter">
            <show-all :icon="false" label="Открыть спор" />
          </div>
        </div>
      </div>
    </div>

    <div class="g-keys">
      <g-key :value="keyId" />
    </div>
  </div>
</template>

<script>
import icons from '~/mixins/icons'
import GPrice from '~/components/GPrice'
import ShowAll from '~/components/buttons/MainLink'
import MainButton from '~/components/buttons/MainButton'
import GKey from '~/components/Key'
export default {
  name: 'GKeyItem',
  components: { GKey, MainButton, ShowAll, GPrice },
  mixins: [icons],
  props: {
    quantity: {
      type: Number,
      default: () => 1,
    },
    keyId: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  },
  methods: {
    changeQuantity(number) {},
  },
}
</script>

<style lang="sass" scoped>
@import 'theme/_vars'
@import 'theme/_mix'
.g-keys
  margin-top: 24px
  +md
    margin-top: 0
.g-item
  border-bottom: none
  padding: 0
  &__img
    +md
      height: 296px
  &__line
    margin: 0
    +lg
      margin-bottom: 20px
  &__content
    +lg
      order: -3
</style>

<template>
  <div class="g-purchased">
    <div class="g-purchased__top g-purchased__top_mobile">
      <h2>{{ name }}</h2>
      <show-all
        @custom-click="openNewDispute"
        label="Открыть спор"
        :icon="false"
      />
    </div>

    <div class="g-purchased__img">
      <img :src="image" alt="" />
    </div>

    <div class="g-purchased__block">
      <div class="g-purchased__top g-purchased__top_desktop">
        <h2>{{ name }}</h2>
        <show-all
          @custom-click="openNewDispute"
          label="Открыть спор"
          :icon="false"
        />
      </div>

      <p class="text-color-white text-weight-600 g-purchased__price">
        {{ price }} ₽
      </p>

      <g-key class="g-purchased__key" adaptive="xl" :value="code" />
    </div>
  </div>
</template>

<script>
import ShowAll from '~/components/buttons/MainLink'
import GKey from '~/components/Key'
import { eventBus } from '~/plugins/event-bus'
export default {
  name: 'GPurchased',
  data: () => {
    return {
      eventBus,
    }
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
      default: () => '/images/purchased.svg',
    },
  },
  components: { GKey, ShowAll },
  methods: {
    openNewDispute() {
      eventBus.$emit('newDisputePopupOpen')
    },
  },
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.g-purchased
  background: #282439
  border-radius: 12px
  padding: 24px
  display: flex
  +md
    flex-direction: column
    padding: 16px
  &__key
    margin-top: 86px
  &__price
    font-size: 20px
    line-height: 28px
    margin-bottom: auto
    +md
      margin-bottom: 12px
  &__block
    width: calc(100% - 208px)
    padding-left: 24px
    display: flex
    flex-direction: column
    justify-content: space-between
    align-items: flex-start
    +md
      padding-left: 0
      width: 100%
      margin-top: 12px
  &__top
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 28px
    width: 100%
    &_mobile
      display: none
      +md
        display: flex
    &_desktop
      +md
        display: none
  &__img
    border-radius: 8px
    overflow: hidden
    flex-shrink: 0
    max-width: 208px
    +md
      margin: auto
      max-width: 250px
      width: 100%
    +sm
      max-width: 296px
      width: 100%
    img
      width: 100%
</style>

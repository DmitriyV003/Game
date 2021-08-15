<template>
  <div @click.stop="goToPurchase" class="g-purchase-item__wrapper">
    <div class="g-purchase-item">
      <img class="g-purchase-item__img" :src="picture" alt="" />
      <div class="g-purchase-item__text">
        <p class="g-purchase-item__name">{{ name }}</p>
        <div
          v-if="isKeyShown"
          class="g-purchase-item__key g-purchase-item__key_desktop"
        >
          <p class="g-purchase-item__value">{{ code }}</p>
          <button @click="copy" class="button-reboot g-purchase-item__button">
            <copy-icon class="icon" />
          </button>
        </div>
        <div class="g-purchase-item__bottom">
          <show-all
            @click.stop.native="isKeyShown = !isKeyShown"
            :label="!isKeyShown ? 'Показать ключ' : 'Скрыть'"
            :icon="false"
          />
          <img src="/images/icons/steam-small.svg" alt="" />
        </div>
      </div>
    </div>

    <div
      v-if="isKeyShown"
      class="g-purchase-item__key g-purchase-item__key_mobile"
    >
      <p class="g-purchase-item__value">{{ code }}</p>
      <button @click="copy" class="button-reboot g-purchase-item__button">
        <copy-icon class="icon" />
      </button>
    </div>
  </div>
</template>

<script>
import ShowAll from '~/components/buttons/MainLink'
import icons from '~/mixins/icons'
export default {
  name: 'GPurchaseItem',
  components: { ShowAll },
  mixins: [icons],
  data: () => {
    return {
      isKeyShown: false,
    }
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    platform: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
  },
  methods: {
    async copy() {
      try {
        await navigator.clipboard.writeText(this.code)
      } catch (e) {}
    },
    async goToPurchase() {
      try {
        await this.$router.push('/dashboard/purchases/' + this.id)
      } catch (e) {}
    },
  },
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.g-purchase-item
  background: rgba(100, 62, 255, 0.1)
  padding: 24px 20px 16px
  border-radius: 12px
  height: 380px
  display: flex
  flex-direction: column
  justify-content: space-between
  +md
    flex-direction: row
    padding: 0
    max-height: 208px
    background: none
  &:hover
    cursor: pointer
    background: rgba(100, 62, 255, 0.25)
    +md
      background: none
  &__col
    margin-bottom: 20px
    +md
      margin-bottom: 16px
  &__wrapper
    +md
      background: rgba(100, 62, 255, 0.1)
      cursor: pointer
      border-radius: 8px
      &:hover
        background: rgba(100, 62, 255, 0.25)
  &__text
    height: 100%
    display: flex
    flex-direction: column
    width: 100%
    +md
      padding: 16px
  &__value
    padding: 14px 8px
    background: $white
    color: rgba(0, 0, 0, 0.8)
    font-size: 14px
    line-height: 16px
    font-weight: 500
    letter-spacing: 0.05em
    width: 100%
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
    border-radius: 4px 0 0 4px
    +md
      margin: 8px
      padding: 12px
      border-radius: 4px
  &__button
    display: flex
    align-items: center
    justify-content: center
    flex-shrink: 0
    width: 44px
    height: 44px
    background: rgba(100, 62, 255, 1)
    color: $white
    font-size: 25px
    +md
      width: 56px
      height: 56px
  &__key
    margin-top: auto
    margin-bottom: 12px
    display: flex
    border-radius: 4px
    overflow: hidden
    &_desktop
      +md
        display: none
    &_mobile
      display: none
      +md
        display: flex
        margin-bottom: 0
        background: rgba(100, 62, 255, 0.35)
  &__bottom
    display: flex
    align-items: center
    justify-content: space-between
  &__img
    max-width: 100%
    display: block
    margin-right: auto
    margin-left: auto
    +md
      margin: 0
      height: 100%
  &__name
    text-transform: uppercase
    margin-top: 24px
    color: $white
    font-weight: 600
    font-size: 16px
    line-height: 20px
    margin-bottom: auto
    +md
      margin-top: 0
</style>

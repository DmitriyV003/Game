<template>
  <div class="g-sale-item" :class="{ 'g-sale-item_disabled': disabled }">
    <div
      class="g-sale-item__settings"
      :class="{ 'g-sale-item__settings_active': settings }"
    >
      <close-icon @click="settings = false" class="g-close" />

      <div class="g-sale-item__action">
        <pencil-icon class="icon" />
        <span class="text">Редактировать</span>
      </div>

      <div
        v-if="archived"
        class="g-sale-item__action"
        @click="changeArchiveStatus(false)"
      >
        <store-icon class="icon" />
        <span class="text">Выставить на продажу</span>
      </div>

      <div
        v-if="!archived"
        class="g-sale-item__action"
        @click="changeArchiveStatus(true)"
      >
        <archive-icon class="icon" />
        <span class="text">Убрать в Архив</span>
      </div>

      <div
        class="g-sale-item__action"
        @click="deleteSaleItem"
      >
        <trash-icon class="icon" />
        <span class="text">Удалить</span>
      </div>
    </div>

    <div
      class="g-sale-item__img"
      :class="{ 'g-sale-item__img_disabled': disabled }"
    >
      <img src="/images/sale-item-1.svg" alt="" />
    </div>

    <div class="g-sale-item__block">
      <p
        class="g-sale-item__name"
        :class="{ 'g-sale-item__name_disabled': disabled }"
      >
        Grand Theft Auto V: Premium Online Editiodf dsg sdfgdfgdf dfg dfh gdr
      </p>

      <g-price class="g-sale-item__price" :disabled="disabled" />

      <div class="g-sale-item__bottom">
        <p v-if="!disabled">
          Осталось: <span class="text-color-white">12 ключей</span>
        </p>
        <p
          v-if="disabled"
          class="g-sale-item__keys"
          :class="{ 'g-sale-item__keys_disabled': disabled }"
        >
          <span class="text-color-white">2 ключа</span>
        </p>
        <settings-icon
          v-if="!disabled"
          @click="settings = true"
          class="icon"
        />
      </div>
    </div>
  </div>
</template>

<script>
import GPrice from '~/components/GPrice'
import icons from '~/mixins/icons'
export default {
  name: 'GSaleItem',
  mixins: [icons],
  components: { GPrice },
  data: () => {
    return {
      settings: false,
    }
  },
  methods: {
    async changeArchiveStatus (archive) {
      try {
        await this.$store.dispatch('sales/changeArchiveStatus', { archive, itemId: this.itemId })
      } catch (e) {
        console.log(e)
      }
    },
    async deleteSaleItem () {
      try {
        await this.$store.dispatch('sales/deleteSaleItem', { itemId: this.itemId })
      } catch (e) {
        console.log(e)
      }
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: () => false,
    },
    archived: {
      type: Boolean,
      default: () => false,
    },
    itemId: {
      type: String,
      default: () => 'ff',
    },
  },
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.g-sale-item
  background: rgba(100, 62, 255, 0.1)
  padding: 24px 20px 16px 20px
  border-radius: 12px
  min-height: 380px
  display: flex
  flex-direction: column
  position: relative
  overflow: hidden
  +md
    flex-direction: row
    padding: 0
    min-height: 152px
    height: 100%
  &_disabled
    background: rgba(125, 125, 125, 0.15)
    opacity: 0.9
  &__price
    +md
      margin-top: auto
  &__block
    height: 100%
    display: flex
    flex-direction: column
    flex: 1
    +md
      padding: 12px 8px 8px 16px
  &__keys
    &_disabled
      opacity: 0.75
  &__action
    font-weight: 500
    color: $white
    display: flex
    align-items: center
    cursor: pointer
    font-size: 14px
    line-height: 16px
    &:not(:last-child)
      margin-bottom: 24px
    .text
      font-size: inherit
      font-weight: inherit
    .icon
      margin-right: 8px
      color: white(0.5)
  &__settings
    position: absolute
    width: 100%
    padding: 19px 16px 16px 12px
    border-radius: 10px
    bottom: 0
    left: 0
    background: #2F245C
    display: flex
    flex-direction: column
    z-index: 20
    transition: all 0.3s
    transform: translateY(100%)
    opacity: 0
    +md
      transform: translateY(0) translateX(0)
      width: calc(100% - 124px)
      border-radius: 0 8px 8px 0
      height: 100%
      right: -100%
      left: initial
      padding: 8px 8px 16px 12px
    &_active
      transform: translateY(0) translateX(0)
      opacity: 1
      +md
        right: 0
    .g-close
      display: flex
      margin-left: auto
      margin-bottom: 3px
      color: rgba(100, 62, 255, 1)
      cursor: pointer
      font-size: 30px
  &__bottom
    display: flex
    align-items: center
    justify-content: space-between
    margin-top: auto
    +md
      margin-top: 16px
    .icon
      color: $white
      cursor: pointer
      font-size: 21px
    p
      font-size: 14px
      line-height: 20px
      color: $gray
      letter-spacing: -0.4px
  &__name
    margin-bottom: 16px
    font-weight: 600
    color: $white
    text-transform: uppercase
    font-size: 16px
    line-height: 20px
    -webkit-line-clamp: 2
    display: -webkit-box
    -webkit-box-orient: vertical
    overflow: hidden
    text-overflow: ellipsis
    +md
      margin-bottom: 24px
    &_disabled
      opacity: 0.75
  &__img
    display: flex
    align-items: center
    justify-content: center
    margin-bottom: 24px
    +md
      width: 124px
      flex-shrink: 0
      margin-bottom: 0
    &_disabled
      opacity: 0.75
    img
      width: calc(100% - 72px)
      border-radius: 4px
      +xl
        width: calc(100% - 30px)
      +xl
        width: calc(100% - 30px)
      +md
        width: 100%
        height: 100%
</style>

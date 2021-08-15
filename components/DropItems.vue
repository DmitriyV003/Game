<template>
  <div class="g-drop-component" :class="{ 'g-drop-component_active': active }">
    <div
      class="g-drop-component__title"
      :class="{ 'g-drop-component__title_active': active }"
      @click="active = !active"
    >
      <p class="text-weight-600 text-size-20">{{ title }}</p>
      <chevron-down-icon
        class="g-drop-component__arrow"
        :class="{ 'g-drop-component__arrow_active': active }"
      />
    </div>

    <slide-up-down :active="active" :duration="200">
      <div
        class="g-drop-component__drops"
        :class="{ 'g-drop-component__drops_lg-scrollable': lgScrollableDrops }"
      >
        <slot name="drop-items"></slot>
      </div>
    </slide-up-down>
  </div>
</template>

<script>
import icons from '~/mixins/icons'
import SlideUpDown from 'vue-slide-up-down'

export default {
  name: 'DropItems',
  mixins: [icons],
  components: {
    SlideUpDown,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    lgScrollableDrops: {
      type: Boolean,
      default: () => false,
    },
  },
  data: () => {
    return {
      active: true,
    }
  },
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.g-drop-component
  border: 1px solid transparent
  +lg
    border-radius: 6px
    transition: all 0.2s
  &_active
    +lg
      background: #2F2B40
      border-color: #433F54
  &__drops
    +lg
      padding: 0 16px
    &_lg-scrollable
      +lg
        max-height: 100px
        overflow-y: auto
  &__arrow
    transition: all 0.5s
    transform: rotate(180deg)
    font-size: 20px
    &_active
      transform: rotate(0)
  &__title
    display: flex
    align-items: center
    justify-content: space-between
    cursor: pointer
    color: white(1)
    transition: all 0.2s
    position: relative
    &_active
      +lg
        background: transparent !important
      &::after
        transition: all 0.2s
        +lg
          content: ''
          position: absolute
          bottom: 0
          left: 16px
          width: calc(100% - 32px)
          height: 1px
          background: rgba(154, 147, 170, 0.5)
    +lg
      padding: 12px 20px
      background: rgba(57, 53, 74, 1)
      border-radius: 6px
      margin-bottom: 0
    p
      color: inherit
      +lg
        font-weight: 500
        font-size: 16px
        line-height: 24px
</style>

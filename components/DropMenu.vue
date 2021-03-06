<template>
  <div
    class="g-drop-menu"
    :class="[
      { 'g-drop-menu_active': open },
      'g-drop-menu_' + size,
      { 'g-drop-menu_active_sm': open && size === 'sm' },
    ]"
  >
    <div
      @click="open = !open"
      class="g-drop-menu__active"
      :class="[
        { 'g-drop-menu__active_active': open },
        { 'g-drop-menu__active_active_sm': open && size === 'sm' },
        'g-drop-menu__active_' + size,
      ]"
    >
      <span v-if="currentState === null" class="g-drop-menu__placeholder">{{
        placeholder
      }}</span>
      <span v-if="currentState !== null" class="text">{{
        currentState[labelValue]
      }}</span>
      <chevron-down-icon
        class="icon"
        :class="[{ icon_active: open }, 'icon_' + size]"
      />
    </div>

    <div
      v-if="open"
      @mouseleave="open = false"
      class="g-drop-menu__drop"
      :class="['g-drop-menu__drop_' + size]"
    >
      <div
        v-for="link in links"
        @click="setActive(link[idValue])"
        class="g-drop-menu__drop-link"
        :key="link[idValue]"
        :class="{
          'g-drop-menu__drop-link_active':
            currentState !== null && currentState[idValue] === link[idValue],
        }"
      >
        <span class="text">{{ link[labelValue] }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import icons from '~/mixins/icons'

export default {
  name: 'GDropMenu',
  mixins: [icons],
  methods: {
    setActive(value) {
      this.currentState = this.links.find((x) => x[this.idValue] === value)
      this.open = false

      this.$emit('input', this.currentState[this.idValue])
    },
  },
  props: {
    placeholder: {
      type: String,
      default: () => 'placeholder',
    },
    idValue: {
      type: String,
      default: () => 'value',
    },
    labelValue: {
      type: String,
      default: () => 'label',
    },
    size: {
      type: String,
      default: () => '',
    },
    links: {
      type: Array,
      default: () => [
        { label: 'Активные продажи', value: 'bought' },
        { label: 'Неактивные продажи', value: 'archived' },
      ],
    },
  },
  data: () => {
    return {
      open: false,
      currentState: null,
    }
  },
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.g-drop-menu
  position: relative
  border-radius: 12px
  overflow: hidden
  border: 1px solid transparent
  &_sm
    width: 78px
    border-radius: 5px
  &_active
    overflow: visible
    border-radius: 12px 12px 0 0
    &_sm
      border-radius: 5px 5px 0 0
  &__placeholder
    font-weight: 500
    color: $gray
    font-size: 14px
    line-height: 24px
    text-transform: initial
  &__drop-link
    padding: 12px 16px
    color: $gray
    font-size: 13px
    line-height: 20px
    cursor: pointer
    text-transform: uppercase
    white-space: nowrap
    overflow: hidden
    text-overflow: ellipsis
    &:hover
      background: rgba(154, 147, 170, 0.04)
      color: $white
    span
      font-weight: inherit
      font-size: inherit
      line-height: inherit
    &_active
      background: rgba(154, 147, 170, 0.04)
      color: $white
      font-weight: 600
  &__drop
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25)
    border-radius: 0 0 12px 12px
    border: 1px solid #433F54
    background: #292538
    border-top: none
    padding: 8px 0
    position: absolute
    left: 0
    width: 100%
    z-index: 55
    bottom: 0
    transform: translateY(100%)
    max-height: 180px
    overflow-y: auto
    &_sm
      border: none
  &__active
    padding: 12.4px 20px 12px 20px
    display: flex
    align-items: center
    background: #2F2B40
    border: 1px solid #433F54
    justify-content: space-between
    cursor: pointer
    color: $white
    font-weight: 600
    text-transform: uppercase
    font-size: 13px
    line-height: 20px
    border-radius: 12px
    &_sm
      padding: 6px 12px
      border: none
      border-radius: 5px
      font-weight: 400
    &_active
      border-radius: 12px 12px 0 0
      &_sm
        border-radius: 5px 5px 0 0
    .text
      font-weight: inherit
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
    .icon
      margin-left: 20px
      flex-shrink: 0
      font-size: 24px
      color: rgba(100, 62, 255, 1)
      transition: all 0.2s
      &_sm
        margin-left: 8px
      &_active
        transform: rotate(180deg)
</style>

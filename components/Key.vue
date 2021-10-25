<template>
  <div class="g-key g-key_md" :class="['g-key_' + adaptive]">
    <p
      class="g-key__value g-key__value_md"
      :class="['g-key__value_' + adaptive]"
    >
      {{ value }}dfd-dggdg-dg-d-gd-g-dfhg-d
    </p>
    <main-button
      class="g-key__button g-key__button_desktop g-key__button_desktop_md"
      :class="['g-key__button_desktop_' + adaptive]"
      @click.native="copy"
      color="primary"
      size="xl"
      label="копировать"
    />
    <button
      @click="copy"
      class="
        button-reboot
        g-key__button g-key__button_mobile g-key__button_mobile_md
      "
      :class="['g-key__button_mobile_' + adaptive]"
    >
      <copy-icon class="icon" />
    </button>
  </div>
</template>

<script>
import MainButton from '~/components/buttons/MainButton'
import icons from '~/mixins/icons'
export default {
  name: 'GKey',
  components: { MainButton },
  mixins: [icons],
  props: {
    value: {
      type: String,
      required: true,
    },
    adaptive: {
      type: String,
      default: () => 'md',
    },
  },
  methods: {
    async copy() {
      await navigator.clipboard.writeText(this.value)
      this.$bvToast.toast('Ключ скопирован в буфер обмена', {
        title: 'Уведомление',
        variant: 'primary',
        solid: true,
        appendToast: true,
      })
    },
  },
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.g-key
  padding: 20px
  border-radius: 10px
  background: rgba(100, 62, 255, 0.35)
  display: flex
  align-items: center
  justify-content: space-between
  width: 100%
  &_md
    +md
      padding: 0
  &_xl
    +xl
      padding: 0
  &:not(:last-child)
    margin-bottom: 16px
  &__button
    &_desktop
      &_md
        +md
          display: none
      &_xl
        +xl
          display: none
    &_mobile
      display: none
      .icon
        color: $white
        font-size: 27px
      &_xl
        +xl
          display: flex
          align-items: center
          justify-content: center
          background: #643EFF
          border-radius: 0px 8px 8px 0px
          height: 60px
          width: 56px
      &_md
        +md
          display: flex
          align-items: center
          justify-content: center
          background: #643EFF
          border-radius: 0px 8px 8px 0px
          height: 60px
          width: 56px
  &__value
    padding: 13px 20px
    border-radius: 8px
    width: 100%
    margin-right: 16px
    background: $white
    font-size: 16px
    line-height: 24px
    font-weight: 500
    overflow: hidden
    text-overflow: ellipsis
    white-space: nowrap
    &_xl
      +xl
        margin: 8px
        padding: 12px 16px
        font-size: 14px
        line-height: 20px
    &_md
      +md
        margin: 8px
        padding: 12px 16px
        font-size: 14px
        line-height: 20px
</style>

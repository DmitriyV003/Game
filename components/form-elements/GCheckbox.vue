<template>
  <div class="g-checkbox">
    <label :for="val" class="g-checkbox__box">
      <span class="g-checkbox__square" :class="{ 'g-checkbox__square_active': isChecked }">
        <check-icon class="text-color-white g-checkbox__check" v-if="isChecked" />
      </span>
      <span class="g-checkbox__label text-size-16 ">{{ label }}</span>
      <span class="g-checkbox__text text-color-gray">{{ count }}</span>
    </label>
    <input
      :value="val"
      type="checkbox"
      :id="val"
      class="g-checkbox__input"
      v-model="model"
    >
  </div>
</template>

<script>
import icons from '~/mixins/icons'

export default {
  name: 'GCheckBox',
  mixins: [icons],
  props: [ 'value', 'val', 'label', 'count' ],
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      }
    },
    isChecked () {
      return this.model.includes(this.val);
    }
  },
  methods: {
  }
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.g-checkbox
  &__input
    display: none
  &__box
    display: flex
    align-items: center
    justify-content: flex-start
    margin: 0
    padding: 0
    cursor: pointer
  &__label
    color: white(0.8)
  &__text
    margin-left: auto
    font-size: 14px
    line-height: 20px
    letter-spacing: -0.4px
  &__check
    font-size: 14px
  &__square
    margin-right: 13px
    width: 20px
    height: 20px
    border-radius: 3px
    border: 1.4px solid rgba(154, 147, 170, 0.5)
    display: flex
    align-items: center
    justify-content: center
    &_active
      background: dark-blue(1)
</style>

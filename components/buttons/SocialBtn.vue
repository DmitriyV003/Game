<template>
  <nuxt-link :to="to" exact replace class="social-btn">
    <span :style="{ background: iconColor }" class="social-btn__icon">
      <img :src="icon" alt="">
    </span>

    <span class="social-btn__text">
      {{ label }}
    </span>
  </nuxt-link>
</template>

<script>
export default {
  name: 'SocialBtn',
  props: {
    label: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    iconColor: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass">
@import '../../theme/vars'
.social-btn
  display: flex
  align-items: center
  justify-content: flex-start
  padding: 0
  cursor: pointer
  border: none
  outline: none
  background: rgba(57, 53, 74, 1)
  border-radius: 6px
  width: 100%
  box-shadow: none
  &:hover
    background: rgba(76, 44, 203, 0.35)
    box-shadow: 0px 2px 8px #1F1C2A
  &__text
    padding: 13px 20px
    font-size: 16px
    line-height: 24px
    font-weight: normal
    color: white(0.8)
    transition: all 0.1s
  &__icon
    border-radius: 6px
    width: 50px
    height: 50px
    flex-shrink: 0
    display: flex
    align-items: center
    justify-content: center
</style>

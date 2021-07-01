<template>
  <div class="for-sellers-banner">
    <img src="/images/seller-banner.png" alt="" class="for-sellers-banner__img">
    <h2 class="for-sellers-banner__title">Один шаг на пути к сотрудничеству!</h2>
    <main-button color="primary" size="xl" label="стать продавцом" />
  </div>
</template>

<script>
import MainButton from '~/components/buttons/MainButton'
export default {
  name: 'GPromoBanner',
  components: {MainButton}
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.for-sellers-banner
  min-height: 216px
  background: linear-gradient(95.48deg, #120F28 -4.94%, #691E66 116.71%)
  border-radius: 12px
  display: flex
  flex-direction: column
  justify-content: center
  padding: 44px
  position: relative
  +md
    padding: 32px 16px
    overflow: hidden
  &__title
    margin-bottom: 40px
    position: relative
    z-index: 5
    +md
      margin-bottom: 32px
  &__img
    position: absolute
    bottom: 0
    right: 0
    +xl
      width: 50%
    +lg
      opacity: 0.5
    +md
      width: 70%
      right: -150px
    +sm
      width: 100%  
</style>

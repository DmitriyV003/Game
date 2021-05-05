<template>
  <header class="auth-header">
    <b-container>
      <div class="auth-header__main">
        <nuxt-link class="auth-header__logo" to="/">
          <img src="/images/logo.svg" alt="">
        </nuxt-link>

        <div v-if="!empty">
          <main-button to="/sign-up" v-if="isSingIn" tag="a" color="primary" label="Регистрация" />
          <main-button to="/sign-in" v-if="!isSingIn" tag="a" color="primary" label="Вход" />
        </div>
      </div>
    </b-container>
  </header>
</template>

<script>
import MainButton from '~/components/buttons/MainButton'
export default {
  name: 'AuthTopMenu',
  components: { MainButton },
  props: {
    isSingIn: {
      type: Boolean,
      default: () => false
    },
    empty: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>

<style lang="sass">
  @import '../../theme/vars'
  @import '../../theme/mix'
  .auth-header
    background: rgba(41, 37, 56, 1)
    &__main
      display: flex
      align-items: center
      justify-content: space-between
      padding: 22px 0
    &__logo
      +md
        max-width: 103px
      img
        width: 100%
</style>

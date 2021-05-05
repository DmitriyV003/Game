<template>
  <b-container>
    <div class="g-window auth-structure">
      <nuxt-link tag="div" to="/sign-in/email" class="auth-structure__back">
        <chevron-left-icon class="icon" />
        <span class="text-weight-500">Назад</span>
      </nuxt-link>

      <p class="auth-structure__title text-color-white text-uppercase">Восстановить пароль</p>
      <p class="auth-structure__text text-color-gray text-weight-400">Введите E-mail, указанный в профиле личного кабинета чтобы восстановить пароль</p>

      <div class="auth-structure__inputs">
        <g-input class="auth-structure__input" placeholder="E-mail *" />
      </div>

      <main-button full-width size="xl" color="primary" label="восстановить" />
    </div>
  </b-container>
</template>

<script>
  import icons from '~/mixins/icons'
  import GInput from '~/components/form/Input'
  import MainButton from '~/components/buttons/MainButton'

  export default {
    name: 'PasswordReset',
    components: { MainButton, GInput },
    layout: 'sign-in',
    mixins: [icons]
  }
</script>

<style lang="sass" scoped>
  @import 'theme/_mix'
  @import 'theme/_vars'
  .auth-structure
    &__inputs
      margin-bottom: 32px
      +md
        margin-bottom: 24px
    &__title
      margin-bottom: 16px
    &__text
      margin-bottom: 32px
      font-size: 14px
      line-height: 20px
      +md
        line-height: 22px
</style>

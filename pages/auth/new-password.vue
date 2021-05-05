<template>
  <b-container>
    <div class="g-window auth-structure">

      <p class="auth-structure__title text-color-white text-uppercase">создание нового пароля</p>

      <div class="auth-structure__inputs">
        <g-input class="auth-structure__input" placeholder="Новый пароль" />
        <g-input class="auth-structure__input" placeholder="Повторите новый пароль" />
      </div>

      <main-button full-width size="xl" color="primary" label="Обновить пароль" />
    </div>
  </b-container>
</template>


<script>
  import icons from '~/mixins/icons'
  import GInput from '~/components/form/Input'
  import MainButton from '~/components/buttons/MainButton'

  export default {
    name: 'NewPassword',
    components: { MainButton, GInput },
    layout: 'auth-empty',
    mixins: [icons]
  }
</script>

<style lang="sass" scoped>
.auth-structure
  &__inputs
    margin-bottom: 32px
</style>

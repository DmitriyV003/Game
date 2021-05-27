<template>
  <b-container>
    <div class="g-window auth-structure">
      <nuxt-link tag="div" to="/sign-in" class="auth-structure__back">
        <chevron-left-icon class="icon" />
        <span class="text-weight-500">Назад</span>
      </nuxt-link>
      
      <p class="auth-structure__title text-color-white text-uppercase">Вход по E-mail</p>
      
      <div class="auth-structure__inputs">
        <g-input class="auth-structure__input" placeholder="E-mail *" />
        <g-input class="auth-structure__input" placeholder="Пароль *" />
      </div>
      
      <show-all class="auth-structure__forget" to="/auth/password-reset" label="Забыли пароль?" :icon="false" />
      
      <main-button full-width size="xl" color="primary" label="войти" />
    </div>
  </b-container>
</template>


<script>
import icons from '~/mixins/icons'
import GInput from "~/components/form-elements/Input";
import ShowAll from "~/components/buttons/MainLink";
import MainButton from "~/components/buttons/MainButton";

export default {
  name: 'EmailSignIn',
  components: {MainButton, ShowAll, GInput},
  layout: 'sign-in',
  mixins: [icons]
}
</script>

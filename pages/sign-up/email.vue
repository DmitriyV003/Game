<template>
  <b-container>
    <div class="g-window auth-structure">
      <nuxt-link tag="div" to="/sign-up" class="auth-structure__back">
        <chevron-left-icon class="icon" />
        <span class="text-weight-500">Назад</span>
      </nuxt-link>

      <p class="auth-structure__title text-color-white text-uppercase">Зарегистрироваться</p>

      <div class="auth-structure__inputs">
        <g-input class="auth-structure__input" placeholder="Имя *" />
        <g-input class="auth-structure__input" placeholder="Фамилия *" />
        <g-input class="auth-structure__input" placeholder="E-mail адрес *" />
        <g-input class="auth-structure__input" placeholder="Пароль *" />
      </div>

      <show-all class="auth-structure__forget" to="/auth/password-reset" label="Забыли пароль?" :icon="false" />

      <main-button full-width size="xl" color="primary" label="зарегистрироваться" />
    </div>
  </b-container>
</template>


<script>
import icons from '~/mixins/icons'
  import GInput from "~/components/form-elements/Input";
  import ShowAll from "~/components/buttons/MainLink";
  import MainButton from "~/components/buttons/MainButton";

export default {
  name: 'EmailSignUp',
  components: { MainButton, ShowAll, GInput },
  layout: 'sign-up',
  mixins: [icons]    
}
</script>

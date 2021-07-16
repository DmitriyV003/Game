<template>
  <b-container>
    <form action="" @submit.prevent="forgetPassword">
      <div class="g-window auth-structure">
        <nuxt-link tag="div" to="/sign-in/email" class="auth-structure__back">
          <chevron-left-icon class="icon" />
          <span class="text-weight-500">Назад</span>
        </nuxt-link>

        <p class="auth-structure__title text-color-white text-uppercase">Восстановить пароль</p>
        <p class="auth-structure__text text-color-gray text-weight-400">Введите E-mail, указанный в профиле личного кабинета чтобы восстановить пароль</p>

        <div class="auth-structure__inputs">
          <g-input
            v-model.trim="$v.form.email.$model"
            class="auth-structure__input"
            placeholder="E-mail *"
            :error="$v.form.email.$error || 'email' in apiErrors"
          >
            <template v-slot:error>
              <span v-if="!$v.form.email.required && $v.form.email.$error">Email обязателен</span>
              <span v-if="!$v.form.email.email && $v.form.email.$error">Email должен быть валидным</span>
              <span v-if="!$v.form.email.maxLength && $v.form.email.$error">Максимальная длина Email {{ $v.form.email.$params.maxLength.max }} символов</span>
            </template>
          </g-input>
        </div>

        <main-button :disabled="disabled || $v.$invalid" tag="button" type="submit" full-width size="xl" color="primary" label="восстановить" />
      </div>
    </form>
  </b-container>
</template>

<script>
  import icons from '~/mixins/icons'
  import GInput from '~/components/form-elements/Input'
  import MainButton from '~/components/buttons/MainButton'
  import {email, maxLength, required} from "vuelidate/lib/validators";

  export default {
    name: 'PasswordReset',
    components: { MainButton, GInput },
    layout: 'sign-in',
    mixins: [icons],
    data: () => {
      return {
        form: {
          email: null
        },
        apiErrors: {},
        disabled: false
      }
    },
    validations: {
      form: {
        email: {
          required,
          email,
          maxLength: maxLength(255)
        }
      }
    },
    methods: {
      async forgetPassword () {
        this.disabled = true
        try {
          await this.$store.dispatch('auth/forgetPassword', this.form)
        } catch (e) {
          if (e.response.status === 422) {
            this.apiErrors = e.response.data.errors
          }
        } finally {
          this.disabled = false
        }
      }
    }
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

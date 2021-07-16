<template>
  <b-container>
    <form action="" @submit.prevent="renewPassword">
      <div class="g-window auth-structure">

        <p class="auth-structure__title text-color-white text-uppercase">создание нового пароля</p>

        <div class="auth-structure__inputs">
          <g-input
            v-model.trim="$v.form.password.$model"
            class="auth-structure__input"
            placeholder="Пароль *"
            :error="$v.form.password.$error || 'password' in apiErrors"
          >
            <template v-slot:error>
              <span v-if="!$v.form.password.required && $v.form.password.$error">Пароль обязателен.</span>
              <span v-if="!$v.form.password.maxLength && $v.form.password.$error">Максимальная длина пароля {{ $v.form.password.$params.maxLength.max }} символов.</span>
            </template>
          </g-input>
          <g-input
            v-model.trim="$v.form.confirmPassword.$model"
            class="auth-structure__input"
            placeholder="Повторите парооль *"
            :error="$v.form.confirmPassword.$error || 'password' in apiErrors"
          >
            <template v-slot:error>
              <span v-if="!$v.form.confirmPassword.sameAsPassword && $v.form.confirmPassword.$error">Поля не совпадают.</span>
            </template>
          </g-input>
        </div>

        <main-button :disabled="disabled || $v.$invalid" type="submit" tag="button" full-width size="xl" color="primary" label="Обновить пароль" />
      </div>
    </form>
  </b-container>
</template>


<script>
  import icons from '~/mixins/icons'
  import GInput from '~/components/form-elements/Input'
  import MainButton from '~/components/buttons/MainButton'
  import { maxLength, required, sameAs } from 'vuelidate/lib/validators'

  export default {
    name: 'NewPassword',
    components: { MainButton, GInput },
    layout: 'auth-empty',
    mixins: [icons],
    data: () => {
      return {
        form: {
          password: null,
          confirmPassword: null
        },
        apiErrors: {},
        disabled: false
      }
    },
    validations: {
      form: {
        password: {
          required,
          maxLength: maxLength(255)
        },
        confirmPassword: {
          sameAsPassword: sameAs('password')
        }
      }
    },
    methods: {
      renewPassword () {
        this.disabled = true
        try {
          
        } catch (e) {
          console.log(e.response)
        } finally {
          this.disabled = false
        }
      }
    }
  }
</script>

<style lang="sass" scoped>
.auth-structure
  &__inputs
    margin-bottom: 32px
</style>

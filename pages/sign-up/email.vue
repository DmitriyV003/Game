<template>
  <b-container>
    <form action="" @submit.prevent="signUpByEmail">
      <div class="g-window auth-structure">
        <nuxt-link tag="div" to="/sign-up" class="auth-structure__back">
          <chevron-left-icon class="icon" />
          <span class="text-weight-500">Назад</span>
        </nuxt-link>

        <p class="auth-structure__title text-color-white text-uppercase">Зарегистрироваться</p>

        <div class="auth-structure__inputs">
          <g-input v-model="$v.form.name.$model" class="auth-structure__input" placeholder="Имя *" />
          <g-input v-model="$v.form.surname.$model" class="auth-structure__input" placeholder="Фамилия *" />
          <g-input v-model.trim="$v.form.email.$model" class="auth-structure__input" placeholder="E-mail адрес *" />
          <g-input v-model.trim="$v.form.password.$model" class="auth-structure__input" placeholder="Пароль *" />
        </div>

        <show-all class="auth-structure__forget" to="/auth/password-reset" label="Забыли пароль?" :icon="false" />

        <main-button :disabled="disabled" tag="button" type="submit" full-width size="xl" color="primary" label="зарегистрироваться" />
      </div>
    </form>
  </b-container>
</template>


<script>
import icons from '~/mixins/icons'
import { required, email, maxLength, minLength } from 'vuelidate/lib/validators'
import GInput from '~/components/form-elements/Input'
import ShowAll from '~/components/buttons/MainLink'
import MainButton from '~/components/buttons/MainButton'

export default {
  name: 'EmailSignUp',
  components: { MainButton, ShowAll, GInput },
  data: () => {
    return {
      form: {
        name: null,
        surname: null,
        email: null,
        password: null
      },
      disabled: false
    }
  },
  validations: {
    form: {
      name: {
        required,
        maxLength: maxLength(100)
      },
      surname: {
        required,
        maxLength: maxLength(100)
      },
      email: {
        required,
        email,
        maxLength: maxLength(255)
      },
      password: {
        required,
        minLength: minLength(8),
        maxLength: maxLength(255)
      }
    }
  },
  layout: 'sign-up',
  mixins: [icons],
  methods: {
    async signUpByEmail () {
      try {
        const data = this.form
        console.log(data)
        this.disabled = true
        await this.$store.dispatch('registration/signUpByEmail', data)
      } catch (e) {
        console.log(e)
      } finally {
        this.disabled = false
      }
    }
  }
}
</script>

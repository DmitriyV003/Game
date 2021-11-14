<template>
  <b-container>
    <form action="" @submit.prevent="signUpByEmail">
      <div class="g-window auth-structure">
        <nuxt-link tag="div" to="/sign-up" class="auth-structure__back">
          <chevron-left-icon class="icon" />
          <span class="text-weight-500">Назад</span>
        </nuxt-link>

        <p class="auth-structure__title text-color-white text-uppercase">
          Зарегистрироваться
        </p>

        <div class="auth-structure__inputs">
          <g-input
            v-model="$v.form.name.$model"
            class="auth-structure__input"
            placeholder="Имя *"
            :error="$v.form.name.$error || 'name' in apiErrors"
          >
            <template v-slot:error>
              <span v-if="!$v.form.name.required && $v.form.name.$error"
                >Имя обязателено</span
              >
              <span v-if="!$v.form.name.maxLength && $v.form.name.$error"
                >Максимальная длина имени
                {{ $v.form.name.$params.maxLength.max }} символов</span
              >
            </template>
          </g-input>

          <g-input
            v-model="$v.form.surname.$model"
            class="auth-structure__input"
            placeholder="Фамилия *"
            :error="$v.form.surname.$error || 'surname' in apiErrors"
          >
            <template v-slot:error>
              <span v-if="!$v.form.surname.required && $v.form.surname.$error"
                >Фамилия обязателена</span
              >
              <span v-if="!$v.form.surname.maxLength && $v.form.surname.$error"
                >Максимальная длина фамилии
                {{ $v.form.surname.$params.maxLength.max }} символов</span
              >
            </template>
          </g-input>

          <g-input
            v-model="$v.form.email.$model"
            class="auth-structure__input"
            placeholder="E-mail адрес *"
            :error="$v.form.email.$error || 'email' in apiErrors"
          >
            <template v-slot:error>
              <span v-if="!$v.form.email.required && $v.form.email.$error"
                >Email обязателен</span
              >
              <span v-if="!$v.form.email.email && $v.form.email.$error"
                >Email должен быть валидным</span
              >
              <span v-if="!$v.form.email.maxLength && $v.form.email.$error"
                >Максимальная длина Email
                {{ $v.form.email.$params.maxLength.max }} символов</span
              >
            </template>
          </g-input>

          <g-input
            v-model="$v.form.password.$model"
            class="auth-structure__input"
            placeholder="Пароль *"
            type="password"
            :error="$v.form.password.$error || 'password' in apiErrors"
          >
            <template v-slot:error>
              <span v-if="!$v.form.password.required && $v.form.password.$error"
                >Пароль обязателен</span
              >
              <span
                v-if="!$v.form.password.minLength && $v.form.password.$error"
                >Минимальная длина пароля
                {{ $v.form.password.$params.minLength.min }} символов</span
              >
              <span
                v-if="!$v.form.password.maxLength && $v.form.password.$error"
                >Максимальная длина пароля
                {{ $v.form.password.$params.maxLength.max }} символов</span
              >
            </template>
          </g-input>
        </div>

        <show-all
          class="auth-structure__forget"
          to="/auth/password-reset"
          label="Забыли пароль?"
          :icon="false"
        />

        <main-button
          :disabled="disabled || $v.$invalid"
          tag="button"
          type="submit"
          full-width
          size="xl"
          color="primary"
          label="зарегистрироваться"
        />
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
        password: null,
      },
      disabled: false,
      apiErrors: {},
    }
  },
  validations: {
    form: {
      name: {
        required,
        maxLength: maxLength(100),
      },
      surname: {
        required,
        maxLength: maxLength(100),
      },
      email: {
        required,
        email,
        maxLength: maxLength(255),
      },
      password: {
        required,
        minLength: minLength(8),
        maxLength: maxLength(255),
      },
    },
  },
  layout: 'sign-up',
  mixins: [icons],
  methods: {
    async signUpByEmail() {
      try {
        const data = this.form
        this.disabled = true
        const result = await this.$store.dispatch('registration/signUpByEmail', data)
        await this.$router.push(`/auth/confirm-registration?email=${data.email}&hash=${result.hash}`)
      } catch (e) {
        if (e.response.status === 422) {
          this.apiErrors = e.response.data.errors
        }
        this.$bvToast.toast('Ошибка регистрации пользователя!', {
          title: 'Что-то пошло не так(',
          variant: 'danger',
          solid: true,
          appendToast: true,
        })
      } finally {
        this.disabled = false
      }
    },
  },
}
</script>

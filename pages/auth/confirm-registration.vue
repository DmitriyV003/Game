<template>
  <b-container>
    <form action="" @submit.prevent="submitEmail">
      <div class="g-window auth-structure">
        <p class="auth-structure__title text-color-white text-uppercase">
          Подтверждение e-mail
        </p>

        <div>
          <p class="confirm-registration__text">
            Чтобы завершить регистрацию подтвердите свой E-mail адрес: <span v-if="email !== null">{{ email[0] }}*********{{ email.slice(-10) }}</span>
            Введите код безопасности, который был оправлен на ваш E-mail адрес, а затем нажмите кнопку ниже
          </p>
        </div>

        <div class="confirm-registration__inputs">
          <input
            v-model.trim.number="code[key]"
            v-for="(item, key) in code"
            :tabindex="key + 1"
            :ref="`codeNumber${key}`"
            @input="changeFocus(key, $event.target.value)"
            :class="{'confirm-registration__input_filled': Boolean(code[key])}"
            maxlength="1"
            type="text"
            class="confirm-registration__input"
          >
        </div>

        <main-button
          :disabled="disabled || !checkCode"
          type="submit"
          tag="button"
          full-width
          size="xl"
          color="primary"
          label="подтвердить E-mail"
        />

        <div class="confirm-registration__bottom">
          <p>Не получили письмо с кодом подтверждения?</p>
          <p>Проверьте в спаме.</p>
          <p><span @click="resendCode">Отправить повторно</span> или <span>изменить E-mail адрес</span></p>
        </div>
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
    components: { MainButton, GInput },
    layout: 'sign-up',
    mixins: [icons],
    data: () => {
      return {
        disabled: false,
        email: null,
        code: [
          null,
          null,
          null,
          null,
          null,
          null
        ]
      }
    },
    computed: {
      checkCode () {
        return this.code.every(el => !!el)
      }
    },
    async mounted () {
      this.$refs['codeNumber0'][0].focus()

      const email = this.$route.query.email

      if (email) {
        this.email = email
      } else {
        await this.$router.push('/sign-up')
      }
    },
    methods: {
      async resendCode () {
        try {
          await this.$store.dispatch('registration/resendCode', {
            email: this.$route.query.email,
          })
        } catch (e) {
          this.$bvToast.toast('The given data was invalid.', {
            title: 'Что-то пошло не так(',
            variant: 'danger',
            solid: true,
            appendToast: true,
          })
        }
      },
      changeFocus (number, val) {
        const value = this.$refs[`codeNumber${number}`][0].value.trim()

        if (value) {
          this.code[number] = value
          if (number !== 5) {
            this.$refs[`codeNumber${number + 1}`][0].focus()
          }
        } else {
          if (number !== 0) {
            this.$refs[`codeNumber${number - 1}`][0].focus()
          }
        }
      },
      async submitEmail() {
        this.disabled = true
        try {
          await this.$store.dispatch('registration/submitEmail', {
            hash: this.$route.query.hash,
            code: this.code.join('')
          })
        } catch (e) {
          this.$bvToast.toast('The given data was invalid.', {
            title: 'Что-то пошло не так(',
            variant: 'danger',
            solid: true,
            appendToast: true,
          })
        } finally {
          this.disabled = false
          for (const [key, value] in this.code) {
            this.code[key] = null
          }
          this.$refs[`codeNumber0`][0].focus()
        }
      },
    },
  }
</script>

<style lang="sass" scoped>
  .confirm-registration
    &__bottom
      margin-top: 40px
      font-size: 14px
      line-height: 22px
      color: #9A93AA
      text-align: center
      span
        color: white
        cursor: pointer
    &__inputs
      display: flex
      align-items: center
      justify-content: space-between
      margin-bottom: 50px
    &__input
      background: transparent
      width: 22px
      border: none
      border-bottom: 2px solid #FFFFFF
      outline: none !important
      color: white
      font-size: 32px
      line-height: 22px
      text-align: center
      flex-shrink: 0
      padding: 0
      &_filled
        border-bottom-color: transparent
    &__text
      font-size: 14px
      line-height: 22px
      color: #9A93AA
      margin-bottom: 40px
      span
        color: white
  .auth-structure
    &__inputs
      margin-bottom: 32px
</style>

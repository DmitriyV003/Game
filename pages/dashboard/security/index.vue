<template>
  <div class="g-page">
    <g-password-recovery-popup />
    
    <b-container>
      <h1 class="title">Личный кабинет</h1>

      <b-row>
        <b-col xl="3" lg="3">

          <!-- Dashboard navigation  adapted = true -->
          <g-dashboard-navigation />
        </b-col>


        <b-col xl="9" lg="9">
          <!-- Manage password  adapted = true -->
          <form @submit.prevent="changePassword" class="g-manage-password">
            <div class="g-manage-password__top">
              <h2 class="g-manage-password__title">Сменить пароль</h2>
              <show-all 
                @click.native="eventBus.$emit('passwordRecoveryPopupOpen')" class="g-manage-password__forget_desktop" :icon="false" label="Забыли пароль?"
              />
            </div>

            <div>
              <div class="g-manage-password__line">
                <div class="g-manage-password__input">
                  <g-input 
                    v-model="$v.form.password.$model" 
                    eye 
                    type="password" 
                    caption="Старый пароль" 
                    placeholder="Старый пароль"
                    :error="$v.form.password.$error || 'password' in apiErrors"
                  >
                    <template v-slot:error>
                      <span v-if="!$v.form.password.required && $v.form.password.$error">Пароль обязателен</span>
                    </template>
                    <template v-slot:link>
                      <show-all 
                        @click.native="eventBus.$emit('passwordRecoveryPopupOpen')" 
                        class="g-manage-password__forget_mobile" 
                        :icon="false" label="Забыли пароль?"
                      />
                    </template>
                  </g-input>
                </div>
              </div>

              <div class="g-manage-password__line">
                <div class="g-manage-password__input">
                  <g-input 
                    v-model="$v.form.newPassword.$model" 
                    eye 
                    type="password" 
                    caption="Новый пароль" 
                    placeholder="Новый пароль"
                    :error="$v.form.newPassword.$error || 'password' in apiErrors"
                  >
                    <template v-slot:error>
                      <span v-if="!$v.form.newPassword.required && $v.form.newPassword.$error">Пароль обязателен</span>
                      <span v-if="!$v.form.newPassword.minLength && $v.form.newPassword.$error">Минимальная длина пароля {{ $v.form.newPassword.$params.minLength.min }} символов</span>
                      <span v-if="!$v.form.newPassword.maxLength && $v.form.newPassword.$error">Максимальная длина пароля {{ $v.form.newPassword.$params.maxLength.min }} символов</span>
                    </template>
                  </g-input>
                </div>
                <div class="g-manage-password__input">
                  <g-input 
                    v-model="$v.form.repeatNewPassword.$model" 
                    eye 
                    type="password" 
                    caption="Повторите новый пароль" 
                    placeholder="Повторите новый пароль"
                    :error="$v.form.repeatNewPassword.$error || 'password' in apiErrors"
                  >
                    <template v-slot:error>
                      <span v-if="!$v.form.repeatNewPassword.required && $v.form.repeatNewPassword.$error">Пароль обязателен</span>
                      <span v-if="!$v.form.repeatNewPassword.sameAsPassword && $v.form.repeatNewPassword.$error">Пароли не совпадают</span>
                    </template>
                  </g-input>
                </div>
              </div>
            </div>
            
            <div class="g-manage-password__bottom">
              <main-button 
                type="submit" 
                class="g-manage-password__btn" 
                color="primary" 
                size="xl"
                :disabled="disabled || $v.$invalid"
                label="сменить пароль" 
              />
            </div>
          </form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import GDashboardNavigation from '~/components/dashboard/Navigation'
  import MainButton from '~/components/buttons/MainButton'
  import icons from '~/mixins/icons'
  import { eventBus } from '~/plugins/event-bus'
  import GUserAvatar from '~/components/dashboard/GUserAvatar'
  import GUserData from '~/components/dashboard/GUserData'
  import GBecomeSeller from '~/components/dashboard/BecomeSeller'
  import ShowAll from '~/components/buttons/MainLink'
  import GInput from '~/components/form-elements/Input'
  import GPasswordRecoveryPopup from '~/components/popups/PasswordRecovery'
  import { maxLength, minLength, required, sameAs } from 'vuelidate/lib/validators'
  export default {
    components: {
      GPasswordRecoveryPopup,
      GInput, ShowAll, GBecomeSeller, GUserData, GUserAvatar, MainButton, GDashboardNavigation },
    mixins: [icons],
    name: 'ProfilePage',
    data: () => {
      return {
        eventBus,
        form: {
          newPassword: null,
          password: null,
          repeatNewPassword: null
        },
        apiErrors: {},
        warning: null,
        disabled: false,
        statusCode: null,
      }
    },
    methods: {
      async changePassword () {
        try {
          this.disabled = true
          await this.$store.dispatch('password/changePassword', this.form)
          this.clearForm()
        } catch (e) {
          console.log(e.response)
          this.statusCode = e.response.status
          
          if (this.statusCode === 422) {
            this.apiErrors = e.response.data.errors
          }
          if (this.statusCode === 400) {
            this.warning = e.response.data.warning
          }
        } finally {
          this.disabled = false
        }
      },
      clearForm () {
        this.form.newPassword = null
        this.form.password = null
        this.form.repeatNewPassword = null
        this.apiErrors = {}
        this.warning = null
        this.statusCode = null
        
        this.$v.reset()
      }
    },
    validations: {
      form: {
        newPassword: {
          required,
          maxLength: maxLength(100),
          minLength: minLength(8)
        },
        password: {
          required
        },
        repeatNewPassword: {
          required,
          sameAsPassword: sameAs('newPassword')
        }
      }
    },
  }
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.g-manage-password
  padding: 24px
  background: #282439
  border-radius: 12px
  +lg
    margin-top: 24px
  +md
    padding: 24px 16px
  &__forget
    &_desktop
      +md
        display: none
    &_mobile
      display: none
      +md
        display: flex
  &__title
    font-size: 24px !important
    line-height: 28px !important
  &__bottom
    display: flex
    justify-content: flex-end
    +md
      margin-top: 32px
    .button
      +md
        width: 100%
  &__line
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 32px
    +md
      flex-direction: column
      margin-bottom: 24px
    &:not(:last-child)
      border-bottom: 1px solid rgba(154, 147, 170, 0.3)
      padding-bottom: 32px
      +md
        padding-bottom: 24px
  &__btn
    +md
      width: 100%
  &__input
    width: calc(50% - 10px)
    +md
      width: 100%
      &:not(:last-child)
        margin-bottom: 16px
  &__top
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 36px
    +md
      margin-bottom: 24px
      flex-direction: column
      align-items: flex-start
</style>

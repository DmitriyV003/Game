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
          <section class="g-manage-password">
            <div class="g-manage-password__top">
              <h2 class="g-manage-password__title">Сменить пароль</h2>
              <show-all @click.native="eventBus.$emit('passwordRecoveryPopupOpen')" class="g-manage-password__forget_desktop" :icon="false" label="Забыли пароль?"/>
            </div>

            <div>
              <div class="g-manage-password__line">
                <div class="g-manage-password__input">
                  <g-input eye type="password" caption="Старый пароль" placeholder="Старый пароль">
                    <template v-slot:link>
                      <show-all @click.native="eventBus.$emit('passwordRecoveryPopupOpen')" class="g-manage-password__forget_mobile" :icon="false" label="Забыли пароль?"/>
                    </template>
                  </g-input>
                </div>
              </div>

              <div class="g-manage-password__line">
                <div class="g-manage-password__input">
                  <g-input eye type="password" caption="Новый пароль" placeholder="Новый пароль" />
                </div>
                <div class="g-manage-password__input">
                  <g-input eye type="password" caption="Повторите новый пароль" placeholder="Повторите новый пароль" />
                </div>
              </div>
            </div>
            
            <div class="g-manage-password__bottom">
              <main-button class="g-manage-password__btn" color="primary" size="xl" label="сменить пароль" />
            </div>
          </section>
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
  import GUserAvatar from "~/components/dashboard/GUserAvatar";
  import GUserData from '~/components/dashboard/GUserData'
  import GBecomeSeller from '~/components/dashboard/BecomeSeller'
  import ShowAll from "~/components/buttons/MainLink";
  import GInput from "~/components/form-elements/Input";
  import GPasswordRecoveryPopup from "~/components/popups/PasswordRecovery";
  export default {
    components: {
      GPasswordRecoveryPopup,
      GInput, ShowAll, GBecomeSeller, GUserData, GUserAvatar, MainButton, GDashboardNavigation },
    mixins: [icons],
    name: 'ProfilePage',
    data: () => {
      return {
        eventBus
      }
    }
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

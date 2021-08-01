<template>
  <!-- Adapted = true  -->
  <div class="g-popup" v-show="val">
    <div class="g-password-recovery">
      <div class="g-password-recovery__top">
        <h2 class="title">Восстановить пароль</h2>
        <close-icon @click="val = false" class="icon" />
      </div>
      
      <p class="text">Введите E-mail, указанный в профиле, чтобы восстановить пароль</p>
      
      <g-input placeholder="Адрес электронной почты *" />
      <main-button class="g-password-recovery__btn" color="primary" label="восстановить" full-width size="xl" />
    </div>
  </div>
</template>

<script>
import icons from '~/mixins/icons'
import { eventBus } from '~/plugins/event-bus'
import GInput from '~/components/form-elements/Input'
import MainButton from '~/components/buttons/MainButton'

export default {
  name: 'GPasswordRecoveryPopup',
  components: { MainButton, GInput },
  mixins: [icons],
  data: () => {
    return {
      val: false,
    }
  },
  created () {
    eventBus.$on('popupClose', () => {
      this.val = false
    })

    eventBus.$on('passwordRecoveryPopupOpen', () => {
      this.val = true
    })
  }    
}
</script>

<style lang="sass">
@import '../../theme/vars'
@import '../../theme/mix'
.g-password-recovery
  background: #282439
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25)
  border-radius: 12px
  padding: 24px
  width: 472px
  max-height: calc(100vh - 150px)  
  +md
    width: calc(100% - 32px)
    padding: 24px 16px
  &__btn
    margin-top: 20px
    +md
      margin-top: 32px
  .text
    margin-bottom: 32px
    letter-spacing: -0.4px
    color: $gray
    font-size: 14px
    line-height: 20px
    text-align: center
    padding: 0 32px
    +md
      text-align: left
      padding: 0
      margin-bottom: 24px
  .title
    text-align: center
    padding: 0 32px
    margin: 0
    font-size: 24px !important
    line-height: 28px !important
    +md
      padding: 0
      text-align: left
  &__top
    display: flex
    justify-content: flex-end
    flex-direction: column-reverse
    margin-bottom: 16px
    +md
      flex-direction: row
      align-items: flex-start
    .icon
      cursor: pointer
      color: $gray
      font-size: 25px
      margin-left: auto
</style>

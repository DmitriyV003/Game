<template>
  <!-- Adapted = true  -->
  <form
    @submit.prevent="postEditProfile"
    class="g-popup"
    v-show="val"
  >
    <div class="g-add-keys">
      <div class="g-popup__top">
        <p class="g-popup__title">Добавить ключи</p>
        <close-icon @click="val = false" class="g-popup__close" />
      </div>

      <div class="g-add-keys__options">
       <span 
         class="g-add-keys__option"
         :class="{ 'g-add-keys__option_active': mode === 'hand' }"
         @click="changeMode('hand', 'text')"
       >Ручной ввод</span>
        <span 
          class="g-add-keys__option"
          :class="{ 'g-add-keys__option_active': mode === 'file' }"
          @click="changeMode('file', 'file')"
        >Загрузить из файла</span>
      </div>
      
      <div class="g-add-keys__block">
        <g-input
          placeholder="Введите Ключ продукта"
          color="white"
          class="g-add-keys__input"
          :type="type"
        />

        <main-button
          :disabled="disabled || $v.$invalid"
          type="submit"
          color="primary"
          size="xl"
          label="проверить"
          class="g-add-keys__check"
        />
      </div>
      
      <div class="g-add-keys__result">
        <span>Добавлено: 0 ключей</span>
      </div>
      
      <div class="g-add-keys__keys">
        
        <div class="g-add-keys__keys-wrapper">
          <div class="g-add-keys__key">
            <span class="value">hdA26-BTDKE-XKL43-vbn47</span>
            <close-icon class="close" />
          </div>
          <div class="g-add-keys__key">
            <span class="value">hdA26-BTDKE-XKL43-vbn47</span>
            <close-icon class="close" />
          </div>
          <div class="g-add-keys__key">
            <span class="value">hdA26-BTDKE-XKL43-vbn47</span>
            <close-icon class="close" />
          </div>
          <div class="g-add-keys__key">
            <span class="value">hdA26-BTDKE-XKL43-vbn47</span>
            <close-icon class="close" />
          </div>
          <div class="g-add-keys__key">
            <span class="value">hdA26-BTDKE-XKL43-vbn47</span>
            <close-icon class="close" />
          </div>
          <div class="g-add-keys__key">
            <span class="value">hdA26-BTDKE-XKL43-vbn47</span>
            <close-icon class="close" />
          </div>
          <div class="g-add-keys__key">
            <span class="value">hdA26-BTDKE-XKL43-vbn47</span>
            <close-icon class="close" />
          </div>
          <div class="g-add-keys__key">
            <span class="value">hdA26-BTDKE-XKL43-vbn47</span>
            <close-icon class="close" />
          </div>
          <div class="g-add-keys__key">
            <span class="value">hdA26-BTDKE-XKL43-vbn47</span>
            <close-icon class="close" />
          </div>
          <div class="g-add-keys__key">
            <span class="value">hdA26-BTDKE-XKL43-vbn47</span>
            <close-icon class="close" />
          </div>
        </div>
      </div>

      <div class="g-add-keys__bottom" v-if="keys.length > 0">
        <main-button
          type="submit"
          color="primary"
          size="xl"
          label="Добавить ключи"
        />
      </div>
    </div>
  </form>
</template>

<script>
  import { eventBus } from '~/plugins/event-bus'
  import icons from '~/mixins/icons'
  import MainButton from '~/components/buttons/MainButton'
  import { maxLength, required, minLength } from 'vuelidate/lib/validators'
  import GInput from '~/components/form-elements/Input'
  import { mapState } from 'vuex'

  export default {
    name: 'GAddKeysPopup',
    components: { GInput, MainButton },
    mixins: [icons],
    data: () => {
      return {
        val: true,
        disabled: false,
        mode: 'hand',
        keys: [1],
        type: 'text'
      }
    },
    validations: {
      name: {
        required,
        maxLength: maxLength(100)
      },
      surname: {
        required,
        maxLength: maxLength(100)
      },
      nickname: {
        required,
        maxLength: maxLength(100),
        minLength: minLength(2)
      }
    },
    computed: {
      ...mapState({
        profile: state => state.profile.profile
      })
    },
    methods: {
      async postEditProfile () {
        try {
          this.disabled = true
          await this.$store.dispatch('profile/postEditProfile')

          this.val = false
        } catch (e) {
          console.log(e.response)
        } finally {
          this.disabled = false
        }
      },
      changeMode (mode, type) {
        this.mode = mode
        this.type = type
      },
      editProfileField (payload) {
        this.$store.dispatch('profile/editProfileField', payload)
      }
    },
    created () {
      eventBus.$on('popupClose', () => {
        this.val = false
      })

      eventBus.$on('addKeysPopupOpen', () => {
        this.val = true
      })
    }
  }
</script>

<style lang="sass">
  @import '../../theme/vars'
  @import '../../theme/mix'
  .g-add-keys
    background: #282439
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25)
    border-radius: 12px
    padding: 24px 24px 74px
    width: 678px
    max-height: calc(100vh - 100px)
    overflow-y: hidden
    position: relative
    +md
      width: calc(100% - 32px)
      max-height: calc(100vh - 64px)
      padding: 24px 16px
    &__check
      +md
        width: 100%
        .button
          width: 100%
    &__block
      margin-top: 32px
      display: flex
      align-items: center
      justify-content: space-between
      +md
        flex-direction: column
    &__key
      display: flex
      align-items: center
      cursor: pointer
      +md
        justify-content: space-between
      &:not(:last-child)
        margin-bottom: 8px
      &:hover
        .value
          color: $white
        .close
          opacity: 1
      .value
        margin-right: 12px
        font-size: 14px
        color: $gray
        line-height: 20px
      .close
        color: #643EFF
        opacity: 0
        +md
          opacity: 1 !important
          color: $gray
    &__keys
      padding-top: 16px
      border-top: 1px solid rgba(154, 147, 170, 0.5)
    &__keys-wrapper
      overflow-y: auto
      margin-right: -24px
      padding-right: 24px
      max-height: 184px
      padding-bottom: 50px
      +md
        margin-right: -16px
        padding-right: 16px
      +sm
        max-height: 158px
    &__result
      margin: 16px 0
      span
        font-size: 14px
        color: $gray
        line-height: 24px
    &__input
      margin-right: 20px
      width: 100%
      +md
        margin-right: 0
        margin-bottom: 24px
    &__options
      display: flex
      align-items: center
      +sm
        justify-content: space-between
    &__option
      font-size: 16px
      line-height: 24px
      color: $gray
      cursor: pointer
      &_active
        color:  #643EFF
        text-decoration-line: underline
      &:not(:last-child)
        margin-right: 24px
    &__bottom
      position: absolute
      bottom: 0
      left: 0
      width: 100%
      .button
        width: 100%
</style>

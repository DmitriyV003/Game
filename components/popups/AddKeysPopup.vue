<template>
  <!-- Adapted = true  -->
  <form
    @submit.prevent="addKey"
    class="g-popup"
    v-show="val"
  >
    <div class="g-add-keys">
      <div class="g-popup__top">
        <p class="g-popup__title">Добавить ключи</p>
        <close-icon 
          @click="val = false" 
          class="g-popup__close" 
        />
      </div>

      <div class="g-add-keys__options">
       <span 
         class="g-add-keys__option"
         :class="{ 'g-add-keys__option_active': mode === 'hand' }"
         @click="changeMode('hand')"
       >Ручной ввод</span>
        <span 
          class="g-add-keys__option"
          :class="{ 'g-add-keys__option_active': mode === 'file' }"
          @click="changeMode('file')"
        >Загрузить из файла</span>
      </div>
      
      <div class="g-add-keys__block">
        <g-input
          v-if="mode === 'hand'"
          placeholder="Введите Ключ продукта"
          color="white"
          class="g-add-keys__input"
          v-model="form.key"
          key="fileInput"
        />

        <g-input
          type="file"
          placeholder="Введите Ключ продукта"
          v-if="mode === 'file'"
          color="white"
          class="g-add-keys__input"
          @change.native="handleFileUpload"
          key="keyInput"
        />

        <main-button
          :disabled="disabled || $v.$invalid"
          v-show="mode === 'hand'"
          type="submit"
          color="primary"
          size="xl"
          label="проверить"
          class="g-add-keys__check"
        />

        <main-button
          :disabled="form.file === null"
          @click.native="uploadFile"
          v-show="mode === 'file'"
          color="primary"
          size="xl"
          label="проверить"
          class="g-add-keys__check"
        />
      </div>
      
      <div class="g-add-keys__result">
        <span>Добавлено: {{ keys.length }} ключей</span>
      </div>
      
      <div class="g-add-keys__keys">
        
        <div 
          class="g-add-keys__keys-wrapper"
        >
          <div
            class="g-add-keys__key"
            v-for="key in keys"
            :key="key"
          >
            <span class="value">{{ key }}</span>
            <close-icon 
              class="close"
              @click="deleteKey(key)"
            />
          </div>
        </div>
      </div>

      <div 
        class="g-add-keys__bottom" 
        v-if="keys.length > 0"
      >
        <main-button
          type="button"
          color="primary"
          size="xl"
          label="Добавить ключи"
          @click.native="val = false"
        />
      </div>
    </div>
  </form>
</template>

<script>
  import { eventBus } from '~/plugins/event-bus'
  import icons from '~/mixins/icons'
  import MainButton from '~/components/buttons/MainButton'
  import { required } from 'vuelidate/lib/validators'
  import GInput from '~/components/form-elements/Input'

  export default {
    name: 'GAddKeysPopup',
    components: { GInput, MainButton },
    mixins: [icons],
    data: () => {
      return {
        val: false,
        disabled: false,
        mode: 'hand',
        form: {
          key: null,
          file: null
        }
      }
    },
    props: {
      keys: {
        type: Array,
        default: () => []
      }
    },
    validations: {
      form: {
        key: {
          required
        }
      }
    },
    methods: {
      async uploadFile () {
        this.disabled = true
        try {
          const data = new FormData()
          data.append('file', this.form.file)
          await this.$store.dispatch('key/postKeysFile', data)
        } catch (e) {
          console.log(e.response)
        } finally {
          this.disabled = false
        }
      },
      deleteKey (key) {
        this.$store.dispatch('key/deleteKey', key)
      },
      addKey () {
        this.$v.$touch()
        if (!this.$v.$invalid) {
          this.$store.dispatch('key/addKey', this.form.key)
        }
      },
      handleFileUpload (e) {
        console.log(e)
        this.form.file = e.target.files[0]
      },
      changeMode (mode) {
        this.form.key = null
        this.form.file = null
        
        this.mode = mode
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

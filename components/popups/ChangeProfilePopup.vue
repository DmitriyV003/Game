<template>
  <!-- Adapted = true  -->
  <form 
    @submit.prevent="postEditProfile" 
    class="g-popup" 
    v-show="val"
    v-if="profile !== null"
  >
    <div class="g-change-profile">
      <div class="g-popup__top">
        <p class="g-popup__title">Данные профиля</p>
        <close-icon @click="val = false" class="g-popup__close" />
      </div>
      
      <div class="g-change-profile__inputs">
        <g-input
          v-model="name"
          :error="$v.name.$error"
          placeholder="Имя *"
          caption="Имя"
          class="g-change-profile__input"
        >
          <template v-slot:error>
            <span v-if="!$v.name.required && $v.name.$error">Имя обязателено</span>
            <span v-if="!$v.name.maxLength && $v.name.$error">Максимальная длина имени {{ $v.name.$params.maxLength.max }} символов</span>
          </template>
        </g-input>

        <g-input
          :value="surname"
          @input.native="editProfileField({ value: $event.target.value, field: 'surname' })"
          class="g-change-profile__input"
          placeholder="Фамилия *"
          caption="Фамилия"
          :error="$v.surname.$error"
        >
          <template v-slot:error>
            <span v-if="!$v.surname.required && $v.surname.$error">Фамилия обязателена</span>
            <span v-if="!$v.surname.maxLength && $v.surname.$error">Максимальная длина фамилии {{ $v.surname.$params.maxLength.max }} символов</span>
          </template>
        </g-input>

        <g-input
          :value="nickname"
          @input.native="editProfileField({ value: $event.target.value, field: 'nickname' })"
          class="g-change-profile__input"
          placeholder="Отображаемое имя"
          caption="Отображаемое имя"
          :error="$v.nickname.$error"
        >
          <template v-slot:error>
            <span v-if="!$v.nickname.required && $v.nickname.$error">Никнэйм обязателен</span>
            <span v-if="!$v.nickname.maxLength && $v.nickname.$error">Максимальная длина имени {{ $v.nickname.$params.maxLength.max }} символов</span>
            <span v-if="!$v.nickname.minLength && $v.nickname.$error">Минимальная длина имени {{ $v.nickname.$params.minLength.max }} символов</span>
          </template>
        </g-input>
      </div>

      <div class="g-change-profile__bottom">
        <main-button
          color="gray"
          size="xl"
          label="отмена"
          @click.native="val = false"
        />
        <main-button 
          :disabled="disabled || $v.$invalid" 
          type="submit" 
          color="primary" 
          size="xl" 
          label="отправить" 
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
    name: 'GNewQuestionPopup',
    components: { GInput, MainButton },
    mixins: [icons],
    data: () => {
      return {
        val: false,
        disabled: false,
        oldValues: {
          name: null,
          surname: null,
          nickname: null
        }
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
      }),
      name: {
        get () {
          return this.profile.data.name
        },
        set (val) {
          this.$store.dispatch(
            'profile/editProfileField', 
            { field: 'name', value: val }
          )
          this.$v.name.$touch()
        }
      },
      surname: {
        get () {
          return this.profile.data.surname
        },
        set (val) {
          this.$store.dispatch(
            'profile/editProfileField',
            { field: 'surname', value: val }
          )
          this.$v.surname.$touch()
        }
      },
      nickname: {
        get () {
          return this.profile.data.nickname
        },
        set (val) {
          this.$store.dispatch(
            'profile/editProfileField',
            { field: 'nickname', value: val }
          )
          this.$v.nickname.$touch()
        }
      }
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
      editProfileField (payload) {
        this.$store.dispatch('profile/editProfileField', payload)
      }
    },
    created () {
      eventBus.$on('popupClose', () => {
        this.val = false
      })

      eventBus.$on('changeProfilePopupOpen', () => {
        this.val = true
      })
    }
  }
</script>

<style lang="sass">
  @import '../../theme/vars'
  @import '../../theme/mix'
  .g-change-profile
    background: #282439
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25)
    border-radius: 12px
    padding: 24px
    width: 560px
    max-height: calc(100vh - 100px)
    overflow-y: auto
    +md
      width: calc(100% - 32px)
      max-height: calc(100vh - 64px)
      padding: 24px 16px
    &__inputs
      padding-bottom: 24px
      border-bottom: 1px solid rgba(154, 147, 170, 0.5)
    &__input  
      &:not(:last-child)
        margin-bottom: 24px
    &__bottom
      margin-top: 24px
      display: flex
      justify-content: space-between
      +sm
        flex-direction: column-reverse
      .button__wrapper
        +sm
          &:not(:first-child)
            margin-bottom: 24px
      .button__wrapper, .button
        +sm
          width: 100%
</style>

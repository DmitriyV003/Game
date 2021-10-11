<template>
  <form class="g-promo" @submit.prevent="onSubmit">
    <span class="g-promo__bg-1"></span>
    <span class="g-promo__bg-2"></span>
    <img src="/images/promo.png" alt="" class="g-promo__bg-3" />
    <h5 class="g-promo__title">Подарочный код «GameinCome»</h5>
    <p class="g-promo__text">
      Введите код с промо-карты GameinCome для пополнения баланса. Бонусный
      баланс можно использовать для покупок на Gameincome.ru
    </p>
    <div class="g-promo__wrapper">
      <g-input
        class="g-promo__input"
        color="white"
        placeholder="Код c Gift Card"
        v-model.trim="$v.form.name.$model"
        :error="$v.form.name.$error"
      >
        <template v-slot:error>
          <span
            v-if="!$v.form.name.required && $v.form.name.$error"
            >Поле обязательно</span
          >
          <span
            v-if="!$v.form.name.minLength && $v.form.name.$error"
            >Минимальная длина
            {{ $v.form.name.$params.minLength.min }}
            символов</span
          >
          <span
            v-if="!$v.form.name.maxLength && $v.form.name.$error"
            >Максимальная длина
            {{ $v.form.name.$params.maxLength.min }}
            символов</span
          >
        </template>
      </g-input>
      <main-button
        size="xl"
        class="g-promo__btn g-promo__btn_desktop"
        color="primary"
        label="Применить код"
        type="submit"
        :disabled="disabled || $v.$invalid"
      />
    </div>

    <main-button
      full-width
      size="xl"
      class="g-promo__btn g-promo__btn_mobile"
      color="primary"
      label="Применить код"
      type="submit"
      :disabled="disabled || $v.$invalid"
    />
  </form>
</template>

<script>
import MainButton from '~/components/buttons/MainButton'
import GInput from '~/components/form-elements/Input'
import { maxLength, minLength, required } from 'vuelidate/lib/validators'
export default {
  name: 'GPromo',
  components: { GInput, MainButton },
  data () {
    return {
      disabled: false,
      form: {
        name: null
      }
    }
  },
  validations: {
    form: {
      name: {
        required,
        maxLength: maxLength(50),
        minLength: minLength(3),
      },
    },
  },
  methods: {
    async onSubmit() {
      this.disabled = true
      try {
        await this.$store.dispatch('finance/activatePromoCode', this.form)
      } catch (e) {
        this.$bvToast.toast('Промокод не активирован!', {
          title: 'Что-то пошло не так(',
          variant: 'danger',
          solid: true,
          appendToast: true,
        })

        return 0
      } finally {
        this.disabled = false
      }

      this.$bvToast.toast('Промокод успешно активирован!', {
        title: 'Уведомление',
        variant: 'primary',
        solid: true,
        appendToast: true,
      })
    },
  },
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.g-promo
  padding: 24px
  background: #282439
  border-radius: 12px
  margin-bottom: 24px
  position: relative
  +md
    padding: 24px 16px
  &__bg-3
    position: absolute
    bottom: 0
    right: 15%
    width: 280px
    height: 247px
  &__bg-1
    background: linear-gradient(142.35deg, rgba(255, 138, 0, 0.15) 14.56%, rgba(120, 30, 143, 0.15) 49.23%, rgba(101, 21, 163, 0.15) 64.38%, rgba(55, 0, 211, 0.15) 95.37%)
    width: 45px
    height: 45px
    border-radius: 50%
    top: 31px
    right: 41px
    position: absolute
  &__bg-2
    background: linear-gradient(142.35deg, rgba(255, 138, 0, 0.15) 14.56%, rgba(120, 30, 143, 0.15) 49.23%, rgba(101, 21, 163, 0.15) 64.38%, rgba(55, 0, 211, 0.15) 95.37%)
    width: 90px
    height: 90px
    border-radius: 50%
    bottom: 3px
    left: 8px
    position: absolute
    +md
      bottom: 32px
  &__btn
    flex-shrink: 0
    &_mobile
      display: none
      +md
        display: flex
        margin-top: 24px
    &_desktop
      +md
        display: none
  &__input
    width: 100%
    margin-right: 20px
    +md
      margin-right: 0
  &__wrapper
    padding: 24px
    background: rgba(76, 44, 203, 0.4)
    backdrop-filter: blur(8px)
    border-radius: 10px
    display: flex
    align-items: center
    justify-content: space-between
    position: relative
    z-index: 20
    +md
      padding: 12px
  &__text
    margin-bottom: 23px
    color: $gray
    font-size: 14px
    line-height: 22px
    letter-spacing: -0.4px
    max-width: 65%
    +md
      max-width: 100%
  &__title
    margin-bottom: 16px
</style>

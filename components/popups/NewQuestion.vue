<template>
  <!-- Adapted = true  -->
  <form
    @submit.prevent="postCreateQuestion"
    class="g-popup"
    v-if="val"
  >
    <div class="g-new-question">
      <div class="g-popup__top">
        <p class="g-popup__title">Новый вопрос</p>
        <close-icon @click="val = false" class="g-popup__close" />
      </div>

      <div class="g-new-question__content">
        <div class="g-new-question__block">
          <span class="g-new-question__caption">Выберите тему</span>
          <g-drop-menu
            class="g-new-question__category"
            placeholder="Выберите тему"
            v-if="category !== null"
            :links="themes[category.label + 'QuestionThemes']"
            v-model="$v.form.theme.$model"
          />
        </div>

        <div class="g-new-question__block">
          <span class="g-new-question__caption">Текст сообщения:</span>
          <textarea
            id="message-text"
            v-model="$v.form.text.$model"
            class="input-reboot g-new-question__textarea"
          ></textarea>
        </div>
      </div>

      <div class="g-new-question__bottom">
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
import GDropMenu from '~/components/DropMenu'
import MainButton from '~/components/buttons/MainButton'
import {
  generalQuestionThemes,
  techQuestionThemes,
  partnershipQuestionThemes,
} from '~/types/questionThemes'
import { maxLength, required } from 'vuelidate/lib/validators'

export default {
  name: 'GNewQuestionPopup',
  components: { MainButton, GDropMenu },
  mixins: [icons],
  data: () => {
    return {
      val: false,
      themes: {
        generalQuestionThemes,
        techQuestionThemes,
        partnershipQuestionThemes,
      },
      disabled: false,
      form: {
        theme: null,
        text: null,
      },
    }
  },
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
  validations: {
    form: {
      theme: {
        required,
        maxLength: maxLength(250),
      },
      text: {
        required,
        maxLength: maxLength(250),
      },
    },
  },
  methods: {
    clearForm () {
      this.form.text = null
      this.form.theme = null
      this.$v.$reset()
    },
    async postCreateQuestion() {
      this.disabled = true
      try {
        await this.$store.dispatch('questions/postCreateQuestion', this.form)
        this.clearForm()
        this.val = false
      } catch (e) {
        console.log(e)
        this.$bvToast.toast('Вопрос не создан, повторите попытку позже.', {
          title: 'Ошибка',
          variant: 'danger',
          solid: true,
          appendToast: true,
        })
      } finally {
        this.disabled = false
      }
    },
  },
  created() {
    eventBus.$on('popupClose', () => {
      this.val = false
      this.form.theme = null
    })

    eventBus.$on('newQuestionPopupOpen', () => {
      this.val = true
    })
  },
}
</script>

<style lang="sass">
@import '../../theme/vars'
@import '../../theme/mix'
.g-new-question
  background: #282439
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25)
  border-radius: 12px
  padding: 24px
  width: 560px
  max-height: calc(100vh - 300px)
  overflow-y: auto
  +md
    width: calc(100% - 32px)
    max-height: calc(100vh - 64px)
    padding: 24px 16px
  &__bottom
    margin-top: 32px
    display: flex
    justify-content: flex-end
    .button__wrapper, .button
      +md
        width: 100%
  &__textarea
    background: rgba(255, 255, 255, 0.05)
    color: $white
    resize: none
    width: 100%
    padding: 12px 20px
    height: 112px
    border-radius: 8px
  &__category
    width: 100%
    .g-drop-menu__active, .g-drop-menu__drop
      border: none !important
  &__caption
    margin-bottom: 8px
    color: $gray
    letter-spacing: -0.4px
    font-size: 14px
    line-height: 20px
  &__block
    width: 100%
    display: flex
    flex-direction: column
    align-items: flex-start
    &:not(:last-child)
      margin-bottom: 32px
      +md
        margin-bottom: 24px
</style>

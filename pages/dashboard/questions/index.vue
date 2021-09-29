<template>
  <div class="g-page">
    <g-new-question-popup
      :category="category"
    />
    <g-question-details />

    <b-container>
      <h1 class="title">Личный кабинет</h1>

      <b-row>
        <b-col xl="3" lg="3">
          <!-- Dashboard navigation  adapted = true -->
          <g-dashboard-navigation />
        </b-col>

        <b-col xl="9" lg="9">
          <!-- Sort questions  adapted = true -->

          <div class="g-questions__top">
            <div class="g-questions__filters">
              <vue-slick
                ref="sortSlider"
                :variable-width="true"
                :slides-to-show="1"
                :slides-to-scroll="1"
                :arrows="false"
                :dots="false"
                :infinite="false"
              >
                <g-sort-button
                  :active="category.label === questionsCategories.general.label"
                  class="g-sales__btn"
                  label="Обшие вопросы"
                  @click.native="getQuestions(questionsCategories.general)"
                />
                <g-sort-button
                  :active="category.label === questionsCategories.dispute.label"
                  class="g-sales__btn"
                  label="Споры"
                  @click.native="getQuestions(questionsCategories.dispute)"
                />
                <g-sort-button
                  :active="
                    category.label === questionsCategories.partnership.label
                  "
                  class="g-sales__btn"
                  label="Сотрудничество"
                  @click.native="getQuestions(questionsCategories.partnership)"
                />
                <g-sort-button
                  :active="category.label === questionsCategories.tech.label"
                  class="g-sales__btn"
                  label="Тех. поддержка"
                  @click.native="getQuestions(questionsCategories.tech)"
                />
              </vue-slick>
            </div>
          </div>

          <div class="g-questions__table">
            <div class="g-questions__table-header">
              <h2 class="g-questions__title">Общие вопросы по сервису</h2>
              <main-button
                @click.native="eventBus.$emit('newQuestionPopupOpen')"
                class="g-questions__btn_desktop"
                size="xl"
                label="новый вопрос"
                color="primary"
              />
              <button
                @click="eventBus.$emit('newQuestionPopupOpen')"
                class="button-reboot g-questions__btn_mobile"
              >
                <pencil-icon class="icon" />
              </button>
            </div>

            <div class="g-questions__lines">
              <div
                class="g-questions__line"
                @click="
                  eventBus.$emit('questionDetailsPopupOpen', item.appealId)
                "
                v-for="item in questions"
                :key="item.appealNumber"
              >
                <span class="number"># {{ item.appealNumber }}</span>
                <span class="text">{{ item.appealTheme }}</span>
                <span
                  class="status"
                  :style="{ color: detectAnswer(item.appealAnswered).color }"
                  >{{ detectAnswer(item.appealAnswered).text }}</span
                >
              </div>
            </div>
          </div>
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
import ShowAll from '~/components/buttons/MainLink'
import GSortButton from '~/components/dashboard/SortButton'
import GNewQuestionPopup from '~/components/popups/NewQuestion'
import GQuestionDetails from '~/components/popups/GQuestionDetails'
import { mapState } from 'vuex'
import questionsCategories from '~/plugins/questionsCategories'
import detectStatus from '~/mixins/detectStatus'

export default {
  components: {
    GQuestionDetails,
    GNewQuestionPopup,
    GSortButton,
    ShowAll,
    MainButton,
    GDashboardNavigation,
  },
  mixins: [icons, detectStatus],
  middleware: ['auth'],
  name: 'QuestionsPage',
  data: () => {
    return {
      eventBus,
      questionsCategories,
    }
  },
  computed: {
    ...mapState({
      questions: (state) => state.questions.questions,
      category: (state) => state.questions.category,
    }),
  },
  methods: {
    async getQuestions(category) {
      try {
        await this.$store.dispatch('questions/getQuestions', category)
      } catch (e) {
        throw e
      }
    },
  },
  async mounted() {
    try {
      await this.getQuestions(questionsCategories.general)
    } catch (e) {
      this.$bvToast.toast('Ошибка загрузки страницы!', {
        title: 'Что-то пошло не так(',
        variant: 'danger',
        solid: true,
        appendToast: true,
      })
    }
  },
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.g-questions
    &__title
        +md
            font-size: 24px
            line-height: 28px
            margin-right: 28px

    &__btn
        &_mobile
            display: none
            width: 56px
            height: 56px
            border-radius: 50%
            background: rgba(100, 62, 255, 1)
            align-items: center
            justify-content: center
            color: $white
            font-size: 25px
            flex-shrink: 0
            transition: all 0.05s

            &:hover
                background: rgba(136, 117, 255, 1)

            +md
                display: flex

        &_desktop
            +md
                display: none

    &__line
        padding: 24px
        background: #282439
        display: flex
        align-items: center
        margin-bottom: 12px
        border-radius: 12px
        cursor: pointer
        +md
            flex-wrap: wrap
            justify-content: space-between
            padding: 16px 16px 32px 16px

        .number
            flex-shrink: 0
            padding-right: 32px
            color: $gray
            +md
                padding-right: 0

        .text
            color: $white
            flex-grow: 2
            padding-right: 32px
            white-space: nowrap
            overflow: hidden
            text-overflow: ellipsis
            +md
                order: 10
                margin-top: 8px
                padding-right: 0
                white-space: initial
                overflow: hidden
                text-overflow: ellipsis
                display: -moz-box
                -moz-box-orient: vertical
                display: -webkit-box
                -webkit-line-clamp: 2
                -webkit-box-orient: vertical
                line-clamp: 3
                box-orient: vertical
                width: 100%

        .status
            flex-shrink: 0
            flex-grow: 0
            color: rgba(44, 209, 91, 1)

    &__table-header
        display: flex
        align-items: center
        justify-content: space-between
        padding: 20px 0
        +md
            padding: 24px 0

    &__top
        padding-bottom: 20px
        border-bottom: 1px solid rgba(154, 147, 170, 0.3)
        +lg
            margin-top: 24px
            padding-bottom: 24px
</style>

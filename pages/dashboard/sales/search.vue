<template>
  <div class="g-page">
    <b-container>
      <h1 class="title">Личный кабинет</h1>

      <b-row>
        <b-col xl="3" lg="3">
          <!-- Dashboard navigation  adapted = true -->
          <g-dashboard-navigation />
        </b-col>

        <b-col xl="9" lg="9">
          <div class="g-sales-search__top">
            <show-all to="/sales" label="Назад к списку" icon reverse />

            <h2 class="g-sales-search__title">
              Добавить новую игру на продажу
            </h2>
          </div>

          <form
            @submit.prevent="getSearchItems"
            class="g-sales-search__wrapper"
          >
            <g-input
              v-model="form.search"
              placeholder="Название игры"
              color="white"
              class="g-sales-search__input"
            />

            <main-button
              color="primary"
              label="выбрать"
              size="xl"
              type="submit"
            />
          </form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import GDashboardNavigation from '~/components/dashboard/Navigation'
import icons from '~/mixins/icons'
import ShowAll from '~/components/buttons/MainLink'
import GInput from '~/components/form-elements/Input'
import MainButton from '~/components/buttons/MainButton'

export default {
  components: {
    MainButton,
    GInput,
    ShowAll,
    GDashboardNavigation,
  },
  mixins: [icons],
  middleware: ['auth'],
  data() {
    return {
      form: {
        search: null,
      },
    }
  },
  methods: {
    async getSearchItems() {
      try {
        await this.$store.dispatch('sales/getSearchItems', this.form.search)
      } catch (e) {
        this.$bvToast.toast('Ошибка загрузки страницы!', {
          title: 'Что-то пошло не так(',
          variant: 'danger',
          solid: true,
          appendToast: true,
        })
      }
    },
  },
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.g-sales-search
    &__input
        width: 100%
        margin-right: 20px
        +md
            margin-right: 0
            margin-bottom: 24px

    &__wrapper
        display: flex
        align-items: center
        background: #282439
        padding: 20px 24px
        border-radius: 12px
        +md
            flex-direction: column
            padding: 24px 16px
            .button, .button__wrapper
                width: 100%

    &__title
        margin-top: 16px

    &__top
        margin-bottom: 24px
        +lg
            margin-top: 24px
</style>

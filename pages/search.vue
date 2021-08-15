<template>
  <div>
    <!-- Search top  adapted = true   -->
    <section class="legal__top">
      <b-container>
        <bread-crumb :links="links" />
      </b-container>
    </section>

    <section class="g-search-page__search">
      <b-container>
        <search v-model="form.searchValue" @send-search="getSearch" />
      </b-container>
    </section>

    <section class="g-search-page__section" v-if="searchResult !== null">
      <b-container>
        <h2 class="g-search-page__title">Игры</h2>

        <div class="g-search-page__result">
          <b-row>
            <b-col
              xl="3"
              v-for="item in searchResult"
              :key="item.itemId"
              class="g-search-page__result-col"
            >
              <nuxt-link :to="'/product/' + item.itemId">
                <g-seller-game-card
                  class="g-search-page__result-item"
                  :image="item.itemHeaderImage"
                  :name="item.itemName"
                />
              </nuxt-link>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </section>
  </div>
</template>

<script>
import BreadCrumb from '~/components/BreadCrumb'
import Search from '~/components/menu/Search'
import { mapState } from 'vuex'
import GSellerGameCard from '~/components/cards/SellerGameCard'
export default {
  name: 'search-page',
  components: { GSellerGameCard, Search, BreadCrumb },
  layout: 'default',
  data: () => {
    return {
      links: [
        { to: '/', label: 'Главная' },
        { to: '/search', label: 'Поиск' },
      ],
      form: {
        searchValue: null,
      },
    }
  },
  computed: {
    ...mapState({
      searchResult: (state) => state.search.result,
    }),
  },
  methods: {
    async getSearchFromQueryString(query) {
      if (Object.keys(query).length === 0) {
        return
      }

      try {
        await this.$store.dispatch('search/getSearch', query.name)
      } catch (e) {
        throw e
      }
    },
    async getSearch() {
      try {
        await this.$store.dispatch('search/getSearch', this.form.searchValue)
      } catch (e) {
        console.log(e)
      }
    },
  },
  async mounted() {
    try {
      const query = this.$route.query
      await this.getSearchFromQueryString(query)
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
.g-search-page
    &__result-item
        .g-seller-game-card
            width: 100% !important
            margin-right: 0
    &__result-col
        margin-bottom: 24px
    &__section
        padding-bottom: 64px
    &__title
        padding-bottom: 16px
        position: relative
        font-weight: 600
        font-size: 32px
        line-height: 38px
        margin-bottom: 32px
        &::after
            content: ''
            width: 100%
            height: 1px
            position: absolute
            bottom: 0
            left: 0
            background: $gray
            opacity: 0.7
    &__search
        padding: 25px 0 40px
</style>

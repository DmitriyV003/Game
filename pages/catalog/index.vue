<template>
  <div>
    <!--  Popup filters  adapted = true -->
    <g-catalog-filters-popup />

    <!--  Catalog top section  adapted = true -->
    <section class="catalog-top-section">
      <b-container>
        <div class="catalog-top-section__content">
          <bread-crumb
            :links="headerLinks"
          />

          <g-catalog-section-header
            :title="pageTitle"
            v-if="meta !== null"
            :caption="meta.total + ' продуктов'"
          />
        </div>
      </b-container>
    </section>

    <!--  Catalog adapted = true -->
    <section class="catalog">
      <b-container>
        <b-row>
          <!--  Catalog filters -->
          <b-col
            xl="3"
            lg="3"
            class="d-xl-block d-lg-block d-md-none d-sm-none d-none"
          >
            <section class="catalog-filters">
              <!--  Price filter  -->
              <drop-items
                title="Цена"
                class="catalog__drop"
                v-if="filters !== null && filters.price !== null"
              >
                <template v-slot:drop-items>
                  <div class="catalog__price">
                    <client-only>
                      <vue-range-slider
                        class="g-range-slider"
                        v-model="prices"
                        tooltip="always"
                        :interval="0.01"
                        :min="Number(filters.price.minPrice)"
                        :max="Number(filters.price.maxPrice)"
                        :height="1"
                        :contained="true"
                        :process-style="{
                        backgroundColor: 'rgba(100, 62, 255, 1)',
                      }"
                        @drag-end="getFilteredItems"
                      >
                        <template v-slot:tooltip="{ value, focus }">
                          <div :class="['g-range-slider__tooltip', { focus }]">
                            {{ Number(formatNumber(value, 2)) }}
                          </div>
                        </template>
                      </vue-range-slider>
                    </client-only>
                  </div>

                  <div class="catalog-filters__range-inputs">
                    <div class="catalog-filters__input g-input-filter">
                      <input
                        v-model="minPrice"
                        type="text"
                        class="input-reboot g-input-filter__input"
                      />
                      <span class="g-input-filter__right-label">₽</span>
                    </div>

                    <span class="text-color-gray text-weight-600 text-size-14"
                      >-</span
                    >

                    <div class="catalog-filters__input g-input-filter">
                      <input
                        v-model="maxPrice"
                        type="text"
                        class="input-reboot g-input-filter__input"
                      />
                      <span class="g-input-filter__right-label">₽</span>
                    </div>
                  </div>
                </template>
              </drop-items>

              <!-- Category filter -->
              <drop-items
                class="catalog__drop"
                title="Категории"
                v-if="filters !== null && filters.categories !== null"
              >
                <template v-slot:drop-items>
                  <g-check-box
                    v-for="item in filters.categories.slice(
                      0,
                      categoriesToShow
                    )"
                    :label="item.name"
                    :val="item.id"
                    :count="item.count"
                    :key="item.id"
                    v-model="checkedCategories"
                    class="catalog__category-filter"
                  />

                  <show-all
                    @click.native="
                      showAll('categoriesToShow', filters.categories.length)
                    "
                    label="Смотреть все"
                  />
                </template>
              </drop-items>

              <!-- Platforms filter -->
              <drop-items
                class="catalog__drop"
                title="Платформы"
                v-if="filters !== null && filters.platforms !== null"
              >
                <template v-slot:drop-items>
                  <g-check-box
                    v-for="item in filters.platforms"
                    :label="item.name"
                    :val="item.id"
                    :count="item.count"
                    :key="item.id"
                    v-model="checkedPlatforms"
                    class="catalog__category-filter"
                  />
                </template>
              </drop-items>

              <!-- Genres filter -->
              <drop-items
                class="catalog__drop"
                title="Жанры"
                v-if="filters !== null && filters.genres !== null"
              >
                <template v-slot:drop-items>
                  <g-check-box
                    v-for="item in filters.genres.slice(0, genresToShow)"
                    :label="item.name"
                    :val="item.id"
                    :count="item.count"
                    :key="item.id"
                    v-model="checkedGenres"
                    class="catalog__category-filter"
                  />

                  <show-all
                    @click.native="
                      showAll('genresToShow', filters.genres.length)
                    "
                    label="Смотреть все"
                  />
                </template>
              </drop-items>

              <!-- Services filter -->
              <drop-items
                class="catalog__drop"
                title="Сервисы"
                v-if="filters !== null  && filters.services !== null"
              >
                <template v-slot:drop-items>
                  <g-check-box
                    v-for="item in filters.services"
                    :label="item.name"
                    :val="item.id"
                    :count="item.count"
                    :key="item.id"
                    v-model="checkedServices"
                    class="catalog__category-filter"
                  />
                </template>
              </drop-items>

              <!-- Tag filter -->
              <!--                            <drop-items class="catalog__drop" title="Теги">-->
              <!--                                <template v-slot:drop-items>-->
              <!--                                    <div class="catalog__tags">-->
              <!--                                        <g-tag-->
              <!--                                            v-for="tag in tags.slice(0, tagsToShow)"-->
              <!--                                            :key="tag.val"-->
              <!--                                            class="catalog__tag"-->
              <!--                                            :label="tag.label"-->
              <!--                                        />-->
              <!--                                    </div>-->

              <!--                                    <show-all-->
              <!--                                        @click.native="showAll('tagsToShow', tags.length)"-->
              <!--                                        label="Смотреть все"-->
              <!--                                    />-->
              <!--                                </template>-->
              <!--                            </drop-items>-->
            </section>
          </b-col>

          <!--  Catalog items adapted = true -->
          <b-col xl="9" lg="9">
            <div
              class="catalog__filter-tags"
            >
              <g-tag
                v-for="item in checkedCategories"
                class="catalog__filter-tag"
                :label="
                  getFilterNameForTag({
                    filterType: 'categories',
                    filter: item,
                  }).name
                "
                closable
                :key="item"
                :value="item"
                filter-type="categories"
                @delete-tag="deleteFilter"
              />
              <g-tag
                v-for="item in checkedPlatforms"
                class="catalog__filter-tag"
                :label="
                  getFilterNameForTag({ filterType: 'platforms', filter: item })
                    .name
                "
                closable
                :key="item"
                :value="item"
                filter-type="platforms"
                @delete-tag="deleteFilter"
              />
              <g-tag
                v-for="item in checkedGenres"
                class="catalog__filter-tag"
                :label="
                  getFilterNameForTag({ filterType: 'genres', filter: item })
                    .name
                "
                closable
                :key="item"
                :value="item"
                filter-type="genres"
                @delete-tag="deleteFilter"
              />
              <g-tag
                v-for="item in checkedServices"
                class="catalog__filter-tag"
                :label="
                  getFilterNameForTag({ filterType: 'services', filter: item })
                    .name
                "
                closable
                :key="item"
                :value="item"
                filter-type="services"
                @delete-tag="deleteFilter"
              />
              <show-all
                class="catalog__clear-all"
                label="Очистить все"
                :icon="false"
                v-if="isClearTagsButtonShow"
                @click.native="clearFilters"
              />
            </div>

            <b-row class="catalog__row" v-if="items !== null">
              <b-col
                class="catalog__card"
                xl="4"
                lg="4"
                md="4"
                sm="6"
                v-for="item in items"
                :key="item.itemId"
              >
                <game-card
                  :id="item.itemId"
                  :image="item.itemBackground"
                  :title="item.itemName"
                  :developer="item.itemDeveloper"
                  :rating="Number(item.itemMetacritic)"
                  :new-price="item.itemPrice.new"
                  :old-price="item.itemPrice.old"
                  :sale="item.itemPrice.sale"
                  :type="type"
                  adaptive-sm
                />
              </b-col>
            </b-row>

            <!--                        <button class="button-reboot catalog__show-more">Показать больше</button>-->

            <g-pagination
              v-if="meta !== null"
              class="catalog__pagination"
              @onNext="toPage"
              @onPrev="toPage"
              @toPage="toPage"
              :total-pages="meta.last_page"
            />
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import BreadCrumb from '~/components/BreadCrumb'
import DropItems from '~/components/DropItems'
import GCheckBox from '~/components/form-elements/GCheckbox'
import icons from '~/mixins/icons'
import ShowAll from '~/components/buttons/MainLink'
import GameCard from '~/components/cards/GameCard'
import { mapGetters, mapState } from 'vuex'
import MainButton from '~/components/buttons/MainButton'
import GTag from '~/components/Tag'
import GPagination from '~/components/Pagination'
import GCatalogSectionHeader from '~/components/catalog/CatalogSectionHeader'
import GCatalogFiltersPopup from '~/components/popups/CatalogFiltersPopup'
import Chip         from '~/components/Chip'
import formatNumber from '~/utils/formatNumber'

export default {
  components: {
    Chip,
    GCatalogFiltersPopup,
    GCatalogSectionHeader,
    GPagination,
    GTag,
    MainButton,
    GameCard,
    ShowAll,
    GCheckBox,
    DropItems,
    BreadCrumb,
  },
  mixins: [icons],
  layout: 'default',
  async mounted() {
    try {

      await this.setCatalogTypeFromQueryString()
      await this.$store.dispatch('catalog/getCatalogFilters')
      const query = await this.fillFiltersFromQueryString()

      this.pageTitle = this.checkCatalogType(this.$route.query)

      if (query) {
        await this.getFilteredItems()
      } else {
        await this.$store.dispatch('catalog/getCatalogItems')
      }

      await this.$router.push({
        path: '/catalog',
        query: { ...this.$route.query, page: this.meta.current_page },
      })
    } catch (e) {
      this.$bvToast.toast('Ошибка загрузки страницы!', {
        title: 'Что-то пошло не так(',
        variant: 'danger',
        solid: true,
        appendToast: true,
      })
    }
  },
  computed: {
    ...mapState({
      windowSize: (state) => state.common.windowSize,
      items: (state) => state.catalog.items,
      meta: (state) => state.catalog.meta,
      filters: (state) => state.catalog.filters,
      acceptedFilters: (state) => state.catalog.acceptedFilters,
      type: (state) => state.catalog.type,
    }),
    ...mapGetters({
      getFilterNameForTag: 'catalog/getFilterNameForTag',
    }),
    isClearTagsButtonShow() {
      let isShow = false
      for (let item in this.acceptedFilters) {
        let filterGroup = this.acceptedFilters[item]
        if (
          typeof filterGroup === 'object' &&
          'length' in filterGroup &&
          filterGroup.length > 0
        ) {
          isShow = true
          break
        }
      }

      return isShow
    },
    checkedCategories: {
      get() {
        return this.acceptedFilters.categories
      },
      async set(val) {
        await this.$store.dispatch('catalog/addFilter', {
          filterType: 'categories',
          filter: val,
        })
        await this.getFilteredItems()
      },
    },
    checkedPlatforms: {
      get() {
        return this.acceptedFilters.platforms
      },
      async set(val) {
        await this.$store.dispatch('catalog/addFilter', {
          filterType: 'platforms',
          filter: val,
        })
        await this.getFilteredItems()
      },
    },
    checkedGenres: {
      get() {
        return this.acceptedFilters.genres
      },
      async set(val) {
        await this.$store.dispatch('catalog/addFilter', {
          filterType: 'genres',
          filter: val,
        })
        await this.getFilteredItems()
      },
    },
    checkedServices: {
      get() {
        return this.acceptedFilters.services
      },
      async set(val) {
        await this.$store.dispatch('catalog/addFilter', {
          filterType: 'services',
          filter: val,
        })
        await this.getFilteredItems()
      },
    },
    prices: {
      get() {
        return [this.minPrice, this.maxPrice]
      },
      set(val) {
        this.$store.dispatch('catalog/changePriceFilter', {
          minPrice: Number(val[0]),
          maxPrice: Number(val[1]),
        })
      },
    },
    minPrice: {
      get() {
        return this.acceptedFilters.minPrice
      },
      set(val) {
        this.$store.dispatch('catalog/changePriceFilter', {
          minPrice: Number(val),
          maxPrice: this.maxPrice,
        })
      },
    },
    maxPrice: {
      get() {
        return this.acceptedFilters.maxPrice
      },
      set(val) {
        this.$store.dispatch('catalog/changePriceFilter', {
          minPrice: this.minPrice,
          maxPrice: Number(val),
        })
      },
    },
  },
  data: () => {
    return {
      formatNumber,
      filtersStrings: [
        'minPrice',
        'maxPrice',
        'categories',
        'genres',
        'platforms',
        'services',
      ],
      pageTitle: '',
      showPopup: false,
      priceRange: [0, 0],
      categoriesToShow: 2,
      genresToShow: 5,
      tagsToShow: 13,
      headerLinks: [
        { to: '/', label: 'Главная' },
      ],
      tags: [
        { val: 'val1', label: 'Серии' },
        { val: 'val2', label: 'онлайн' },
        { val: 'val3', label: 'военные' },
        { val: 'val4', label: 'зомби' },
        { val: 'val15', label: 'атмосфера' },
        { val: 'val1', label: '3D' },
        { val: 'val2', label: 'выживание' },
        { val: 'val3', label: 'открытый мир' },
      ],
    }
  },
  methods: {
    async setCatalogTypeFromQueryString() {
      const query = this.$route.query

      if (!query.type) {
        query.type = 'games'
      }

      await this.$store.dispatch('catalog/setCatalogType', query.type)

      await this.$router.push({
        path: '/catalog',
        query: { ...this.$route.query, type: this.type },
      })
    },
    checkCatalogType (query) {
      const type = query.type === 'software' ? 'Софт' : 'Игры'
      this.headerLinks.push({
        to: `/catalog?page=1&type=${query.type}`,
        label: type
      })

      return type
    },
    async getFilteredItems() {
      try {
        await this.$store.dispatch('catalog/getFilteredItems')
      } catch (e) {
        this.$bvToast.toast('Что-то пошло не так(', {
          title: 'Ошибка!',
          variant: 'danger',
          solid: true,
          appendToast: true,
        })
      }
    },
    async clearFilters() {
      try {
        await this.$store.dispatch('catalog/clearFilters')
        await this.$store.dispatch('catalog/getCatalogItems')
      } catch (e) {
        console.log(e)
      }
    },
    async deleteFilter({ filterType, value }) {
      try {
        await this.$store.dispatch('catalog/deleteFilter', {
          filterType,
          filter: value,
        })
        await this.getFilteredItems()
      } catch (e) {
        console.log(e)
      }
    },
    async fillFiltersFromQueryString() {
      const query = this.$route.query
      const data = []

      for (const key in this.filtersStrings) {
        const item = this.filtersStrings[key]
        if (item in query) {
          if (!Number.isNaN(Number(query[item]))) {
            await this.$store.dispatch('catalog/addFilter', {
              filterType: item,
              filter: query[item],
            })
          } else {
            await this.$store.dispatch('catalog/addFilterToArray', {
              filterType: item,
              filter: query[item].split(','),
            })
          }

          data.push(item)
        }
      }

      return data.length > 0
    },
    showAll(whatToShow, count) {
      this[whatToShow] = count
    },
    async toPage(page) {
      try {
        await this.$router.push({
          path: '/catalog',
          query: { ...this.$route.query, page },
        })
        await this.$store.dispatch('catalog/getCatalogGamesByPage', { page, type: this.$route.query.type })
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>

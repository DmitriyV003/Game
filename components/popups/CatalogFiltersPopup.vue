<template>
  <div v-if="val" class="catalog-filters-popup">
    <div class="catalog-filters-popup__body">
      <div class="catalog-filters-popup__title">
        <p class="text-weight-600">Выберите необходимые параметры:</p>
        <close-icon @click="val = false" class="icon" />
      </div>

      <div class="catalog-filters-popup__price" v-if="filters !== null">
        <p class="title text-weight-600 text-color-white text-uppercase">
          Цена
        </p>
        <vue-range-slider
          class="g-range-slider"
          v-model="prices"
          :tooltip="'always'"
          :min="Number(filters.price.minPrice)"
          :max="Number(filters.price.maxPrice)"
          :interval="0.01"
          :height="1"
          :contained="true"
          :process-style="{ backgroundColor: 'rgba(100, 62, 255, 1)' }"
        >
          <template v-slot:tooltip="{ value, focus }">
            <div :class="['g-range-slider__tooltip', { focus }]">
              {{ Number(formatNumber(value, 2)) }}
            </div>
          </template>
        </vue-range-slider>

        <div class="catalog-filters__range-inputs">
          <div class="catalog-filters__input g-input">
            <input
              v-model="minPrice"
              type="text"
              class="input-reboot g-input__input"
            />
            <span class="g-input__right-label">₽</span>
          </div>

          <span class="text-color-gray text-weight-600 text-size-14">-</span>

          <div class="catalog-filters__input g-input">
            <input
              v-model="maxPrice"
              type="text"
              class="input-reboot g-input__input"
            />
            <span class="g-input__right-label">₽</span>
          </div>
        </div>
      </div>

      <div class="catalog-filters-popup__scroll">
        <!-- Category filter -->
        <drop-items
          class="catalog-filters-popup__drop"
          title="Категории"
          v-if="filters !== null"
          lg-scrollable-drops
        >
          <template v-slot:drop-items>
            <g-check-box
              v-for="item in filters.categories"
              :label="item.name"
              :val="item.id"
              :count="25"
              :key="item.id"
              v-model="checkedCategories"
              class="catalog__category-filter"
            />
          </template>
        </drop-items>

        <!-- Services filter -->
        <drop-items
          class="catalog-filters-popup__drop"
          title="Сервисы"
          v-if="filters !== null"
          lg-scrollable-drops
        >
          <template v-slot:drop-items>
            <g-check-box
              v-for="item in filters.services"
              :label="item.name"
              :val="item.id"
              :count="25"
              :key="item.id"
              v-model="checkedServices"
              class="catalog__category-filter"
            />
          </template>
        </drop-items>

        <!-- Platform filter -->
        <drop-items
          class="catalog-filters-popup__drop"
          title="Платформы"
          v-if="filters !== null"
          lg-scrollable-drops
        >
          <template v-slot:drop-items>
            <g-check-box
              v-for="item in filters.platforms"
              :label="item.name"
              :val="item.id"
              :count="25"
              :key="item.id"
              v-model="checkedPlatforms"
              class="catalog__category-filter"
            />
          </template>
        </drop-items>

        <!-- Genres filter -->
        <drop-items
          class="catalog-filters-popup__drop"
          title="Жанры"
          v-if="filters !== null"
          lg-scrollable-drops
        >
          <template v-slot:drop-items>
            <g-check-box
              v-for="item in filters.genres"
              :label="item.name"
              :val="item.id"
              :count="25"
              :key="item.id"
              v-model="checkedGenres"
              class="catalog__category-filter"
            />
          </template>
        </drop-items>

        <!-- Tag filter -->
        <!--                <drop-items class="catalog-filters-popup__drop" title="Теги">-->
        <!--                    <template v-slot:drop-items>-->
        <!--                        <div class="catalog__tags">-->
        <!--                            <g-tag-->
        <!--                                v-for="tag in tags.slice(0, tagsToShow)"-->
        <!--                                class="catalog__tag"-->
        <!--                                :key="tag.val"-->
        <!--                                :label="tag.label"-->
        <!--                            />-->
        <!--                        </div>-->

        <!--                        <show-all -->
        <!--                            @click.native="showAll('tagsToShow', tags.length)" label="Смотреть все" />-->
        <!--                    </template>-->
        <!--                </drop-items>-->
      </div>

      <div class="catalog-filters-popup__buttons">
        <main-button
          class="popup-btn"
          color="primary"
          label="подобрать"
          size="xl"
          @click.native="acceptFilters"
        />
        <span class="reset text-size-16 text-color-gray" @click="clearFilters"
          >Сбросить фильтры</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from '~/plugins/event-bus'
import MainButton from '~/components/buttons/MainButton'
import DropItems from '~/components/DropItems'
import ShowAll from '~/components/buttons/MainLink'
import GTag from '~/components/Tag'
import GCheckBox from '~/components/form-elements/GCheckbox'
import { mapState, mapGetters } from 'vuex'
import icons from '~/mixins/icons'

export default {
  name: 'GCatalogFiltersPopup',
  components: { GCheckBox, GTag, ShowAll, DropItems, MainButton },
  mixins: [icons],
  methods: {
    showAll(whatToShow, count) {
      this[whatToShow] = count
    },
    async clearFilters() {
      try {
        await this.$store.dispatch('catalog/clearFilters')
        await this.$store.dispatch('catalog/getCatalogItems')
      } catch (e) {
        console.log(e)
      }
    },
    async acceptFilters() {
      try {
        await this.$store.dispatch('catalog/getFilteredItems')
        this.val = false
      } catch (e) {
        console.log(e)
      }
    },
  },
  computed: {
    ...mapState({
      windowSize: (state) => state.common.windowSize,
      filters: (state) => state.catalog.filters,
      acceptedFilters: (state) => state.catalog.acceptedFilters,
    }),
    checkedCategories: {
      get() {
        return this.acceptedFilters.categories
      },
      async set(val) {
        await this.$store.dispatch('catalog/addFilter', {
          filterType: 'categories',
          filter: val,
        })
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
        return this.acceptedFilters.minPrice / 100
      },
      set(val) {
        this.$store.dispatch('catalog/changePriceFilter', {
          minPrice: Number(val) * 100,
          maxPrice: null,
        })
      },
    },
    maxPrice: {
      get() {
        return this.acceptedFilters.maxPrice / 100
      },
      set(val) {
        this.$store.dispatch('catalog/changePriceFilter', {
          minPrice: null,
          maxPrice: Number(val) * 100,
        })
      },
    },
  },
  data() {
    return {
      val: false,
      categoriesToShow: 2,
      tagsToShow: 5,
      tags: [
        { val: 'val1', label: 'Серии' },
        { val: 'val2', label: 'онлайн' },
        { val: 'val3', label: 'военные' },
        { val: 'val4', label: 'зомби' },
        { val: 'val5', label: 'атмосфера' },
        { val: 'val6', label: '3D' },
        { val: 'val7', label: 'выживание' },
        { val: 'val8', label: 'открытый мир' },
        { val: 'val9', label: 'смешная' },
        { val: 'val10', label: 'фентези' },
      ],
    }
  },
  mounted() {
    const that = this
    window.addEventListener('resize', function () {
      if (that.windowSize <= 992) {
        that.showAll('categoriesToShow', that.filters.categories.length)
      } else {
        that.categoriesToShow = 2
        that.showPopup = false
      }
    })
  },
  created() {
    eventBus.$on('popupClose', () => {
      this.val = false
    })

    eventBus.$on('catalogFiltersPopupOpen', () => {
      this.val = true
    })
  },
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.catalog-filters-popup
  display: none
  +lg
    display: flex
    position: fixed
    justify-content: center
    align-items: center
    top: 0
    width: 100%
    height: 100%
    left: 0
    z-index: 600
    background: rgba(18, 18, 18, 0.75)
    backdrop-filter: blur(8px)

  &__buttons
    margin-top: 40px
    display: flex
    flex-direction: column
    align-items: center

    .reset
      width: 100%
      margin-top: 24px
      cursor: pointer
      text-align: center

    .popup-btn
      width: 100%

      button
        width: 100%

  &__scroll
    +lg
      max-height: calc(100vh - 64px - 40px - 36px - 20px - 28px - 35px - 36px - 40px - 50px - 24px - 48px - 48px)
      overflow-y: auto
      margin-right: -16px
      padding-right: 16px

  &__drop
    margin-bottom: 20px

  &__price
    margin-bottom: 40px

    .title
      margin-bottom: 28px

  &__title
    display: flex
    align-items: baseline
    justify-content: space-between
    margin-bottom: 36px

    p
      color: white(0.9)
      font-size: 18px
      line-height: 24px

    .icon
      color: $gray
      font-size: 25px
      cursor: pointer
      margin-left: 11px

  &__body
    height: calc(100vh - 64px)
    width: calc(100vw - 32px)
    border-radius: 12px
    background: rgba(40, 36, 57, 1)
    padding: 24px 16px
    display: flex
    flex-direction: column
    justify-content: space-between
</style>

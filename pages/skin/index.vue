<template>
  <div>

    <!--  Popup filters  adapted = true -->
    <div v-show="showPopup" class="catalog-filters-popup">
      <div class="catalog-filters-popup__body">
        <div class="catalog-filters-popup__title">
          <p class="text-weight-600">Выберите необходимые параметры:</p>
          <close-icon @click="showPopup = false" class="icon" />
        </div>

        <div class="catalog-filters-popup__price">
          <p class="title text-weight-600 text-color-white text-uppercase">Цена</p>
          <vue-range-slider
            class="g-range-slider"
            v-model="priceRange"
            :tooltip="'always'"
            :height="1"
            :contained="true"
            :process-style="{ backgroundColor: 'rgba(100, 62, 255, 1)' }"
          >
            <template v-slot:tooltip="{ value, focus }">
              <div :class="['g-range-slider__tooltip', { focus }]">{{ priceRange[1] }}</div>
            </template>
          </vue-range-slider>

          <div class="catalog-filters__range-inputs">
            <div class="catalog-filters__input g-input">
              <input v-model="priceRange[0]" type="text" class="input-reboot g-input__input">
              <span class="g-input__right-label">₽</span>
            </div>

            <span class="text-color-gray text-weight-600 text-size-14">-</span>

            <div class="catalog-filters__input g-input">
              <input v-model="priceRange[1]" type="text" class="input-reboot g-input__input">
              <span class="g-input__right-label">₽</span>
            </div>
          </div>
        </div>

        <div class="catalog-filters-popup__scroll">

          <!-- Category filter -->
          <drop-items class="catalog-filters-popup__drop" title="Категории">
            <template v-slot:drop-items>
              <g-check-box
                v-for="item in categories.slice(0, categoriesToShow)"
                :label="item.label"
                :val="item.val"
                :count="item.count"
                :key="item.val"
                v-model="checkedCategories"
                class="catalog__category-filter"
              />
            </template>
          </drop-items>

          <!-- Platform filter -->
          <drop-items class="catalog-filters-popup__drop" title="Платформы">
            <template v-slot:drop-items>
              <g-check-box
                v-for="item in categories.slice(0, categoriesToShow)"
                :label="item.label"
                :val="item.val"
                :count="item.count"
                :key="item.val"
                v-model="checkedCategories"
                class="catalog__category-filter"
              />
            </template>
          </drop-items>

          <!-- Tag filter -->
          <g-search />
        </div>

        <div class="catalog-filters-popup__buttons">
          <main-button class="popup-btn" color="primary" label="подобрать" size="xl" />
          <button class="button-reboot reset text-size-16 text-color-gray">Сбросить фильтры</button>
        </div>

      </div>
    </div>

    <!--  Catalog top section  adapted = true -->
    <section class="catalog-top-section">
      <b-container>
        <div class="catalog-top-section__content">
          <bread-crumb />

          <div class="catalog-top-section__title">
            <div class="catalog-top-section__block">
              <h1>Игры</h1>
              <span class="text-size-14 text-color-gray">390786 продуктов</span>
            </div>

            <div class="catalog-top-section__column">
              <tune-icon @click="showPopup = true" class="catalog-top-section__filters" />

              <div class="catalog-top-section__sort">
                <span class="text-size-14">Сначала популярные</span>
                <img src="/images/icons/filter.svg" alt="">
              </div>
            </div>
          </div>
        </div>
      </b-container>
    </section>

    <!--  Catalog adapted = true -->
    <section class="catalog">
      <b-container>
        <b-row>

          <!--  Catalog filters -->
          <b-col xl="3" lg="3" class="d-xl-block d-lg-block d-md-none d-sm-none d-none">
            <section class="catalog-filters">

              <!--  Price filter  -->
              <drop-items title="Цена" class="catalog__drop" >
                <template v-slot:drop-items>
                  <div class="catalog__price">
                    <vue-range-slider
                      class="g-range-slider"
                      v-model="priceRange"
                      :tooltip="'always'"
                      :height="1"
                      :contained="true"
                      :process-style="{ backgroundColor: 'rgba(100, 62, 255, 1)' }"
                    >
                      <template v-slot:tooltip="{ value, focus }">
                        <div :class="['g-range-slider__tooltip', { focus }]">{{ priceRange[1] }}</div>
                      </template>
                    </vue-range-slider>
                  </div>

                  <div class="catalog-filters__range-inputs">
                    <div class="catalog-filters__input g-input">
                      <input v-model="priceRange[0]" type="text" class="input-reboot g-input__input">
                      <span class="g-input__right-label">₽</span>
                    </div>

                    <span class="text-color-gray text-weight-600 text-size-14">-</span>

                    <div class="catalog-filters__input g-input">
                      <input v-model="priceRange[1]" type="text" class="input-reboot g-input__input">
                      <span class="g-input__right-label">₽</span>
                    </div>
                  </div>
                </template>
              </drop-items>

              <!-- Category filter -->
              <drop-items class="catalog__drop" title="Категории">
                <template v-slot:drop-items>
                  <g-check-box
                    v-for="item in categories.slice(0, categoriesToShow)"
                    :label="item.label"
                    :val="item.val"
                    :count="item.count"
                    :key="item.val"
                    v-model="checkedCategories"
                    class="catalog__category-filter"
                  />

                  <show-all @click.native="showAll('categoriesToShow', categories.length)" label="Смотреть все" />
                </template>
              </drop-items>

              <!-- Tag filter -->
              <drop-items class="catalog__drop" title="Коллекция">
                <template v-slot:drop-items>
                  <div class="catalog__tags">
                    <g-search />
                  </div>
                </template>
              </drop-items>

            </section>
          </b-col>

          <!--  Catalog items adapted = true -->
          <b-col xl="9" lg="9">
            <b-row class="catalog__row">
              <b-col class="catalog__card" xl="4" lg="4" md="4" sm="6">
                <g-skin-card />
              </b-col>
              <b-col class="catalog__card" xl="4" lg="4" md="4" sm="6">
                <g-skin-card />
              </b-col>
              <b-col class="catalog__card" xl="4" lg="4" md="4" sm="6">
                <g-skin-card />
              </b-col>
              <b-col class="catalog__card" xl="4" lg="4" md="4" sm="6">
                <g-skin-card />
              </b-col>
            </b-row>

            <button class="button-reboot catalog__show-more">Показать больше</button>

            <g-pagination class="catalog__pagination" @onNext="next" />
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
  import { mapState } from 'vuex'
  import MainButton from '~/components/buttons/MainButton'
  import GTag from '~/components/Tag'
  import GPagination from '~/components/Pagination'
  import GSkinCard from '~/components/cards/SkinCard'
  import GSearch from "~/components/form-elements/GSearch";
  export default {
    name: 'SkinsPage',
    components: {GSearch, GSkinCard, GPagination, GTag, MainButton, GameCard, ShowAll, GCheckBox, DropItems, BreadCrumb },
    mixins: [icons],
    layout: 'default',
    computed: {
      ...mapState({
        windowSize: state => state.common.windowSize
      })
    },
    mounted () {
      const that = this
      window.addEventListener('resize', function () {
        if (that.windowSize <= 992) {
          that.showAll('categoriesToShow', that.categories.length)
        } else {
          that.categoriesToShow = 2
          that.showPopup = false
        }
      })
    },
    data: () => {
      return {
        showPopup: false,
        priceRange: [0, 0],
        checkedCategories: [],
        categoriesToShow: 2,
        tagsToShow: 13,
        tags: [
          { val: 'val1', label: 'Серии' },
          { val: 'val2', label: 'онлайн' },
          { val: 'val3', label: 'военные' },
          { val: 'val4', label: 'зомби' },
          { val: 'val15', label: 'атмосфера' },
          { val: 'val1', label: '3D' },
          { val: 'val2', label: 'выживание' },
          { val: 'val3', label: 'открытый мир' },
          { val: 'val4', label: 'смешная' },
          { val: 'val15', label: 'фентези' },
          { val: 'val1', label: 'гонки' },
          { val: 'val2', label: 'хоррор' },
          { val: 'val3', label: 'Quick-time events' },
          { val: 'val4', label: 'зомби' },
          { val: 'val15', label: 'атмосфера' },
          { val: 'val1', label: 'Серии' },
          { val: 'val2', label: 'онлайн' },
          { val: 'val3', label: 'военные' },
          { val: 'val4', label: 'зомби' },
          { val: 'val15', label: 'атмосфера' }
        ],
        categories: [
          { val: 'val1', label: 'Экшн', count: 1254 },
          { val: 'val2', label: 'Приключения', count: 125 },
          { val: 'val3', label: 'Стратегии', count: 12544 },
          { val: 'val4', label: 'Инди', count: 54 },
          { val: 'val15', label: 'Аниме', count: 12547 }
        ]
      }
    },
    methods: {
      showAll (whatToShow, count) {
        this[whatToShow] = count
      },
      next () {
        console.log(1111)
      }
    }
  }
</script>

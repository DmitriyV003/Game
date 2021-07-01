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
          <drop-items class="catalog-filters-popup__drop" title="Теги">
            <template v-slot:drop-items>
              <div class="catalog__tags">
                <g-tag
                  v-for="tag in tags.slice(0, tagsToShow)"
                  class="catalog__tag"
                  :key="tag.val"
                  :label="tag.label"
                />
              </div>

              <show-all @click.native="showAll('tagsToShow', tags.length)" label="Смотреть все" />
            </template>
          </drop-items>
        </div>
        
        <div class="catalog-filters-popup__buttons">
          <main-button class="popup-btn" color="primary" label="подобрать" size="xl" />
          <span class="reset text-size-16 text-color-gray">Сбросить фильтры</span>
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
              <drop-items class="catalog__drop" title="Теги">
                <template v-slot:drop-items>
                  <div class="catalog__tags">
                    <g-tag 
                      v-for="tag in tags.slice(0, tagsToShow)" 
                      :key="tag.val"
                      class="catalog__tag"
                      :label="tag.label" 
                    />
                  </div>

                  <show-all @click.native="showAll('tagsToShow', tags.length)" label="Смотреть все" />
                </template>
              </drop-items>

            </section>
          </b-col>

          <!--  Catalog items adapted = true --> 
          <b-col xl="9" lg="9">
            <b-row class="catalog__row">
              <b-col class="catalog__card" xl="4" lg="4" md="4" sm="6">
                <game-card adaptive-sm />
              </b-col>
              <b-col class="catalog__card" xl="4" lg="4" md="4" sm="6">
                <game-card adaptive-sm />
              </b-col>
              <b-col class="catalog__card" xl="4" lg="4" md="4" sm="6">
                <game-card adaptive-sm />
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
export default {
  name: 'Catalog',
  components: { GPagination, GTag, MainButton, GameCard, ShowAll, GCheckBox, DropItems, BreadCrumb },
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
      margin-top: 24px    
      cursor: pointer
    .popup-btn
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
      font-size: 16px
      line-height: 20px
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
.g-input
  position: relative
  &__right-label
    letter-spacing: -0.4px
    color: $gray
    font-weight: 500
    font-size: 14px
    line-height: 20px
    position: absolute
    right: 7px
    top: 8px
  &__input
    padding: 8px 23px 8px 12px
    width: 100%
    background: dark-blue(0.2)
    color: white(1)
    border-radius: 4px
    font-weight: 500
    font-size: 14px
    line-height: 20px
.catalog-filters
  &__show-all
    +lg
      display: none
  &__input
    width: calc(50% - 11px)
  &__range-inputs
    display: flex
    align-items: center
    justify-content: space-between
.g-range-slider
  margin-bottom: 24px
  .vue-slider-dot
    width: 16px
    height: 16px
    background: dark-blue(1)
    border-radius: 50%
    &-tooltip
      top: 0
    &-handle
      width: 16px
      height: 16px
      background: dark-blue(1)
  &__tooltip
    font-weight: 500
    font-size: 14px
    line-height: 20px
    letter-spacing: -0.4px
    color: white(1)
.catalog
  padding: 40px 0 48px
  +lg
    padding-top: 16px
  &__pagination
    margin-top: 40px
    +lg
      margin-top: 32px
  &__show-more
    padding: 14px 48px
    background: rgba(255, 255, 255, 0.04)
    width: 100%
    border-radius: 8px
    display: flex
    align-items: center
    justify-content: center
    color: white(1)
    text-transform: uppercase
    font-weight: 500
    font-size: 16px
    line-height: 22px
    transition: all 0.1s
    &:hover 
      background: rgba(255, 255, 255, 0.08)
    +sm
      margin-top: 12px
  &__drop
    &:not(:last-child)
      margin-bottom: 40px
  &__tags
    display: flex
    flex-wrap: wrap
    margin-top: 8px
    margin-bottom: 8px
  &__tag
    margin-right: 6px
    margin-bottom: 6px
  &__price
    padding-top: 20px
  &__category-filter
    &:not(:last-child)
      margin-bottom: 16px
    &:first-child
      padding-top: 20px
      +lg
        padding-top: 12px
    &:last-child
      +lg
        padding-bottom: 12px
  &__row
    +sm
      justify-content: space-between
      margin: 0
  &__card
    margin-bottom: 40px
    +sm
      width: calc(50% - 6px)
      padding: 0
      margin-bottom: 24px
  &__filter-group
    &:not(:last-child)
      margin-bottom: 40px
.catalog-top-section
  padding: 41px 0 0
  &__column
    display: flex
    flex-direction: column
    justify-content: flex-end
  &__filters
    display: none
    color: white(1)
    cursor: pointer
    font-size: 25px
    margin-left: auto
    margin-bottom: 18px
    +lg
      display: block
  &__sort
    cursor: pointer
    display: flex
    align-items: center
    color: white(1)
    span
      color: inherit
      margin-right: 12px
      letter-spacing: -0.4px
  &__block
    display: flex
    align-items: baseline
    +lg
      flex-direction: column
    span
      margin-left: 16px
      letter-spacing: -0.4px
      +lg
        margin-left: 0
        margin-top: 18px
  &__title
    display: flex
    align-items: center
    justify-content: space-between
    margin-top: 13px
  &__content
    padding-bottom: 16px
    border-bottom: 1px solid white(0.15)
    +lg
      padding-bottom: 9px
</style>

<template>
    <div>

        <!--  Popup filters  adapted = true -->
        <g-catalog-filters-popup />

        <!--  Catalog top section  adapted = true -->
        <section class="catalog-top-section">
            <b-container>
                <div class="catalog-top-section__content">
                    <bread-crumb/>

                    <g-catalog-section-header
                        title="Игры"
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
                    <b-col xl="3" lg="3" class="d-xl-block d-lg-block d-md-none d-sm-none d-none">
                        <section class="catalog-filters">

                            <!--  Price filter  -->
                            <drop-items title="Цена" class="catalog__drop">
                                <template v-slot:drop-items>
                                    <div class="catalog__price">
                                        <vue-range-slider
                                            v-if="filters !== null"
                                            class="g-range-slider"
                                            v-model="priceRange"
                                            :tooltip="'always'"
                                            :min="filters.price.minPrice"
                                            :max="filters.price.maxPrice"
                                            :height="1"
                                            :contained="true"
                                            :process-style="{ backgroundColor: 'rgba(100, 62, 255, 1)' }"
                                        >
                                            <template v-slot:tooltip="{ value, focus }">
                                                <div :class="['g-range-slider__tooltip', { focus }]">{{ priceRange[1]
                                                    }}
                                                </div>
                                            </template>
                                        </vue-range-slider>
                                    </div>

                                    <div class="catalog-filters__range-inputs">
                                        <div class="catalog-filters__input g-input">
                                            <input 
                                                v-model="priceRange[0]" 
                                                type="text"
                                                class="input-reboot g-input__input"
                                            >
                                            <span class="g-input__right-label">₽</span>
                                        </div>

                                        <span class="text-color-gray text-weight-600 text-size-14">-</span>

                                        <div class="catalog-filters__input g-input">
                                            <input 
                                                v-model="priceRange[1]" 
                                                type="text"
                                                class="input-reboot g-input__input"
                                            >
                                            <span class="g-input__right-label">₽</span>
                                        </div>
                                    </div>
                                </template>
                            </drop-items>

                            <!-- Category filter -->
                            <drop-items 
                                class="catalog__drop" 
                                title="Категории"
                                v-if="filters !== null"
                            >
                                <template v-slot:drop-items>
                                    <g-check-box
                                        v-for="item in filters.categories.slice(0, categoriesToShow)"
                                        :label="item.name"
                                        :val="item.id"
                                        :count="25"
                                        :key="item.id"
                                        v-model="checkedCategories"
                                        class="catalog__category-filter"
                                    />

                                    <show-all 
                                        @click.native="showAll('categoriesToShow', filters.categories.length)"
                                        label="Смотреть все"
                                    />
                                </template>
                            </drop-items>

                            <!-- Platforms filter -->
                            <drop-items 
                                class="catalog__drop" 
                                title="Платформы"
                                v-if="filters !== null"
                            >
                                <template v-slot:drop-items>
                                    <g-check-box
                                        v-for="item in filters.platforms"
                                        :label="item.name"
                                        :val="item.id"
                                        :count="25"
                                        :key="item.id"
                                        v-model="checkedCategories"
                                        class="catalog__category-filter"
                                    />
                                </template>
                            </drop-items>

                            <!-- Genres filter -->
                            <drop-items
                                class="catalog__drop"
                                title="Жанры"
                                v-if="filters !== null"
                            >
                                <template v-slot:drop-items>
                                    <g-check-box
                                        v-for="item in filters.genres.slice(0, genresToShow)"
                                        :label="item.name"
                                        :val="item.id"
                                        :count="25"
                                        :key="item.id"
                                        v-model="checkedCategories"
                                        class="catalog__category-filter"
                                    />

                                    <show-all
                                        @click.native="showAll('genresToShow', filters.genres.length)"
                                        label="Смотреть все"
                                    />
                                </template>
                            </drop-items>

                            <!-- Services filter -->
                            <drop-items
                                class="catalog__drop"
                                title="Сервисы"
                                v-if="filters !== null"
                            >
                                <template v-slot:drop-items>
                                    <g-check-box
                                        v-for="item in filters.services"
                                        :label="item.name"
                                        :val="item.id"
                                        :count="25"
                                        :key="item.id"
                                        v-model="checkedCategories"
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
                        <b-row 
                            class="catalog__row"
                            v-if="items !== null"
                        >
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
                                    adaptive-sm
                                />
                            </b-col>
                        </b-row>

                        <button class="button-reboot catalog__show-more">Показать больше</button>

                        <g-pagination 
                            v-if="meta !== null"
                            class="catalog__pagination"
                            @onNext="next"
                            :total-pages="meta.last_page"
                        />
                    </b-col>
                </b-row>
            </b-container>
        </section>

    </div>
</template>

<script>
    import BreadCrumb            from '~/components/BreadCrumb'
    import DropItems             from '~/components/DropItems'
    import GCheckBox             from '~/components/form-elements/GCheckbox'
    import icons                 from '~/mixins/icons'
    import ShowAll               from '~/components/buttons/MainLink'
    import GameCard              from '~/components/cards/GameCard'
    import { mapState }          from 'vuex'
    import MainButton            from '~/components/buttons/MainButton'
    import GTag                  from '~/components/Tag'
    import GPagination           from '~/components/Pagination'
    import GCatalogSectionHeader from '~/components/catalog/CatalogSectionHeader'
    import GCatalogFiltersPopup  from '~/components/popups/CatalogFiltersPopup'

    export default {
        components: {
            GCatalogFiltersPopup,
            GCatalogSectionHeader,
            GPagination,
            GTag,
            MainButton,
            GameCard,
            ShowAll,
            GCheckBox,
            DropItems,
            BreadCrumb
        },
        mixins: [icons],
        layout: 'default',
        async mounted () {
            try {
                await this.$store.dispatch('catalog/getCatalogGames')
                await this.$store.dispatch('catalog/getCatalogGamesFilters')
                await this.$router.push({ path: '/catalog', query: { page: this.meta.current_page } })
                console.log('load')
                this.priceRange[0] = this.filters.price.minPrice
                this.priceRange[1] = this.filters.price.maxPrice
            } catch (e) {
                console.log(e)
            }
        },
        computed: {
            ...mapState ({
                windowSize: state => state.common.windowSize,
                items: state => state.catalog.items,
                meta: state => state.catalog.meta,
                filters: state => state.catalog.filters
            })
        },
        data: () => {
            return {
                showPopup: false,
                priceRange: [0, 0],
                checkedCategories: [],
                categoriesToShow: 2,
                genresToShow: 5,
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
                ]
            }
        },
        methods: {
            showAll (whatToShow, count) {
                this[whatToShow] = count
            },
            next() {
                console.log (1111)
            }
        }
    }
</script>

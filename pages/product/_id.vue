<template>
  <div>
    <b-container>
      <bread-crumb class="g-product__breadcrumbs" :links="breadCrumbs" />
    </b-container>

    <!-- Overview game section adapted = true   -->
    <section
      class="g-product-overview"
      v-if="item !== null"
    >
      <b-container>
        <div class="g-product-overview__main">
          <div class="g-product-overview__image">
            <rating
              class="g-product-overview__rating"
              :value="Number(item.metacritic)"
              v-if="item.metacritic !== null"
            />
            <img :src="item.headerImage" alt="" />
          </div>

          <div class="g-product-overview__info">
            <h1 class="title">{{ item.name }}</h1>
            <p class="text text-color-gray text-size-16 text-weight-400">
              {{ item.shortDescription }}
            </p>

            <div class="g-product-overview__wrapper">
              <div class="price">
                <span class="current text-h1"
                  >{{
                    item.itemPrice.new === null
                      ? item.itemPrice.old
                      : item.itemPrice.new
                  }}
                  ₽</span
                >
                <g-price
                  :show-current-price="false"
                  :sale="Number(item.itemPrice.sale)"
                  :new-price="Number(item.itemPrice.new)"
                  :old-price="Number(item.itemPrice.old)"
                />
              </div>

              <nuxt-link :to="`/seller/${item.sellerId}`">
                <avatar
                  :caption="item.sellerName + ' ' + item.sellerSurname"
                  :nickname="item.sellerNickname"
                  :image="item.sellerAvatar"
                  v-if="item.sellerNickname !== null"
                />
              </nuxt-link>
            </div>

            <div class="g-product-overview__buttons">
              <main-button
                full-width
                size="xl"
                color="primary"
                label="купить сейчас"
                @click.native.prevent="addToCart"
                :disabled="getItemByKey(item.keyId) !== undefined"
              />
              <main-button
                full-width
                size="xl"
                color="secondary"
                label="Другие предложения"
              />
            </div>
          </div>
        </div>
      </b-container>
    </section>

    <!-- About game section adapted = true -->
    <section class="g-product-about" v-if="item !== null">
      <b-container>
        <div class="g-product-section">
          <div class="g-product-title">
            <h4>Об игре Hitman 3</h4>
          </div>

          <div class="g-product-block">
            <div class="g-product-info">
              <div class="g-product-info__line">
                <g-info-block
                  class="g-product__brick"
                  title="Разработчик"
                  :text="item.developer"
                />
                <g-info-block
                  class="g-product__brick"
                  title="Издатель"
                  :text="item.publisher"
                />
                <g-info-block
                  class="g-product__brick"
                  title="Дата выхода"
                  :text="item.releaseDate"
                />
              </div>

              <div class="g-product-info__line">
                <g-info-block
                  class="g-product__brick"
                  title="Теги"
                  text="Экшен, Одиночная игра, Стелс"
                />
                <g-info-block
                  class="g-product__brick"
                  title="Рейтинг"
                  :text="item.metacritic"
                />
                <g-info-block
                  class="g-product__brick"
                  title="Платформа"
                  :text="item.platforms"
                />
              </div>
            </div>
          </div>
        </div>
      </b-container>
    </section>

    <!-- Game description section adapted = true TODO Add video -->
    <section
      class="g-product-description"
      v-if="item !== null"
    >
      <b-container>
        <div class="g-product-section">
          <div class="g-product-title">
            <h4>Описание игры</h4>
          </div>

          <div class="g-product-block">
            <div class="text text-color-gray text-size-16">
              {{ item.detailedDescription.slice(0, maxText) }}
            </div>

            <div class="g-product__video"></div>

            <main-button
              size="xl"
              color="gray"
              label="Показать больше"
              @click.native="showMore"
              full-width
            />
          </div>
        </div>
      </b-container>
    </section>

    <!-- System requirements section adapted = true -->
    <section class="g-product-requirements" v-if="item !== null">
      <b-container>
        <div class="g-product-section">
          <div class="g-product-title">
            <h4>Системные требования</h4>
          </div>

          <div class="g-product-block" v-html="item.pcRequirements">
            <g-system-table />
          </div>
        </div>
      </b-container>
    </section>

    <!-- Comments section adapted = true -->
    <section class="g-product-reviews" v-if="comments !== null">
      <b-container>
        <div class="g-product-section g-product-section_block">
          <section-header size="xl" title="Отзывы" link-label="Все отзывы" />

          <g-product-comment-slider :data="comments" />
        </div>
      </b-container>
    </section>

    <!-- Offers section adapted = true -->
    <section
      class="g-product-offers"
      v-if="proposals !== null && proposals.length > 0"
    >
      <b-container>
        <div class="g-product-section g-product-section_block">
          <section-header size="xl" title="Другие предложения" />

          <div class="g-product-proposals">
            <g-proposal-card
              v-for="item in proposals"
              :key="item.keyId"
              :nickname="item.sellerNickname"
              :name="item.sellerName"
              :surname="item.sellerSurname"
              :avatar="item.sellerAvatar"
              :seller-id="item.sellerId"
              :likes="Number(item.likes)"
              :dislikes="Number(item.dislikes)"
              :sale="Number(item.itemPrice.sale)"
              :old-price="Number(item.itemPrice.old)"
              :new-price="Number(item.itemPrice.new)"
              class="g-product__proposal"
            />
          </div>

          <div class="g-slider g-product__slider">
            <g-proposal-slider :data="proposals" />
          </div>
        </div>
      </b-container>
    </section>
  </div>
</template>

<script>
import BreadCrumb from '~/components/BreadCrumb'
import Rating                from '~/components/cards/Rating'
import GPrice                from '~/components/GPrice'
import MainButton            from '~/components/buttons/MainButton'
import Avatar                from '~/components/Avatar'
import GInfoBlock            from '~/components/GInfoBlock'
import GSystemTable          from '~/components/tables/GSystemTable'
import SectionHeader         from '~/components/SectionHeader'
import GProposalCard         from '~/components/cards/ProposalCard'
import GProposalSlider       from '~/components/slider/ProposalSlider'
import GCommentSlider           from '~/components/slider/CommentSlider'
import { mapGetters, mapState } from 'vuex'
import GProductCommentSlider    from '~/components/slider/ProductCommentSlider'

export default {
  name: 'Product',
  components: {
    GProductCommentSlider,
    GCommentSlider,
    GProposalSlider,
    GProposalCard,
    SectionHeader,
    GSystemTable,
    GInfoBlock,
    Avatar,
    MainButton,
    GPrice,
    Rating,
    BreadCrumb,
  },
  layout: 'default',
  async mounted() {
    const itemId = this.$route.params.id
    try {
      await this.$store.dispatch('items/getItemById', itemId)
      await this.$store.dispatch('comments/getComments')
      this.breadCrumbs.push({
        to: '/product/' + itemId,
        label: this.item.name,
      })

      await this.$store.dispatch('items/getItemProposals', itemId)
    } catch (e) {
      this.$bvToast.toast('Ошибка загрузки страницы!', {
        title: 'Что-то пошло не так(',
        variant: 'danger',
        solid: true,
        appendToast: true,
      })
    }
  },
  methods: {
    showMore () {
      this.maxText = this.item.detailedDescription.length
    },
    async addToCart () {
      await this.$store.dispatch('cart/addItem')
    }
  },
  computed: {
    ...mapState({
      item: (state) => state.items.item,
      proposals: (state) => state.items.proposals,
      comments: (state) => state.comments.comments,
    }),
    ...mapGetters({
      getItemByKey: 'cart/getItemByKey',
    }),
  },
  data: () => {
    return {
      maxText: 250,
      breadCrumbs: [
        { to: '/', label: 'Главная' },
        { to: '/catalog', label: 'Игры' },
      ],
    }
  },
}
</script>

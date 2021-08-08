<template>
  <div>
    <b-container>
      <bread-crumb 
        class="g-product__breadcrumbs" 
        :links="breadCrumbs" 
      />
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
            <img 
              :src="item.headerImage" 
              alt=""
            >
          </div>

          <div class="g-product-overview__info">
            <h1 class="title">{{ item.name }}</h1>
            <p class="text text-color-gray text-size-16 text-weight-400">{{ item.detailedDescription.slice(0, 400) }}</p>

            <div class="g-product-overview__wrapper">
              <div class="price">
                <span class="current text-h1">{{ item.itemPrice.new === null ? item.itemPrice.old : item.itemPrice.new }}</span>
                <g-price 
                  :show-current-price="false" 
                  :sale="Number(item.itemPrice.sale)"
                  :new-price="Number(item.itemPrice.new)"
                  :old-price="Number(item.itemPrice.old)"
                />
              </div>
              
              <avatar 
                :caption="item.sellerName + ' ' + item.sellerSurname" 
                :nickname="item.sellerNickname"
                :image="item.sellerAvatar"
                v-if="item.sellerNickname !== null"
              />
            </div>

            <div class="g-product-overview__buttons">
              <main-button full-width size="xl" color="primary" label="купить сейчас" />
              <main-button full-width size="xl" color="secondary" label="Другие предложения" />
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
            <div class="text text-color-gray text-size-16">{{ item.detailedDescription.slice(0, 250) }}</div>
            
            <div class="g-product__video">
            </div>
            
            <main-button 
              size="xl" 
              color="gray" 
              label="Показать больше" 
              full-width 
            />
          </div>
        </div>
      </b-container>
    </section>

    <!-- System requirements section adapted = true -->
    <section 
      class="g-product-requirements"
      v-if="item !== null"
    >
      <b-container>
        <div class="g-product-section">
          <div class="g-product-title">
            <h4>Системные требования</h4>
          </div>

          <div class="g-product-block" v-html="item.pcRequirements">
            <g-system-table 
            />
          </div>
        </div>
      </b-container>
    </section>

    <!-- Comments section adapted = true -->
    <section class="g-product-reviews">
      <b-container>
        <div class="g-product-section g-product-section_block">
          <section-header size="xl" title="Отзывы" link-label="Все отзывы" />
          
          <g-comment-slider />
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
          <section-header size="xl" title="Другие предложения"/>
          
          <div
            class="g-product-proposals" 
          >
            <g-proposal-card 
              v-for="item in proposals"
              :key="item.keyId"
              :nickname="item.sellerNickname"
              :name="item.sellerName"
              :surname="item.sellerSurname"
              :avatar="item.sellerAvatar"
              :likes="Number(item.likes)"
              :dislikes="Number(item.dislikes)"
              :sale="Number(item.itemPrice.sale)"
              :old-price="Number(item.itemPrice.old)"
              :new-price="Number(item.itemPrice.new)"
              class="g-product__proposal" 
            />
          </div>
          
          <div class="g-slider g-product__slider">
            <g-proposal-slider
              :data="proposals"
            />
          </div>
        </div>
      </b-container>
    </section>
    
  </div>
</template>

<script>
import BreadCrumb from '~/components/BreadCrumb'
import Rating from '~/components/cards/Rating'
import GPrice from '~/components/GPrice'
import MainButton from '~/components/buttons/MainButton'
import Avatar from '~/components/Avatar'
import GInfoBlock from '~/components/GInfoBlock'
import GSystemTable from '~/components/tables/GSystemTable'
import SectionHeader from '~/components/SectionHeader'
import GProposalCard from '~/components/cards/ProposalCard'
import GProposalSlider from '~/components/slider/ProposalSlider'
import GCommentSlider from '~/components/slider/CommentSlider'
import {mapState} from 'vuex'
export default {
  name: 'Product',
  components: {
    GCommentSlider,
    GProposalSlider,
    GProposalCard, SectionHeader, GSystemTable, GInfoBlock, Avatar, MainButton, GPrice, Rating, BreadCrumb },
  layout: 'default',
  async mounted () {
    try {
      await this.$store.dispatch('items/getItemById', this.$route.params.id)
      this.breadCrumbs.push({
        to: '/product/' + this.$route.params.id,
        label: this.item.name
      })
      
      await this.$store.dispatch('items/getItemProposals', { itemId: this.$route.params.id, keyId: this.item.keyId })
    } catch (e) {
      
    }
  },
  computed: {
    ...mapState({
      item: state => state.items.item,
      proposals: state => state.items.proposals
    })
  },
  data: () => {
    return {
      breadCrumbs: [
        { to: '/', label: 'Главная' },
        { to: '/catalog', label: 'Игры' }
      ]
    }
  }
}
</script>

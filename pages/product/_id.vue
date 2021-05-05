<template>
  <div>
    <b-container>
      <bread-crumb class="g-product__breadcrumbs" :links="breadCrumbs" />
    </b-container>
    
    <!-- Overview game section adapted = true   -->
    <section class="g-product-overview">
      <b-container>
        <div class="g-product-overview__main">
          <div class="g-product-overview__image">
            <rating class="g-product-overview__rating" :value="2.3" />
            <img src="/images/product.jpg" alt="">
          </div>

          <div class="g-product-overview__info">
            <h1 class="title">HITMAN 3</h1>
            <p class="text text-color-gray text-size-16 text-weight-400">HITMAN™ 3 — восьмая часть легендарной серии Hitman и третий сезон HITMAN™, завершающий трилогию «World of Assassinations». Релиз игры состоялся 20 января 2021 года. Это первая часть во всей серии Hitman, которую IO Interactive издала самостоятельно.</p>

            <div class="g-product-overview__wrapper">
              <div class="price">
                <span class="current text-h1">1900</span>
                <g-price :show-current-price="false" />
              </div>
              
              <avatar caption="EXCELLENT SELLER" />
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
    <section class="g-product-about">
      <b-container>
        <div class="g-product-section">
          <div class="g-product-title">
            <h4>Об игре Hitman 3</h4>
          </div>
          
          <div class="g-product-block">
            <div class="g-product-info">
              <div class="g-product-info__line">
                <g-info-block class="g-product__brick" title="Разработчик" text="O Interactive A/S" />
                <g-info-block class="g-product__brick" title="Издатель" text="IO Interactive A/S" />
                <g-info-block class="g-product__brick" title="Дата выхода" text="22 декабря 2020 г." />
              </div>

              <div class="g-product-info__line">
                <g-info-block class="g-product__brick" title="Теги" text="Экшен, Одиночная игра, Стелс" />
                <g-info-block class="g-product__brick" title="Рейтинг" text="8,2" />
                <g-info-block class="g-product__brick" title="Платформа" text="Windows 7+" />
              </div>
              
            </div>
          </div>
        </div>
      </b-container>
    </section>

    <!-- Game description section adapted = true TODO Add video --> 
    <section class="g-product-description">
      <b-container>
        <div class="g-product-section">
          <div class="g-product-title">
            <h4>Описание игры</h4>
          </div>
          
          <div class="g-product-block">
            <div class="text text-color-gray text-size-16">В HITMAN 3 безжалостный профессионал Агент 47 возвращается ради самых важных контрактов в своей карьере, где каждое убийство меняет мир. Отправляйтесь в захватывающее приключение по «Миру наемных убийц» и узнайте, чем закончится история Агента 47. Смерть ждет.</div>
            
            <div class="g-product__video">
            </div>
            
            <main-button size="xl" color="gray" label="Показать больше" full-width />
          </div>
        </div>
      </b-container>
    </section>

    <!-- System requirements section adapted = true -->
    <section class="g-product-requirements">
      <b-container>
        <div class="g-product-section">
          <div class="g-product-title">
            <h4>Системные требования</h4>
          </div>

          <div class="g-product-block">
            <g-system-table />
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
    <section class="g-product-offers">
      <b-container>
        <div class="g-product-section g-product-section_block">
          <section-header size="xl" title="Другие предложения"/>
          
          <div class="g-product-proposals">
            <g-proposal-card class="g-product__proposal" />
            <g-proposal-card class="g-product__proposal" />
            <g-proposal-card class="g-product__proposal" />
          </div>
          
          <div class="g-slider g-product__slider">
            <g-proposal-slider />
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
export default {
  name: 'Product',
  components: {
    GCommentSlider,
    GProposalSlider,
    GProposalCard, SectionHeader, GSystemTable, GInfoBlock, Avatar, MainButton, GPrice, Rating, BreadCrumb },
  layout: 'default',
  data: () => {
    return {
      breadCrumbs: [
        { to: '/', label: 'Главная' },
        { to: '/catalog', label: 'Игры' },
        { to: '/product/25', label: 'Red Dead Online' }
      ]
    }
  }
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.g-product-overview
  padding-bottom: 60px
  &__main
    display: flex
    justify-content: space-between
    +md
      flex-direction: column
      background: rgba(40, 36, 57, 1)
      border-radius: 12px
  &__buttons
    .button
      padding: 14px 29px
      display: flex
    div
      max-width: 280px
      +md
        max-width: 100%
        width: 100%
      &:not(:last-child)
        margin-bottom: 12px
  &__wrapper
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: auto
    padding-bottom: 20px
    max-width: 80%
    +lg
      max-width: 100%
      flex-direction: column
      align-items: flex-start
    .price
      +lg
        margin-bottom: 32px
  &__info
    display: flex
    flex-direction: column
    justify-content: space-between
    width: calc(70% - 30px)
    +lg
      width: calc(50% - 15px)
    +md
      width: 100%
      padding: 24px 16px
    .current
      margin-bottom: 8px
      display: inline-block
      font-size: 32px
      line-height: 38px
      color: white(1)
      font-weight: 600
      +md
        margin-bottom: 14px
    .title
      margin-bottom: 20px
    .text
      padding-bottom: 20px
      margin-bottom: auto
      max-width: 80%
      +lg
        max-width: 100%
      +md
        font-size: 12px
        line-height: 18px
  &__rating
    position: absolute
    left: 0
    top: 20px
  &__image
    position: relative
    width: calc(30% - 30px)
    +lg
      width: calc(50% - 15px)
    +md
      height: 302px
      background-size: cover !important
      background: url("/images/product.jpg") no-repeat center -150px
      border-radius: 12px 12px 0 0
      width: 100%
    img
      border-radius: 12px
      width: 100%
      +xl
        width: 100%
      +md
        display: none
.g-product-section
  position: relative
  border-top: 1px solid rgba(154, 147, 170, 0.5)
  padding: 64px 0
  display: flex
  justify-content: space-between
  &_block
    display: block
  +lg
    display: block
  +md
    padding: 40px 0
.g-product-title
  width: calc(30% - 30px)
  +lg
    width: 100%
    margin-bottom: 24px
.g-product
  &__slider
    display: none
    +lg
      display: block
  &__proposal
    +lg
      display: none
    &:not(:last-child)
      margin-bottom: 12px
      +lg
        margin-bottom: 0
  &__video
    margin: 32px 0 40px
    +md
      margin: 32px 0 16px
  &__brick
    width: 30%
    +md
      width: 100% !important
    &:first-child
      width: 40%
    &:last-child
      width: 20%
    &:not(:last-child)
      +md
        margin-bottom: 32px
  &-info
    &__line
      display: flex
      align-items: flex-start
      flex-wrap: wrap
      justify-content: space-between
      +md
        flex-direction: column
      &:not(:last-child)
        margin-bottom: 40px
        +md
          margin-bottom: 32px
  &-block
    flex-wrap: wrap
    width: calc(70% - 30px)
    +lg
      width: 100%
    .text
      +md
        font-size: 12px
        line-height: 18px  
  &__breadcrumbs
    padding: 33px 0 40px
    +md
      padding: 25px 0
</style>

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
            <h1 class="title">DOPPLER</h1>
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
            <h4>О скине DOPPLER M89 Bayonet</h4>
          </div>

          <div class="g-product-block">
            <div class="g-product-info">
              <div class="g-product-info__line g-product-info__line_column">
                <g-info-block class="g-product__brick g-product__brick_w100" title="История появления" text="Штык-нож М9 | Волны Черная Жемчужина (M9 Bayonet | Doppler Black Pearl) был добавлен в игру 8 января 2015 года в рамках обновления Full Spectrum. Скин доступен во всех «Кислотных кейсах»." />
                <g-info-block class="g-product__brick g-product__brick_w100" title="Описание паттерна" text="Лезвие ножа и ограничитель покрыты металлической краской. На лезвии присутствует узор из полупрозрачных волнистых линий, напоминающих клубы дыма. Цветовая гамма включает в себя различные оттенки синего, фиолетового и малинового, образующих между собой градиентные переходы. Рукоять ножа не окрашена." />
                <g-info-block class="g-product__brick g-product__brick_w100" title="Дата выхода" text="22 декабря 2020 г." />
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
            <h4>DOPPLER M89 Bayonet</h4>
          </div>

          <div class="g-product-block">
            <div class="g-product-info">
              <div class="g-product-info__line g-product-info__line_column">
                <g-info-block class="g-product__brick g-product__brick_w100" title="История появления" text="Штык-нож М9 | Волны Черная Жемчужина (M9 Bayonet | Doppler Black Pearl) был добавлен в игру 8 января 2015 года в рамках обновления Full Spectrum. Скин доступен во всех «Кислотных кейсах»." />
                <g-info-block class="g-product__brick g-product__brick_w100" title="Описание паттерна" text="Лезвие ножа и ограничитель покрыты металлической краской. На лезвии присутствует узор из полупрозрачных волнистых линий, напоминающих клубы дыма. Цветовая гамма включает в себя различные оттенки синего, фиолетового и малинового, образующих между собой градиентные переходы. Рукоять ножа не окрашена." />
                <g-info-block class="g-product__brick g-product__brick_w100" title="Дата выхода" text="22 декабря 2020 г." />
              </div>
            </div>
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
  name: 'SkinPage',
  components: {
    GCommentSlider,
    GProposalSlider,
    GProposalCard, SectionHeader, GSystemTable, GInfoBlock, Avatar, MainButton, GPrice, Rating, BreadCrumb },
  layout: 'default',
  data: () => {
    return {
      breadCrumbs: [
        { to: '/', label: 'Главная' },
        { to: '/catalog', label: 'Скины' },
        { to: '/skin/25', label: 'DOPPLER, M89 Bayonet' }
      ]
    }
  }    
}
</script>

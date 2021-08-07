<template>
  <div class="g-proposal-card_mobile">
    <div class="g-proposal-card">
      <div class="g-proposal-card__avatar">
        <div class="g-proposal-card__bg">
          <div class="g-proposal-card__image">
            <img 
              :src="avatar" 
              alt=""
              v-if="avatar !== null"
            >
            <span v-else>{{ name.slice(0, 1) }}{{ surname.slice(0, 1) }}</span>
          </div>
        </div>

        <div class="g-proposal-card__text">
          <p class="text-color-white text-size-16 text-weight-600">{{ name }} {{ surname }}</p>
          <p class="g-proposal-card__caption text-uppercase">{{ nickname }}</p>
          <p class="g-proposal-card__caption">{{ (likes + dislikes) === 0 ? 'Нет отзывов' : (likes / (likes + dislikes).toFixed(2)) +  ' положительных отзывов'}}</p>
        </div>
      </div>

      <div class="g-proposal-card__info">
        <g-price 
          class="g-proposal-card__price" 
          :show-current-price="false"
          :sale="sale"
          :old-price="oldPrice"
          :new-price="newPrice"
        />

        <span class="g-proposal-card__new">{{ newPrice === 0 ? oldPrice : newPrice }} ₽</span>

        <main-button class="g-proposal-card__btn" full-width size="xl" color="primary" label="в корзину" />
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from '~/components/Avatar'
import GPrice from "~/components/GPrice";
import MainButton from "~/components/buttons/MainButton";
export default {
  name: 'GProposalCard',
  components: {MainButton, GPrice, Avatar},
  props: {
    nickname: {
      type: String,
      default: () => null
    },
    name: {
      type: String,
      default: () => null
    },
    surname: {
      type: String,
      default: () => null
    },
    likes: {
      type: Number,
      default: () => 0
    },
    dislikes: {
      type: Number,
      default: () => 0
    },
    oldPrice: {
      type: Number,
      default: () => 0
    },
    newPrice: {
      type: Number,
      default: () => 0
    },
    sale: {
      type: Number,
      default: () => 0
    },
    avatar: {
      type: String,
      default: () => null
    }
  }
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'  
.g-proposal-card
  padding: 20px
  background: rgba(100, 62, 255, 0.2)
  border-radius: 10px
  display: flex
  align-items: center
  justify-content: space-between
  cursor: pointer
  transition: all 0.1s
  &:hover
    background: rgba(100, 62, 255, 0.5)
  +lg
    display: block
    width: 270px
    padding: 16px
  &_mobile
    padding-right: 12px
  &__new
    margin-right: 55px
    font-weight: 600
    color: white(1)
    font-size: 24px
    line-height: 28px
    flex-shrink: 0
    +lg
      order: -1
  &__info
    display: flex
    align-items: center
    +lg
      flex-direction: column
      align-items: flex-start
  &__price
    margin-right: 48px
    +lg
      margin: 8px 0 0
  &__btn
    +lg
      margin-top: 24px
      width: 100%
  &__text
    p
      &:not(:last-child)
        margin-bottom: 4px
  &__caption
    font-size: 12px
    line-height: 18px
    color: $gray
    +lg
      line-height: 16px
  &__avatar
    display: flex
    align-items: center
    flex-shrink: 0
    +lg
      margin-bottom: 12px
  &__bg
    width: 70px
    height: 70px
    border-radius: 50%
    background: rgba(39, 126, 255, 0.2)
    display: flex
    align-items: center
    justify-content: center
    flex-shrink: 0
    margin-right: 20px
    +lg
      margin-right: 16px
  &__image
    width: 60px
    height: 60px
    border-radius: 50%
    display: flex
    align-items: center
    justify-content: center
    background: rgba(39, 126, 255)
    img
      width: 100%
      height: 100%
      flex-shrink: 0
      border-radius: 50%
    span
      font-size: 28px
      font-weight: 600
      line-height: 24px
      color: white(1)
</style>


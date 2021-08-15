<template>
  <div>
    <div class="g-seller-game-card">
      <rating
        class="g-seller-game-card__rating"
        :value="rating"
        v-if="rating !== null && rating !== 0"
      />
      <img :src="image" alt="" class="g-seller-game-card__img" />

      <span class="g-seller-game-card__name">{{ name }}</span>
    </div>
  </div>
</template>

<script>
import Rating from '~/components/cards/Rating'
export default {
  name: 'GSellerGameCard',
  components: { Rating },
  props: {
    name: {
      type: String,
      default: () => 'Name',
    },
    image: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: () => null,
    },
  },
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.g-seller-game-card
    display: flex
    flex-direction: column
    align-items: center
    position: relative
    width: 270px !important
    margin-right: 17px
    cursor: pointer
    &__rating
        position: absolute
        top: 14px
        left: 0
    &__name
        font-weight: 600
        color: $white
        font-size: 20px
        line-height: 28px
    &__img
        border-radius: 12px
        margin-bottom: 16px
        width: 100%
</style>

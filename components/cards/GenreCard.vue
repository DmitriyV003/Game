<template>
  <div class="genre-card">
    <div class="genre-card__img">
      <img :src="image" alt="">
    </div>
    <div class="genre-card__title">{{ name }}</div>
  </div>
</template>

<script>
export default {
  name: 'GenreCard',
  props: {
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.genre-card
  padding: 20px 12px 22px 12px
  background: #282439
  border-radius: 12px
  width: 173px !important
  &__title
    font-weight: 600
    text-transform: capitalize
    text-align: center
    font-size: 16px
    line-height: 20px
    color: white(1)
  &__img
    width: 149px
    height: 149px
    border-radius: 50%
    border: 5px solid dark-blue(0.3)
    margin-bottom: 16px
    margin-left: auto
    margin-right: auto
    img
      width: 100%
      height: 100%
      border-radius: 50%
</style>

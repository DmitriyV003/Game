<template>
  <div class="g-game-news__wrapper">
    <div class="g-game-news">
      <img class="g-game-news__image" src="/images/news-1.png" alt="">

      <div class="g-game-news__block">
        <p class="g-game-news__title">Rocket League</p>
        <div>
          <p class="g-game-news__text">2 сезон продлен.</p>
          <p class="g-game-news__text">Призовые награды дождалис...</p>
        </div>
        <show-all label="Читать " />
      </div>
    </div>
  </div>
</template>

<script>
import ShowAll from "~/components/buttons/MainLink";
export default {
  name: 'GGameNews',
  components: {ShowAll}
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.g-game-news
  background: #282439
  border-radius: 12px
  width: 270px
  &__wrapper
    margin-right: 10px
    +lg
      margin-right: 16px
  &__text
    font-size: 14px
    color: $gray
    letter-spacing: -0.4px
    line-height: 20px
    &:not(:last-child)
      margin-bottom: 16px
  &__title
    margin-bottom: 8px
    font-weight: 600
    color: $white
    text-transform: uppercase
    font-size: 16px
    line-height: 20px
  &__block
    padding: 12px 16px
  &__image
    display: block
    width: 100%
    border-radius: 12px 12px 0 0
</style>

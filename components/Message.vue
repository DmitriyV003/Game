<template>
  <div class="g-message">
    <img class="g-message__img" src="" alt="">
    
    <div class="g-message__block">
      <p class="g-message__name">Zevrox</p>
      <p class="g-message__text">Хороший результат для Топ10</p>
      
      <div class="g-message__bottom">
        <span class="g-message__date">12.10.2020, 18:43</span>
        <show-all :icon="false" label="Ответить" />
      </div>
    </div>
  </div>
</template>

<script>
import ShowAll from "~/components/buttons/MainLink";
export default {
  name: 'GMessage',
  components: {ShowAll}
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.g-message
  display: flex
  align-items: flex-start
  margin-bottom: 12px
  &:not(:last-child)
    .g-message__block
      border-bottom: 1px solid rgba(154, 147, 170, 0.3)
      padding-bottom: 16px
  &__name
    font-weight: 600
    color: $white
    text-transform: uppercase
    font-size: 16px
    line-height: 20px
  &__text
    margin-top: 8px
    font-size: 14px
    letter-spacing: -0.4px
    color: white(0.8)
    line-height: 20px
  &__date
    margin-right: 16px
    font-size: 12px
    line-height: 18px
    color: $gray
  &__bottom
    margin-top: 8px
    display: flex
    align-items: center
  &__block
    width: 100%
  &__img
    width: 40px
    height: 40px
    border-radius: 50%
    margin-right: 16px
    flex-shrink: 0
</style>

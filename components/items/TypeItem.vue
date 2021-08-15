<template>
  <div class="g-type-item">
    <div class="g-type-item__img">
      <img src="/images/type-1.png" alt="" class="g-type-item__img" />
    </div>

    <div class="g-type-item__block">
      <p class="g-type-item__title">Команда разработчиков</p>
      <p class="g-type-item__text">
        и желаете сопроводить раздачей ключей анонс вашей игры?
      </p>
      <main-button color="primary" label="Анонсировать" size="xl" />
    </div>
  </div>
</template>

<script>
import MainButton from '~/components/buttons/MainButton'
export default {
  name: 'GTypeItem',
  components: { MainButton },
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.g-type-item
  display: flex
  flex-direction: column
  background: #282439
  border-radius: 12px
  overflow: hidden
  cursor: pointer
  &:hover
    .g-type-item__img
      &::after
        opacity: 0
  +lg
    margin-bottom: 16px
  .button
    +md
      width: 100%
  &__text
    color: $gray
    margin-bottom: 24px
    font-size: 16px
    line-height: 24px
  &__title
    color: $white
    font-size: 24px
    line-height: 28px
    font-weight: 600
    margin-bottom: 16px
    +md
      font-size: 20px
      margin-bottom: 12px
  &__block
    padding: 20px
    +md
      padding: 16px
  &__img
    position: relative
    &::after
      content: ''
      width: 100%
      height: 100%
      position: absolute
      top: 0
      left: 0
      background: linear-gradient(194.07deg, rgba(0, 0, 0, 0.85) -11.89%, rgba(0, 0, 0, 0.56) 116.67%)
      border-radius: 0 12px 12px 0
    img
      width: 100%
      border-radius: 12px 12px 0   0
</style>

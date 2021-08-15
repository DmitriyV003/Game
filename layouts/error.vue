<template>
  <div class="error-page__wrapper">
    <b-container>
      <div class="error-page">
        <div class="error-page__block">
          <h1 class="error-page__title">404</h1>
          <p class="error-page__caption">Что-то пошло не так...</p>
          <p class="error-page__caption_sm">Страница не найдена.</p>

          <main-button
            color="primary"
            size="xl"
            tag="a"
            to="/"
            label="на главную"
          />
        </div>

        <div class="error-page__img">
          <img src="/images/error.png" alt="" />
        </div>
      </div>
    </b-container>
  </div>
</template>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.error-page
  &__caption
    font-weight: 600
    color: $white
    font-size: 20px
    line-height: 28px
    padding-bottom: 16px
    margin-bottom: 16px
    border-bottom: solid 1px rgba(154, 147, 170, 0.5)
    max-width: 543px
    &_sm
      margin-bottom: 32px
      font-weight: 600
      font-size: 12px
      line-height: 16px
      color: $gray
  &__title
    margin-bottom: 8px
    font-weight: 600
    color: $white
    font-size: 60px
    line-height: 72px
  &__block
    padding-top: 110px
    display: flex
    flex-direction: column
  &__img
    position: absolute
    right: 0
    top: 0
    +md
      opacity: 0.15
      height: 100%
    +sm
      right: -250px
    img
      +md
        height: 100%
  &__wrapper
    position: relative
    min-height: 565px
    overflow: hidden
    margin-bottom: -32px
    +md
      min-height: initial
      height: 502px
</style>
<script>
import MainButton from '~/components/buttons/MainButton'
export default {
  components: { MainButton },
}
</script>

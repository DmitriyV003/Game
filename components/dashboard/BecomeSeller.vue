<template>
  <div class="g-become-seller">
    <div class="g-become-seller__block">
      <h2 class="g-become-seller__title">Выгодное сотрудничество</h2>
      <p class="g-become-seller__text">
        Вы обладатель игровых ключей или скинов? Будем рады видеть вас в
        качестве продавца, на нашем портале!
      </p>
      <main-button
        class="g-become-seller__btn"
        color="white"
        size="xl"
        label="Стать продавцом"
      />
    </div>
    <img src="/images/seller.png" class="g-become-seller__image" alt="" />
  </div>
</template>

<script>
import MainButton from '~/components/buttons/MainButton'
export default {
  name: 'GBecomeSeller',
  components: { MainButton },
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.g-become-seller
  background: #643EFF
  padding: 40px
  position: relative
  border-radius: 12px
  display: flex
  min-height: 340px
  +md
    flex-direction: column
    padding: 24px 16px
  &__btn
    margin-top: auto
    +md
      margin-top: 32px
      .button
        width: 100%
  &__image
    position: absolute
    right: 0
    top: 0
    max-height: 340px
    height: 100%
    +md
      max-height: initial
      position: initial
  &__block
    width: 50%
    display: flex
    flex-direction: column
    justify-content: space-between
    +md
      width: 100%
  &__text
    font-size: 16px
    color: white(0.8)
    line-height: 24px
  &__title
    margin-bottom: 16px
    font-size: 32px
    line-height: 38px
    +md
      margin-bottom: 24px
      font-size: 24px
      line-height: 32px
</style>

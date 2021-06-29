<template>
  <div class="g-seller-comment">
    <div class="g-seller-comment__top">
      <avatar name="Hanna" />
      <span class="g-seller-comment__date">22 января</span>
    </div>
    <p class="g-seller-comment__text">Шикарная администрация и сервис в целом. Наиприятнейшее сотрудничество! 10/10</p>
  </div>
</template>

<script>
import Avatar from "~/components/Avatar";
export default {
  name: 'GSellerComment',
  components: {Avatar}
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'  
.g-seller-comment
  padding: 20px
  background: #282439
  border-radius: 12px
  margin-bottom: 20px
  +md
    margin-bottom: 8px
  &__date
    font-size: 14px
    letter-spacing: -0.4px
    line-height: 20px
    color: $gray
  &__text
    font-size: 16px
    color: white(0.8)
    line-height: 24px
    margin-top: 20px
  &__top
    padding-bottom: 12px
    display: flex
    align-items: center
    justify-content: space-between
    border-bottom: 1px solid rgba(154, 147, 170, 0.2)
</style>

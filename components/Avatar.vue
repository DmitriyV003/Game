<template>
  <div class="g-avatar">
    <div class="g-avatar__image">
      <img src="" alt="">
    </div>
    <span class="text-white text-normal text-weight-600">Zeyrox</span>
  </div>
</template>

<script>
export default {
  name: 'Avatar'
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.g-avatar
  display: flex
  align-items: center
  &__image
    width: 43px
    height: 43px
    border: 3px solid dark-blue(0.15)
    margin-right: 13px
    border-radius: 50%
    img
      width: 100%
      height: 100%
      border-radius: 50%
</style>

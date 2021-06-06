<template>
  <div class="g-user-avatar">
    <img src="/images/avatar.png" alt="" class="g-user-avatar__avatar">

    <input class="g-user-avatar__file" type="file" id="file">
    <label class="g-user-avatar__label" for="file">Загрузить фото</label>
  </div>
</template>

<script>
export default {
  name: 'GUserAvatar'
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.g-user-avatar
  display: flex
  flex-shrink: 0
  flex-direction: column
  justify-content: center
  margin-right: 24px
  +sm
    flex-direction: row
    align-items: flex-start
    justify-content: flex-start
    margin-right: 0
  &__file
    display: none
  &__label
    letter-spacing: -0.4px
    color: #643EFF
    font-size: 14px
    cursor: pointer
    line-height: 20px
    text-align: center
    padding: 0
    margin: 0
    &:hover
      color: rgba(100, 62, 255, 0.8)
  &__avatar
    width: 200px
    height: 200px
    border-radius: 50%
    margin-bottom: 12px
    flex-shrink: 0  
</style>

<template>
  <div class="balance">
    <div class="balance__main">
      <div class="balance__icon">
        <img src="/images/wallet.svg" alt="">
      </div>
      <span class="balance__label">$ {{ balance }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Balance',
  props: {
    balance: {
      type: Number
    }
  }
}
</script>

<style lang="sass">
  @import 'theme/_vars'
  .balance
    &__main
      background: dark-blue(0.4)
      padding: 2px 12px 2px 2px
      height: 36px
      border-radius: 100px
      display: flex
      position: relative
      align-items: center
      cursor: pointer
    &__icon
      width: 32px
      height: 32px
      border-radius: 50%
      flex-shrink: 0
      background: dark-blue(0.7)
      display: flex
      align-items: center
      justify-content: center
    &__label
      font-size: 14px
      line-height: 16px
      font-weight: 500
      color: $white
      margin-left: 10px
</style>

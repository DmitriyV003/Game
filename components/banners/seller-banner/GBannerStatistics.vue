<template>
  <div class="g-banner-info">
    <span class="g-banner-info__number">{{ number }}</span>
    <span class="g-banner-info__text">{{ text }}</span>
  </div>
</template>
<script>
export default {
  name: 'g-banner-statistics',
  props: {
    number: {
      type: Number,
      default: () => 1,
    },
    text: {
      type: String,
      default: () => 'Text',
    },
  },
}
</script>
<style lang="sass" scoped>
@import '../../../theme/vars'
@import '../../../theme/mix'
.g-banner-info
    padding: 26px 19px 26px 27px
    display: flex
    align-items: center
    background: rgba(40, 36, 57, 0.5)
    border-radius: 8px
    width: calc(50% - 4px)
    margin-bottom: 8px
    +md
        flex-direction: column
        align-items: flex-start
        padding: 8px 12px
        width: calc(50% - 6px)
    &__text
        font-size: 12px
        line-height: 18px
        color: $white
    &__number
        font-weight: 600
        color: $white
        font-size: 32px
        line-height: 38px
        display: flex
        align-items: center
        margin-right: 12px
        position: relative
        padding-right: 12px
        +md
            padding-right: 0
            margin-right: 0
            margin-bottom: 4px
        &::after
            content: ''
            position: absolute
            right: 0
            top: 0
            height: 100%
            width: 1px
            background: $white
            +md
                display: none
</style>

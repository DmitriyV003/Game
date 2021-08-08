<template>
  <div class="g-pagination">
     <span class="g-pagination__arrow" @click="$emit('onPrev')">
       <chevron-left-icon :size="20" />
     </span>
    
    <div class="g-pagination__dots">
      <span class="g-pagination__dot text-size-16 g-pagination__dot_active">1</span>
      <span class="g-pagination__dot text-size-16">2</span>
    </div>
    
    <span class="g-pagination__arrow" @click="$emit('onNext')">
      <chevron-right-icon :size="20"  />
    </span>
  </div>
</template>

<script>
import icons from '~/mixins/icons'

export default {
  name: 'GPagination',
  mixins: [icons],
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'  
.g-pagination
  display: flex
  align-items: center
  justify-content: center
  &__dot
    width: 40px
    height: 40px
    border-radius: 50%
    display: flex
    align-items: center
    color: white(0.8)
    cursor: pointer
    justify-content: center
    font-weight: 400
    &_active
      background: rgba(100, 62, 255, 0.25)
      color: white(1)
      font-weight: 600
  &__dots
    display: flex
    align-items: center
    justify-content: center
    margin: 0 12px
  &__arrow
    display: flex
    align-items: center
    justify-content: center
    color: $gray
    cursor: pointer
    font-size: 25px
    &:hover
        color: $white
</style>

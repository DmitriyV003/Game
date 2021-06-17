<template>
  <div class="g-review-page-card__wrapper">
    <div class="g-review-page-card">
      <img class="g-review-page-card__image" src="/images/review-page-1.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'GReviewPageCard'
}
</script>

<style lang="sass">
.g-review-page-card
  width: 173px
  border-radius: 12px
  &__wrapper
    margin-right: 16px
  &__image
    width: 100%
    border-radius: 12px
</style>

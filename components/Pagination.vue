<template>
  <div class="g-pagination">
    <span class="g-pagination__arrow" @click="prev">
      <chevron-left-icon :size="20" v-if="currentPage > 1" />
    </span>

    <div class="g-pagination__dots">
      <span
        class="g-pagination__dot text-size-16"
        v-if="currentPage > 1"
        @click="toPage(1)"
        >1</span
      >

      <span class="g-pagination__dot text-size-16" v-if="currentPage > 2"
        >...</span
      >

      <span class="g-pagination__dot text-size-16 g-pagination__dot_active">{{
        currentPage
      }}</span>

      <span
        class="g-pagination__dot text-size-16"
        v-if="totalPages > 1"
        v-for="item in pages.slice(currentPage, dotsToShow + currentPage)"
        @click="toPage(item)"
        :key="item"
        >{{ item }}</span
      >

      <span
        class="g-pagination__dot text-size-16"
        v-if="currentPage < totalPages - dotsToShow"
        >...</span
      >

      <span
        class="g-pagination__dot text-size-16"
        v-if="totalPages !== 1 && currentPage < totalPages - dotsToShow"
        :class="{ 'g-pagination__dot_active': currentPage === totalPages }"
        >{{ totalPages }}</span
      >
    </div>

    <span class="g-pagination__arrow" @click="next">
      <chevron-right-icon :size="20" v-if="totalPages > 1" />
    </span>
  </div>
</template>

<script>
import icons from '~/mixins/icons'

export default {
  name: 'GPagination',
  mixins: [icons],
  methods: {
    next() {
      if (this.currentPage < this.totalPages) {
        this.currentPage += 1
        this.$emit('onNext', this.currentPage)
      }
    },
    prev() {
      if (this.currentPage > 1) {
        this.currentPage -= 1
        this.$emit('onPrev', this.currentPage)
      }
    },
    toPage(page) {
      this.currentPage = page
      this.$emit('toPage', this.currentPage)
    },
  },
  data() {
    return {
      dotsToShow: 5,
      pages: Array(this.totalPages)
        .fill()
        .map((e, i) => i + 1),
      currentPage: 1,
    }
  },
  props: {
    totalPages: {
      type: Number,
      default: () => 1,
    },
  },
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

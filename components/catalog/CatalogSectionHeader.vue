<template>
  <div class="catalog-top-section__title">
    <div class="catalog-top-section__block">
      <h1>{{ title }}</h1>
      <span class="text-size-14 text-color-gray">{{ caption }}</span>
    </div>

    <div class="catalog-top-section__column">
      <tune-icon
        @click="eventBus.$emit('catalogFiltersPopupOpen')"
        class="catalog-top-section__filters"
      />

      <div class="catalog-top-section__sort">
        <span class="text-size-14">Сначала популярные</span>
        <img src="/images/icons/filter.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import icons from '~/mixins/icons'
import { eventBus } from '~/plugins/event-bus'

export default {
  name: 'GCatalogSectionHeader',
  mixins: [icons],
  data() {
    return {
      eventBus,
    }
  },
  props: {
    title: {
      type: String,
      default: () => 'Title',
    },
    caption: {
      type: String,
      default: () => 'Caption',
    },
  },
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.catalog-top-section
    &__column
        display: flex
        flex-direction: column
        justify-content: flex-end
    &__filters
        display: none
        color: white(1)
        cursor: pointer
        font-size: 25px
        margin-left: auto
        margin-bottom: 18px
        +lg
            display: block
    &__sort
        cursor: pointer
        display: flex
        align-items: center
        color: white(1)
        span
            color: inherit
            margin-right: 12px
            letter-spacing: -0.4px
    &__block
        display: flex
        align-items: baseline
        +lg
            flex-direction: column
        span
            margin-left: 16px
            letter-spacing: -0.4px
            +lg
                margin-left: 0
                margin-top: 18px
    &__title
        display: flex
        align-items: center
        justify-content: space-between
        margin-top: 13px
    &__content
        padding-bottom: 16px
        border-bottom: 1px solid white(0.15)
        +lg
            padding-bottom: 9px
</style>

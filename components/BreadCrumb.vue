<template>
  <div class="g-breadcrumb">
    <nuxt-link
      :key="link.label"
      v-for="link in links"
      :to="link.to"
      class="g-breadcrumb__item text-size-14"
      >{{ link.label }}</nuxt-link
    >
  </div>
</template>

<script>
export default {
  name: 'BreadCrumb',
  props: {
    links: {
      type: Array,
      default: () => [
        { to: '/', label: 'Главная' },
        { to: '/catalog', label: 'Игры' },
      ],
    },
  },
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.g-breadcrumb
  display: flex
  align-items: center
  +lg
    align-items: flex-start
  &__item
    letter-spacing: -0.4px
    cursor: pointer
    display: flex
    align-items: center
    color: white(1)
    &:hover
      color: white(0.8)
    +lg
      align-items: baseline
    &:last-child
      color: white(0.4)
    &:not(:first-child)
      &::before
        content: ''
        height: 14px
        width: 1px
        background: $gray
        margin-right: 12px
    &:not(:last-child)
      margin-right: 16px
</style>

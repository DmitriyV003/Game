<template>
  <div class="auth-layout">
    <!-- Adapted = true -->
    <auth-top-menu :is-sing-in="false" />

    <div class="auth-layout__content">
      <nuxt />
    </div>

    <!-- Adapted = true -->
    <auth-footer />
  </div>
</template>

<script>
  import AuthTopMenu from '~/components/menu/AuthTopMenu'
  import AuthFooter from '~/components/footer/AuthFooter'
  export default {
    components: { AuthFooter, AuthTopMenu }
  }
</script>

<style lang="sass">
  .auth-layout
    display: flex
    justify-content: space-between
    flex-direction: column
    min-height: 100vh
    &__content
      display: flex
      align-items: center
      justify-content: center
      margin: auto
</style>

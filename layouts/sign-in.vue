<template>
  <div class="auth-layout">
    <!-- Adapted = true -->
    <auth-top-menu :is-sing-in="true" />

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

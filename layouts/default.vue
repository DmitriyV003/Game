<template>
  <div class="layout">
    <TopMenu />
    <nuxt />

    <!-- Adapted = true   -->
    <game-in-come-footer />
  </div>
</template>

<script>
import TopMenu from '~/components/menu/TopMenu'
import GameInComeFooter from '~/components/footer/GameInComeFooter'
export default {
  components: { GameInComeFooter, TopMenu },
}
</script>

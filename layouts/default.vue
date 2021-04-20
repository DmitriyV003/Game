<template>
  <div class="layout">
    <TopMenu />
    <nuxt />

    <!-- Adapted = true   -->
    <game-in-come-footer />
  </div>
</template>

<script>
import TopMenu from '~/components/TopMenu'
import GameInComeFooter from '~/components/GameInComeFooter'
export default {
  components: { GameInComeFooter, TopMenu }
}
</script>

<template>
  <div class="g-page">
    <b-container>
      <h1 class="title">Личный кабинет</h1>

      <b-row>
        <b-col xl="3" lg="3">

          <!-- Dashboard navigation  adapted = true -->
          <g-dashboard-navigation />
        </b-col>


        <b-col xl="9" lg="9">
          <!-- Manage password  adapted =  -->
          <section class="g-password">
            
          </section>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import GDashboardNavigation from '~/components/dashboard/Navigation'
  import MainButton from '~/components/buttons/MainButton'
  import icons from '~/mixins/icons'
  import { eventBus } from '~/plugins/event-bus'
  import GUserAvatar from "~/components/dashboard/GUserAvatar";
  import GUserData from '~/components/dashboard/GUserData'
  import GBecomeSeller from '~/components/dashboard/BecomeSeller'
  export default {
    components: { GBecomeSeller, GUserData, GUserAvatar, MainButton, GDashboardNavigation },
    mixins: [icons],
    name: 'ProfilePage',
    data: () => {
      return {
        eventBus
      }
    }
  }
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
</style>

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
          <!-- User info  adapted = true -->
          <section class="g-user-info">
            <g-user-avatar class="g-user-info__avatar" />
          
          <g-user-data class="g-user-info__data" />
          </section>
          
          <!-- User statistics  adapted = true -->
          <section class="g-user-stats">
            <b-row>
              <b-col xl="4" lg="4" md="4" sm="12">
                <div class="g-user-stat">
                  <span class="g-user-stat__title">4</span>
                  <span class="g-user-stat__text">Игр куплено</span>
                </div>
              </b-col>

              <b-col xl="4" lg="4" md="4" sm="12">
                <div class="g-user-stat">
                  <span class="g-user-stat__title">4</span>
                  <span class="g-user-stat__text">Оставлено отзывов</span>
                </div>
              </b-col>

              <b-col xl="4" lg="4" md="4" sm="12">
                <div class="g-user-stat">
                  <span class="g-user-stat__title">4</span>
                  <span class="g-user-stat__text">Составлено обзоров</span>
                </div>
              </b-col>
            </b-row>
          </section>

          <!-- Become seller  adapted = true -->
          <section>
            <g-become-seller />
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
    components: {GBecomeSeller, GUserData, GUserAvatar, MainButton, GDashboardNavigation },
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
.g-user-stat
  background: #282439
  border-radius: 12px
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  padding: 40px 0 24px
  +md
    margin-bottom: 12px
  &__text
    font-size: 16px
    color: $gray
    line-height: 24px
  &__title
    margin-bottom: 12px
    font-weight: 600
    color: $white
    font-size: 32px
    line-height: 38px
.g-user-stats
  margin-bottom: 24px
  +md
    margin-bottom: 12px
.g-user-info
  padding: 24px
  background: #282439
  border-radius: 12px
  display: flex
  margin-bottom: 24px
  +lg
    margin-top: 24px
    padding: 16px 16px 24px 16px
  +sm
    flex-direction: column-reverse
  &__data
    +sm
      margin-bottom: 40px
</style>

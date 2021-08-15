<template>
  <div class="g-page">
    <g-change-profile-popup v-if="profile !== null" />
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
            <transition name="fade" mode="out-in">
              <div
                class="g-user-info__wrapper"
                v-if="profile !== null"
                key="profile"
              >
                <g-user-avatar
                  :avatar="profile.data.avatar"
                  class="g-user-info__avatar"
                />

                <g-user-data
                  :name="profile.data.name"
                  :surname="profile.data.surname"
                  :email="profile.data.email"
                  :nickname="profile.data.nickname"
                  class="g-user-info__data"
                />
              </div>

              <g-loader v-else key="loading" class="g-user-info__loading" />
            </transition>
          </section>

          <!-- User statistics  adapted = true -->
          <section class="g-user-stats">
            <b-row>
              <b-col xl="4" lg="4" md="4" sm="12">
                <transition mode="out-in" key="item-1">
                  <div v-if="profile !== null" class="g-user-stat">
                    <span class="g-user-stat__title">{{
                      profile.purchaseCount
                    }}</span>
                    <span class="g-user-stat__text">Игр куплено</span>
                  </div>

                  <div v-else class="g-user-stat" key="loader-1">
                    <g-loader class="g-user-stat__loader" />
                  </div>
                </transition>
              </b-col>

              <b-col xl="4" lg="4" md="4" sm="12">
                <transition mode="out-in">
                  <div v-if="profile !== null" class="g-user-stat" key="item-2">
                    <span class="g-user-stat__title">{{
                      profile.feedbackOnSellersCount
                    }}</span>
                    <span class="g-user-stat__text">Оставлено отзывов</span>
                  </div>

                  <div v-else class="g-user-stat" key="loader-2">
                    <g-loader class="g-user-stat__loader" />
                  </div>
                </transition>
              </b-col>

              <b-col xl="4" lg="4" md="4" sm="12">
                <transition mode="out-in">
                  <div v-if="profile !== null" class="g-user-stat" key="item-3">
                    <span class="g-user-stat__title">{{
                      profile.reviewsCount
                    }}</span>
                    <span class="g-user-stat__text">Составлено обзоров</span>
                  </div>

                  <div v-else class="g-user-stat" key="loader-3">
                    <g-loader class="g-user-stat__loader" />
                  </div>
                </transition>
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
import GUserAvatar from '~/components/dashboard/GUserAvatar'
import GUserData from '~/components/dashboard/GUserData'
import GBecomeSeller from '~/components/dashboard/BecomeSeller'
import { mapState } from 'vuex'
import GLoader from '~/components/Loader'
import GChangeProfilePopup from '~/components/popups/ChangeProfilePopup'

export default {
  components: {
    GChangeProfilePopup,
    GLoader,
    GBecomeSeller,
    GUserData,
    GUserAvatar,
    MainButton,
    GDashboardNavigation,
  },
  mixins: [icons],
  name: 'ProfilePage',
  data: () => {
    return {
      eventBus,
    }
  },
  computed: {
    ...mapState({
      profile: (state) => state.profile.profile,
    }),
  },
  async mounted() {
    try {
      await this.$store.dispatch('profile/getProfile')
    } catch (e) {
      this.$bvToast.toast('Ошибка загрузки страницы!', {
        title: 'Что-то пошло не так(',
        variant: 'danger',
        solid: true,
        appendToast: true,
      })
    }
  },
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

    &__loader
        height: 74px

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
    margin-bottom: 24px
    position: relative
    +lg
        margin-top: 24px
        padding: 16px 16px 24px 16px

    &__wrapper
        display: flex
        +sm
            flex-direction: column-reverse

    &__loading
        height: 232px !important

    &__data
        +sm
            margin-bottom: 40px
</style>

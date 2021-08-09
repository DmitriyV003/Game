<template>
  <div>
    <!-- News top  adapted = true   -->
    <section>
      <b-container>
        <div class="news-card__top">
          <bread-crumb :links="links" />
        </div>
      </b-container>
    </section>

    <!-- News card  adapted =  true  -->
    <section v-if="comment !== null">
      <b-container>
        <div class="news-card__content">
          <div class="news-card__image">
            <img class="news-card__img" src="/images/news-4.png" alt="">
            <h1 class="news-card__title">{{ comment.itemName }}</h1>
            <p class="news-card__text">O Interactive</p>

            <rating 
                size="sm" 
                class="news-card__rating" 
                :value="Number(comment.itemRate)" />
          </div>

          <div class="news-card__block">
            <div class="news-card__views">
              <avatar 
                  :nickname="comment.userNickname" 
                  :image="comment.userAvatar"
              />

              <div class="news-card__stats">
                <div class="news-card__stat">
                  <eye-icon class="icon" />
                  <span class="text">8</span>
                </div>
                <div class="news-card__stat">
                  <message-icon class="icon" />
                  <span class="text">24</span>
                </div>
              </div>
            </div>

            <div>
              <p class="news-card__text">{{ comment.userFeedbackText }}</p>
            </div>

          </div>
        </div>
      </b-container>
    </section>
  </div>
</template>

<script>
import BreadCrumb   from '~/components/BreadCrumb'
import icons        from '~/mixins/icons'
import GMessage     from '~/components/Message'
import Avatar       from '~/components/Avatar'
import GInput       from '~/components/form-elements/Input'
import MainButton   from '~/components/buttons/MainButton'
import Rating       from "~/components/cards/Rating";
import { mapState } from 'vuex'
export default {
  name: 'GCommentPage',
  mixins: [icons],
  components: {Rating, MainButton, GInput, Avatar, GMessage, BreadCrumb },
    async mounted () {
        try {
            await this.$store.dispatch('comments/getCommentById', this.$route.params.id)
            
            this.links.push({ to: `/comments/${this.$route.params.id}`, label: this.comment.itemName })
        } catch (e) {
            // TODO notification
        }
    },
    computed: {
        ...mapState({
            comment: state => state.comments.comment
        })
    },
  data: () => {
    return {
      links: [
        { to: '/', label: 'Главная' },
        { to: '/comments', label: 'Отзывы' }
      ]
    }
  }
}  
</script>

<style lang="sass">
  @import 'theme/_vars'
  @import 'theme/_mix'
  .news-card
    &__rating
      left: 0
      top: 28px
      position: absolute
    &__image
      align-items: flex-start
      justify-content: center
      flex-direction: column
</style>

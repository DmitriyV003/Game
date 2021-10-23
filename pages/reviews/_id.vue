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
    <section v-if="review !== null">
      <b-container>
        <div class="news-card__content">
          <div class="news-card__image">
            <img class="news-card__img" :src="review.itemBackground" alt="" />
            <h1 class="news-card__title">{{ review.name }}</h1>
            <p class="news-card__text">{{ review.itemDeveloper }}</p>

            <rating
              size="sm"
              class="news-card__rating"
              v-if="review.itemRate !== null"
              :value="review.itemRate"
            />
          </div>

          <div class="news-card__block">
            <div class="news-card__views">
              <avatar
                :nickname="review.adminName"
                :image="review.adminImage"
              />

              <div class="news-card__stats">
                <div class="news-card__stat">
                  <eye-icon class="icon" />
                  <span class="text">{{ review.reviewViewsCount }}</span>
                </div>
                <div class="news-card__stat">
                  <message-icon class="icon" />
                  <span class="text">{{ review.reviewCommentsCount }}</span>
                </div>
              </div>
            </div>

            <div>
              <p class="news-card__text">
                {{ review.description }}
              </p>
            </div>

            <div class="news-card__share">
              <div class="news-card__socials">
                <span class="news-card__caption">Поделиться:</span>

                <span class="news-card__social">
                  <vk-icon />
                </span>

                <span class="news-card__social">
                  <fb-icon />
                </span>
              </div>

              <span class="news-card__caption">Опубликовано 2 часа назад</span>
            </div>

            <div
              class="news-card__messages"
              v-if="review.reviewComments.length > 0"
            >
              <g-message-tree
                :data="review.reviewComments"
                store-action="reviews/setParentId"
              />
<!--              <g-message-->
<!--                v-for="item in "-->
<!--                :key="item.id"-->
<!--                :data="item"-->
<!--                @onAnswer="answer(item.id)"-->
<!--              />-->
            </div>

            <form class="news-card__bottom" @submit.prevent="onSubmit">
              <avatar :image="review.adminImage" />

              <g-input
                class="news-card__input"
                placeholder="Оставьте комментарий"
                v-model.trim="$v.form.text.$model"
                :error="$v.form.text.$error"
              >
                <template v-slot:error>
                  <span v-if="!$v.form.text.required && $v.form.text.$error"
                    >Поле обязательно</span
                  >
                </template>
              </g-input>

              <button
                class="button-reboot news-card__btn button_primary"
                type="submit"
                :disabled="disabled || $v.$invalid"
                :class="{ button_disabled: disabled || $v.$invalid }"
              >
                <span class="text">отправить</span>
                <img class="icon" src="/images/icons/arrow-up.svg" alt="" />
              </button>
            </form>
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
import Rating       from '~/components/cards/Rating'
import { mapState } from 'vuex'
import { required } from 'vuelidate/lib/validators'
import GMessageTree from '~/components/messages/MessageTree'
export default {
  name: 'GReviewPage',
  mixins: [icons],
  components: { GMessageTree, Rating, MainButton, GInput, Avatar, GMessage, BreadCrumb },
  validations: {
    form: {
      text: {
        required,
      },
    },
  },
  methods: {
    async onSubmit() {
      this.disabled = true
      try {
        await this.$store.dispatch('reviews/postCreateComments', this.form)
        // await this.$store.dispatch('reviews/getReviewById', this.$route.params.id)

        this.form.text = null
        this.$v.$reset()
      } catch (e) {
        console.log(e)
        this.$bvToast.toast('Ошибка загрузки страницы!', {
          title: 'Что-то пошло не так(',
          variant: 'danger',
          solid: true,
          appendToast: true,
        })
      } finally {
        this.disabled = false
      }
    },
  },
  async mounted() {
    try {
      await this.$store.dispatch('reviews/getReviewById', this.$route.params.id)
      // await this.$store.dispatch('comments/getAdditionalComments', this.$route.params.id)
      //
      this.links.push({
        to: `/reviews/${this.$route.params.id}`,
        label: this.review.itemName,
      })
    } catch (e) {
      this.$bvToast.toast('Ошибка загрузки страницы!', {
        title: 'Что-то пошло не так(',
        variant: 'danger',
        solid: true,
        appendToast: true,
      })
    }
  },
  computed: {
    ...mapState({
      review: (state) => state.reviews.review,
      additionalComments: (state) => state.comments.additionalComments,
    }),
  },
  data: () => {
    return {
      disabled: false,
      form: {
        text: null
      },
      links: [
        { to: '/', label: 'Главная' },
        { to: '/reviews', label: 'Обзоры' },
      ],
    }
  },
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

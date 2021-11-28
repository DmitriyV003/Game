<template>
  <div
    class="g-product-key"
    v-if="item != null"
  >
<!--    <g-new-dispute />-->

    <section class="g-product-key__top">
      <b-container>
        <show-all
          reverse
          to="/cart"
          class="g-product-key__back"
          label="Назад"
        />
        <h1>Ключ товара</h1>
      </b-container>
    </section>

    <section>
      <b-container>
        <b-row>
          <b-col xl="8" lg="8">
            <!-- Product keys adapted = true -->
            <section>
              <div class="g-background">
                <g-key-item
                  :key-id="item.keyId"
                  :image="item.image"
                  :name="item.name"
                />
              </div>
            </section>

            <!-- Like/Dislike mobile adapted = true -->
            <section>
              <g-like-dislike
                :nickname="item.sellerNickname"
                :name="item.sellerName"
                :surname="item.sellerSurname"
                :image="item.sellerAvatar"
                class="g-product-key__like_mobile"
                v-model="rating"
              />
            </section>

            <!-- Leave comment adapted = true -->
            <section class="g-comment-section">
              <g-cart-comment-form
                :name="item.sellerName"
                :surname="item.sellerSurname"
                v-model="comment"
                :key-id="item.keyId"
                @click="postComment"
              />
            </section>
          </b-col>

          <b-col
            xl="4"
            lg="4"
          >
            <g-like-dislike
              class="g-product-key__like_desktop"
              :nickname="item.sellerNickname"
              :name="item.sellerName"
              :surname="item.sellerSurname"
              :image="item.sellerAvatar"
              v-model="rating"
            />
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
import ShowAll          from '~/components/buttons/MainLink'
import GKeyItem         from '~/components/cart/KeyItem'
import MainButton       from '~/components/buttons/MainButton'
import GLikeDislike     from '~/components/cart/LikeDislike'
import GCommentForm     from '~/components/GCommentForm'
import { mapGetters }   from 'vuex'
import GNewDispute      from '~/components/popups/NewDispute'
import GCartCommentForm from '~/components/forms/CartCommentForm'

export default {
  name: 'ProductKeyPage',
  components: { GCartCommentForm, GNewDispute, GCommentForm, GLikeDislike, MainButton, GKeyItem, ShowAll },
  computed: {
    ...mapGetters({
      getItemByKey: 'cart/getItemByKey',
    }),
    rating: {
      get() {
        return this.$store.state.items.form.rating
      },
      set(val) {
        this.$store.commit('items/SET_FORM_FIELD', { field: 'rating', value: val })
      }
    },
    comment: {
      get() {
        return this.$store.state.items.form.comment
      },
      set(val) {
        this.$store.commit('items/SET_FORM_FIELD', { field: 'comment', value: val })
      }
    }
  },
  methods: {
    async postComment() {
      try {
        await this.$store.dispatch('cart/postNewDisputeFromCart')
      } catch (e) {
        this.$bvToast.toast('Ошибка загрузки страницы!', {
          title: 'Что-то пошло не так(',
          variant: 'danger',
          solid: true,
          appendToast: true,
        })
      }
    }
  },
  mounted () {
    this.item = this.getItemByKey(this.$route.params.key)
    this.$store.commit('purchases/SET_PURCHASE', {
      itemBackground: this.item.image,
      itemName: this.item.name,
      sellerNickname: this.item.sellerNickname,
      price: this.item.itemPrice.old ? this.item.itemPrice.old : this.item.itemPrice.new,
      keyId: this.item.keyId
    })
    this.$store.commit('purchases/SET_TYPE', this.item.itemType)
  },
  data: () => {
    return {
      item: null
    }
  },
}
</script>

<style lang="sass">
@import '@/theme/vars'
@import '@/theme/mix'
.g-comment
  &-section
    margin-top: 20px
.g-product-key
  padding-bottom: 132px
  &__like
    &_mobile
      display: none
      +lg
        display: block
        margin-top: 20px
    &_desktop
      +lg
        display: none
  &__col-8
    +lg
      width: 100%
  &__back
    margin-bottom: 24px
  &__top
    padding: 40px 0 24px
</style>

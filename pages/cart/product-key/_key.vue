<template>
  <div
    class="g-product-key"
    v-if="item != null"
  >
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
              <g-comment-form
                :name="item.sellerName"
                :surname="item.sellerSurname"
                v-model="comment"
                :key-id="item.keyId"
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
import ShowAll        from '~/components/buttons/MainLink'
import GKeyItem       from '~/components/cart/KeyItem'
import MainButton     from '~/components/buttons/MainButton'
import GLikeDislike   from '~/components/cart/LikeDislike'
import GCommentForm   from '~/components/GCommentForm'
import { mapGetters } from 'vuex'
export default {
  name: 'ProductKeyPage',
  components: { GCommentForm, GLikeDislike, MainButton, GKeyItem, ShowAll },
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
  mounted () {
    this.item = this.getItemByKey(this.$route.params.key)
  },
  data: () => {
    return {
      item: null
    }
  },
}
</script>

<style lang="sass">
@import '../../../theme/vars'
@import '../../../theme/mix'
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

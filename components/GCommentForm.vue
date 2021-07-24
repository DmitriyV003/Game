<template>
  <div class="g-comment-form">
    <div class="g-comment-form__title">Оставьте отзыв о продавце {{ name }} {{ surname }}</div>

    <div class="g-comment-form__comment">
      <textarea 
        placeholder="Комментарий" 
        class="input-reboot g-comment-form__textarea" 
        name="comment" 
        id="comment"
        v-model="form.comment"
      ></textarea>
    </div>

    <main-button 
      type="submit"
      class="g-comment-form__button" 
      color="primary" 
      size="xl"
      label="оставить отзыв" 
    />
  </div>
</template>

<script>
import MainButton from '~/components/buttons/MainButton'
export default {
  name: 'GCommentForm',
  components: { MainButton },
  props: {
    name: {
      type: String,
      required: true
    },
    surname: {
      type: String,
      required: true
    },
  },
  methods: {
    async postFeedback () {
      try {
        await this.$store.dispatch('purchases/postFeedback', this.form)
      } catch (e) {
        console.log(e)
      }
    }
  },
  data: () => {
    return {
      form: {
        comment: null,
        rate: null
      }
    }
  }
}
</script>

<style lang="sass">
@import '../theme/vars'
@import '../theme/mix'
.g-comment-form
  padding: 24px
  background: #282439
  border-radius: 12px
  +md
    padding: 16px
  .vue-star-rating-star
    display: flex
    align-items: center
    justify-content: center
  .vue-star-rating-rating-text
    display: none
  &__button
    display: flex
    justify-content: flex-end
    .button
      +md
        width: 100%
  &__rating
    margin-left: 12px
  &__comment
    margin-bottom: 20px
  &__textarea
    width: 100%
    resize: none
    border-radius: 12px
    padding: 16px 20px
    font-size: 16px
    line-height: 24px
    background: white(0.05)
    min-height: 180px
    color: $white
    +md
      min-height: 162px
      padding: 16px
    &::placeholder
      color: $gray
  &__stars
    display: flex
    align-items: center
    margin-bottom: 16px
  &__title
    font-weight: 600
    color: $white
    margin-bottom: 24px
    font-size: 20px
    line-height: 28px
    +md
      margin-bottom: 32px
</style>

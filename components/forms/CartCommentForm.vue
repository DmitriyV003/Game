<template>
  <div class="g-comment-form">
    <div class="g-comment-form__title">
      Оставьте отзыв о продавце {{ name }} {{ surname }}
    </div>

    <div class="g-comment-form__comment">
      <textarea
        placeholder="Комментарий"
        class="input-reboot g-comment-form__textarea"
        name="comment"
        id="comment"
        @input="$emit('input', $event.target.value)"
      ></textarea>
    </div>

    <main-button
      type="button"
      class="g-comment-form__button"
      color="primary"
      size="xl"
      label="оставить отзыв"
      @click.native.prevent="$emit('click')"
      :disabled="form.rating === null || form.text === null"
    />
  </div>
</template>

<script>
  import MainButton   from '~/components/buttons/MainButton'
  import { mapState } from 'vuex'
  export default {
    name: 'GCartCommentForm',
    components: { MainButton },
    computed: {
      ...mapState({
        form: (state) => state.items.form,
      }),
    },
    props: {
      name: {
        type: String,
        required: true,
      },
      keyId: {
        type: String,
        required: true,
      },
      surname: {
        type: String,
        required: true,
      },
    },
  }
</script>

<style lang="sass">
  @import '~/theme/vars'
  @import '~/theme/mix'
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

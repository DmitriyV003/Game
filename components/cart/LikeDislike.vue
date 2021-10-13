<template>
  <div class="g-background">
    <div class="g-like">
      <avatar
        class="g-like__avatar"
        :caption="nickname"
        :nickname="name + ' ' + surname"
        :image="image"
      />

      <div class="g-like__bottom">
        <span class="text text-color-gray text-weight-500"
          >Оценить продавца:</span
        >
        <div class="g-like__actions">
          <button
            @click="$emit('input', 1)"
            class="g-like__action"
            type="button"
          >
            <like-icon />
          </button>
          <button
            @click="$emit('input', 0)"
            class="g-like__action"
            type="button"
          >
            <dislike-icon />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from '~/components/Avatar'
import icons from '~/mixins/icons'
export default {
  name: 'GLikeDislike',
  components: { Avatar },
  mixins: [icons],
  props: {
    name: {
      type: String,
      required: true,
    },
    nickname: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: () => null,
    },
    surname: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.g-like
  &__action
    border: 1px solid #643EFF
    background: transparent
    display: flex
    align-items: center
    justify-content: center
    width: 44px
    height: 44px
    border-radius: 50%
    color: $white
    &:not(:last-child)
      margin-right: 32px
      +md
        margin-right: 16px
  &__actions
    display: flex
    align-items: center
  &__bottom
    display: flex
    align-items: center
    justify-content: space-between
    margin-top: 24px
    .text
      font-size: 14px
      line-height: 22px
  &__avatar
    padding-bottom: 24px
    border-bottom: 1px solid rgba(154, 147, 170, 0.3)
</style>

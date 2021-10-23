<template>
  <div class="g-message__wrapper">
    <div class="g-message">
      <avatar
        :image="data.avatar"
        class="g-message__img"
      />

      <div class="g-message__block">
        <p class="g-message__name">{{ data.nickname }}</p>
        <p class="g-message__text">{{ data.commentText }}</p>

        <div class="g-message__bottom">
          <span class="g-message__date">{{
            new Date(data.createdAt).toDateString()
          }}</span>
          <show-all
            :icon="false"
            label="Ответить"
            @click.native="$store.dispatch(storeAction, data.id)"
          />
        </div>
      </div>
    </div>

    <div v-if="data.children && data.children.length">
      <g-message
        v-for="item in data.children"
        :key="item.id"
        :data="item"
        class="g-message_child"
        :store-action="storeAction"
      />
    </div>
  </div>
</template>

<script>
import ShowAll      from '~/components/buttons/MainLink'
import { eventBus } from '~/plugins/event-bus'
import Avatar       from '~/components/Avatar'

export default {
  name: 'GMessage',
  components: { Avatar, ShowAll },
  data() {
    return {
      eventBus,
    }
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
    storeAction: {
      type: String,
      required: true,
    }
  },
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.g-message
    display: flex
    align-items: flex-start
    margin-bottom: 12px

    &_child
        margin-left: 64px
        margin-top: 12px
        +lg
            margin-left: 12px
        +sm
            margin-left: 0
    &__wrapper
        &:not(:last-child)
            .g-message__block
                border-bottom: 1px solid rgba(154, 147, 170, 0.3)
                padding-bottom: 16px
    &__name
        font-weight: 600
        color: $white
        text-transform: uppercase
        font-size: 16px
        line-height: 20px

    &__text
        margin-top: 8px
        font-size: 14px
        letter-spacing: -0.4px
        color: white(0.8)
        line-height: 20px

    &__date
        margin-right: 16px
        font-size: 12px
        line-height: 18px
        color: $gray

    &__bottom
        margin-top: 8px
        display: flex
        align-items: center

    &__block
        width: 100%

    &__img
        width: 40px
        height: 40px
        border-radius: 50%
        margin-right: 16px
        flex-shrink: 0
</style>

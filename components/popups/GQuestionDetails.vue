<template>
  <!-- Adapted = true  -->
  <div class="g-popup" v-show="val">
    <div class="g-question-details">
      <div class="g-question-details__top">
        <div class="g-question-details__left">
          <span class="number"># 475422</span>
          <h5 class="title">Планируются ли сезонные акции?</h5>
          <span class="status">Ожидает ответа</span>
        </div>
        <close-icon @click="val = false" class="g-popup__close g-question-details__close" />
      </div>

      <div class="g-question-details__messages">
        <div class="g-question-details__message">
          <avatar />

          <div class="g-question-details__text">
            <p class="text">На днях разработчиками был анонсирован выход игры RaidInvolve 2.0.
              Я хотел бы уточнить, будете ли вы продавать ключи? Естественно не в день релиза, но в течении хотя бы месяца после выхода будет ли подобная возможность?</p>
            <span class="date">04.04.2021</span>
          </div>
        </div>

        <div class="g-question-details__message g-question-details__message_income">
          <avatar />

          <div class="g-question-details__text g-question-details__text_income">
            <p class="text">На днях разработчиками был анонсирован выход игры RaidInvolve 2.0.
              Я хотел бы уточнить, будете ли вы продавать ключи? Естественно не в день релиза, но в течении хотя бы месяца после выхода будет ли подобная возможность?</p>
            <span class="date">04.04.2021</span>
          </div>
        </div>
      </div>
      
      <div v-show="!showTextarea" class="g-question-details__bottom">
        <main-button @click.native="val = false" color="gray" label="Закрыть" size="xl" />
        <main-button @click.native="showTextarea = true" color="primary" label="Ответить" size="xl" />
      </div>

      <div v-show="showTextarea" class="g-question-details__answer">
        <div class="g-question-details__cancel-top">
          <span class="text">Текст сообщения:</span>
          <span @click="showTextarea = false" class="g-question-details__cancel">Отменить <close-icon class="icon" /> </span>
        </div>
        <textarea class="input-reboot g-question-details__textarea"></textarea>

        <div class="g-question-details__bottom g-question-details__bottom_right">
          <main-button @click.native="showTextarea = true" color="primary" label="Ответить" size="xl" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {eventBus} from '~/plugins/event-bus'
import icons from '~/mixins/icons'
import Avatar from '~/components/Avatar'
import MainButton from '~/components/buttons/MainButton'

export default {
  name: 'GQuestionDetails',
  components: { MainButton, Avatar },
  mixins: [icons],
  data: () => {
    return {
      val: false,
      showTextarea: false
    }
  },
  created () {
    eventBus.$on('popupClose', () => {
      this.val = false
    })

    eventBus.$on('questionDetailsPopupOpen', () => {
      this.val = true
    })
  }
}
</script>

<style lang="sass">
@import '../../theme/_vars'
@import '../../theme/_mix'
.g-question-details
  background: #282439
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25)
  border-radius: 12px
  padding: 24px
  width: 560px
  max-height: calc(100vh - 300px)
  overflow-y: auto
  +md
    width: calc(100% - 32px)
    max-height: calc(100vh - 64px)
    padding: 24px 16px
  &__close
    margin-bottom: auto
  &__textarea
    background: rgba(255, 255, 255, 0.05)
    color: $white
    resize: none
    width: 100%
    padding: 12px 20px
    height: 112px
    border-radius: 8px
  &__cancel-top
    margin-top: 24px
    display: flex
    align-items: center
    justify-content: space-between
    margin-bottom: 16px
    .text
      font-size: 14px
      color: $gray
      letter-spacing: -0.4px
      line-height: 20px
  &__cancel
    font-size: 14px
    color: rgba(100, 62, 255, 1)
    letter-spacing: -0.4px
    line-height: 20px
    cursor: pointer
    display: flex
    align-items: center
    .icon
      font-size: 23px
  &__bottom
    display: flex
    align-items: center
    justify-content: space-between
    margin-top: 24px
    +sm
      flex-direction: column
      margin-top: 20px
    .button__wrapper
      +sm
        width: 100%
      &:not(:last-child)
        +sm
          margin-bottom: 16px
    .button
      +sm
        width: 100%
    &_right
      justify-content: flex-end
  &__messages
    padding-bottom: 24px
    border-bottom: 1px solid rgba(154, 147, 170, 0.3)
    +sm
      padding-bottom: 20px
  &__message
    max-width: 90%
    display: flex
    flex-direction: column
    +sm
      max-width: 100%
    &:not(:last-child)
      margin-bottom: 24px
      +sm
        margin-bottom: 18px
    &_income
      margin-left: auto
      align-items: flex-end
      +sm
        align-items: flex-start 
  &__text
    margin-top: 10px
    padding: 12px 16px
    background: rgba(57, 53, 74, 0.3)
    border-radius: 8px
    display: flex
    flex-direction: column
    align-items: flex-end
    +sm
      padding: 12px
    &_income
      background: rgba(100, 62, 255, 0.16)
    .text
      font-size: 14px
      line-height: 20px
      letter-spacing: -0.4px
      color: $gray
    .date
      font-size: 12px
      line-height: 16px
      color: $gray
  &__left
    display: flex
    flex-direction: column
    +sm
      margin-right: 16px
    .title
      margin-bottom: 8px
    .status
      font-size: 14px
      line-height: 20px
      letter-spacing: -0.4px
      color: rgba(255, 153, 0, 1)
    .number
      font-size: 14px
      line-height: 20px
      letter-spacing: -0.4px
      color: $gray
      margin-bottom: 8px
  &__top
    display: flex
    justify-content: space-between
    align-items: flex-start
    border-bottom: 1px solid rgba(154, 147, 170, 0.3)
    padding-bottom: 24px
    margin-bottom: 24px
    +sm
      padding-bottom: 16px
</style>

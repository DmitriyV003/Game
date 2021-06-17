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
    <section>
      <b-container>
        <div class="news-card__content">
          <div class="news-card__image">
            <img src="/images/news-4.png" alt="">
            <h1 class="news-card__title">BIG покинули ESL Pro League Season 13</h1>
          </div>
          
          <div class="news-card__block">
            <div>
              <p class="news-card__text">Команды BIG и Renegades выбыли из борьбы за чемпионский титул ESL Pro League Season 13 по CS:GO.
                Они заняли пятое и шестое места в группе А и лишились шансов на выход в плей-офф.</p>

              <p class="news-card__text">Обе команды провели по четыре матча. BIG победила Complexity Gaming, но уступила OG, Heroic и FPX Esports, а Renegades
                проиграли четыре серии подряд против Heroic, FPX Esports, OG и Complexity Gaming. В последнем туре BIG и Renegades
                сыграют друг с другом. Встреча начнется 12 марта в 17:30 мск.</p>

              <p class="news-card__text">ESL Pro League Season 13 проходит с 8 марта по 11 апреля в онлайне. 24 коллектива сражаются за призовой фонд
                в размере $750 тыс. С 13 по 18 марта пройдут матчи в группе В. Следить за детальным расписанием лиги можно
                на странице репортажа</p>
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
            
            <div class="news-card__messages">
              <g-message />
              <g-message />
              <g-message />
            </div>
            
            <div class="news-card__bottom">
              <avatar :name="null" :caption="null" />
              
              <g-input class="news-card__input" placeholder="Оставьте комментарий" />
              
              <button class="button-reboot news-card__btn button_primary">
                <span class="text">отправить</span>
                <img class="icon" src="/images/icons/arrow-up.svg" alt="">
              </button>
            </div>
            
          </div>
        </div>
      </b-container>
    </section>
  </div>
</template>

<script>
import BreadCrumb from '~/components/BreadCrumb'
import icons from '~/mixins/icons'
import GMessage from '~/components/Message'
import Avatar from '~/components/Avatar'
import GInput from '~/components/form-elements/Input'
import MainButton from '~/components/buttons/MainButton'
export default {
  name: 'NewsPage',
  mixins: [icons],
  components: {MainButton, GInput, Avatar, GMessage, BreadCrumb },
  data: () => {
    return {
      links: [
        { to: '/', label: 'Главная' },
        { to: '/news', label: 'Новости' },
        { to: '/news/fghjkl', label: 'Big покинули ESL Pro League Season 13' }
      ]
    }
  }
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.news-card  
  &__btn
    padding: 14px 48px
    background: #643EFF
    font-weight: 500
    color: $white
    text-transform: uppercase
    font-size: 16px
    line-height: 22px
    border-radius: 8px
    flex-shrink: 0
    +lg
      width: 40px
      height: 40px
      padding: 0
    .icon
      display: none
      transform: rotate(90deg)
      +lg
        display: inline-block
    .text
      +lg
        display: none
  &__input
    width: 100%
    margin: 0 16px
    input
      +lg
        padding: 10px 12px 10.4px 12px
        font-size: 12px
        line-height: 18px
        &::placeholder
          font-size: 12px
          line-height: 18px
  &__bottom
    display: flex
    align-items: center
    justify-content: space-between
    padding-top: 15px
    border-top: 1px solid rgba(154, 147, 170, 0.3)
    +lg
      padding-top: 11px
  &__socials
    display: flex
    align-items: center
  &__social
    display: flex
    align-items: center
    justify-content: center
    width: 24px
    height: 24px
    border-radius: 50%
    color: $white
    cursor: pointer
    background: rgba(100, 62, 255, 0.3)
    margin-left: 16px
    font-size: 15px
  &__share
    padding: 24px 0
    border-top: 1px solid rgba(154, 147, 170, 0.3)
    border-bottom: 1px solid rgba(154, 147, 170, 0.3)
    margin-top: 24px
    margin-bottom: 40px
    display: flex
    align-items: center
    justify-content: space-between
    +lg
      margin-bottom: 24px
      padding: 16px 0
  &__caption
    font-size: 14px
    color: $gray
    letter-spacing: -0.4px
    line-height: 20px
  &__text
    font-size: 16px
    color: white(0.8)
    line-height: 24px
    +lg
      font-size: 14px
      line-height: 20px
    &:not(:last-child)
      margin-bottom: 24px
  &__block
    padding: 24px 20px 16px 20px
    +lg
      padding: 16px
  &__content
    background: #282439
    border-radius: 12px
  &__title
    position: relative
    z-index: 5
    max-width: 40%
    +lg
      max-width: 100%
  &__image
    position: relative
    min-height: 220px
    display: flex
    align-items: center
    justify-content: flex-start
    padding: 0 40px
    +lg
      min-height: initial
      padding: 32px 16px
    img
      position: absolute
      top: 0
      left: 0
      height: 100%
      border-radius: 12px 12px 0 0
      width: 100%
  &__top
    padding: 41px 0
    +lg
      padding: 24px 0
</style>

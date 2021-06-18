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
            <img class="news-card__img" src="/images/news-4.png" alt="">
            <h1 class="news-card__title">HITMAN 3</h1>
            <p class="news-card__text">O Interactive</p>
            
            <rating size="sm" class="news-card__rating" :value="4.6" />
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
import Rating from "~/components/cards/Rating";
export default {
  name: 'GReviewPage',
  mixins: [icons],
  components: {Rating, MainButton, GInput, Avatar, GMessage, BreadCrumb },
  data: () => {
    return {
      links: [
        { to: '/', label: 'Главная' },
        { to: '/reviews', label: 'Обзоры' },
        { to: '/reviews/fghjkl', label: 'Blacktea. Hitman 3' }
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

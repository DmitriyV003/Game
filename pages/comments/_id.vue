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
            <div class="news-card__views">
              <avatar name="Blacktea" />

              <div class="news-card__stats">
                <div class="news-card__stat">
                  <eye-icon class="icon" />
                  <span class="text">8</span>
                </div>
                <div class="news-card__stat">
                  <message-icon class="icon" />
                  <span class="text">24</span>
                </div>
              </div>
            </div>

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
  name: 'GCommentPage',
  mixins: [icons],
  components: {Rating, MainButton, GInput, Avatar, GMessage, BreadCrumb },
  data: () => {
    return {
      links: [
        { to: '/', label: 'Главная' },
        { to: '/comments', label: 'Отзывы' },
        { to: '/comments/fghjkl', label: 'Blacktea. Hitman 3' }
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

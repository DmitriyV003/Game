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
    <section v-if="news !== null">
      <b-container>
        <div class="news-card__content">
          <div class="news-card__image">
            <img class="news-card__img" :src="news.newsBackground" alt="">
            <h1 class="news-card__title">{{ news.newsName }}</h1>
          </div>
          
          <div class="news-card__block">
            <div>
              <p class="news-card__text">{{ news.newsDescription }}</p>
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

              <span class="news-card__caption">Опубликовано {{ new Date(news.newsUpdatedAt).toDateString() }}</span>
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
import {mapGetters, mapState} from "vuex";
export default {
  name: 'NewsPage',
  mixins: [icons],
  components: {MainButton, GInput, Avatar, GMessage, BreadCrumb },
  data: () => {
    return {
      links: [
        { to: '/', label: 'Главная' },
        { to: '/news', label: 'Новости' }
      ]
    }
  },
  computed: {
    ...mapState({
      news: state => state.news.news
    })
  },
  async mounted () {
    try {
      await this.$store.dispatch('news/getNewsById', this.$route.params.id)
      this.links.push({
        to: '/news/' + this.news.newsId,
        label: this.news.newsName
      })
    } catch (e) {
      
    }
  }
}
</script>

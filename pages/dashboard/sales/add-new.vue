<template>
  <div class="g-page">
    <b-container>
      <h1 class="title">Личный кабинет</h1>
      
      <b-row>
        <b-col xl="3" lg="3">

          <!-- Dashboard navigation  adapted = true -->
          <g-dashboard-navigation class="g-new-product__nav" />
        </b-col>
        
        <b-col xl="9" lg="9">
          <div class="g-new-product__top">
            <show-all reverse label="Назад к списку" to="/dashboard/sales" />
            <h2 class="g-new-product__title">Добавить новую игру на продажу</h2>
          </div>
          
          <div class="g-product-search">
            <g-input class="g-product-search__input" color="white" />
            
            <main-button class="g-product-search__btn" size="xl" color="primary" label="выбрать" />
          </div>
          
          <div class="g-new-product__product">
            <section class="g-new-product__section">
              <div class="g-new-product__block g-new-product__block_row">
                <div class="g-new-product__left g-new-product__left_row">
                  <img class="g-new-product__img" src="/images/new-product.jpg" alt="">
                </div>
                
                <div class="g-new-product__right g-new-product__right_row">
                  <p class="g-new-product__name">HITMAN 3</p>
                  <p class="g-new-product__text">HITMAN™ 3 — восьмая часть легендарной серии Hitman и третий сезон HITMAN™, завершающий трилогию «World of Assassinations». Релиз игры состоялся 20 января 2021 года. Это первая часть во всей серии Hitman, которую IO Interactive издала самостоятельно.  восьмая часть легендарной серии Hitman и третий сезон HITMAN™, завершающий трилогию «World of Assassinations». Релиз игры состоялся 20 января 2021 года. </p>
                </div>
              </div>
            </section>

            <!--  Sales settings  adapted = true -->
            <section class="g-new-product__section">
              <div class="g-new-product__block">
                <div class="g-new-product__left">
                  <p class="g-new-product__subtitle">Настройки продажи</p>
                </div>

                <div class="g-new-product__right">
                  <div class="g-new-product__line">
                    <div class="g-new-product__subblock">
                      <main-button label="Добавить ключи" color="secondary" full-width size="xl" />
                    </div>

                    <div class="g-new-product__subblock">
                      <p class="g-new-product__added">Добавлено: <span>45 ключей</span></p>
                    </div>

                    <div class="g-new-product__subblock">
                      <g-drop-menu />
                    </div>

                    <div class="g-new-product__subblock">
                      <g-drop-menu />
                    </div>

                    <div class="g-new-product__subblock">
                      <g-input readonly caption="Цена продажи с учетом комиссии" />
                    </div>

                    <div class="g-new-product__subblock">
                      <g-input color="white" caption="Ваша цена" />
                    </div>

                    <main-button class="g-new-product__sale" label="Выставить на продажу" color="primary" full-width size="xl" />
                  </div>
                </div>
              </div>
            </section>

            <!--  About game  adapted = true -->
            <section class="g-new-product__section g-new-product__section_no-mb g-new-product__section_no-pt">
              <div class="g-new-product__block">
                <g-drop-content title="Об игре Hitman 3">
                  <template v-slot:dropContent>
                    <div class="g-new-product__line">
                      <div class="g-new-product__subblock">
                        <div class="g-new-product__tag">
                          <span class="caption">Теги</span>
                          <span class="value">Экшен, Одиночная игра, Стелс</span>
                        </div>
                      </div>
                      <div class="g-new-product__subblock">
                        <div class="g-new-product__tag">
                          <span class="caption">Теги</span>
                          <span class="value">Экшен, Одиночная игра, Стелс</span>
                        </div>
                      </div>
                      <div class="g-new-product__subblock">
                        <div class="g-new-product__tag">
                          <span class="caption">Теги</span>
                          <span class="value">Экшен, Одиночная игра, Стелс</span>
                        </div>
                      </div>
                      <div class="g-new-product__subblock">
                        <div class="g-new-product__tag">
                          <span class="caption">Теги</span>
                          <span class="value">Экшен, Одиночная игра, Стелс</span>
                        </div>
                      </div>
                      <div class="g-new-product__subblock">
                        <div class="g-new-product__tag">
                          <span class="caption">Теги</span>
                          <span class="value">Экшен, Одиночная игра, Стелс</span>
                        </div>
                      </div>
                    </div>
                  </template>
                </g-drop-content>
              </div>
            </section>

            <!--  Game description  adapted = true -->
            <section class="g-new-product__section g-new-product__section_no-mb g-new-product__section_no-pt">
              <div class="g-new-product__block">
                <g-drop-content title="Описание игры">
                  <template v-slot:dropContent>
                    <div class="g-new-product__desc">
                      <p class="g-new-product__text">HITMAN™ 3 — восьмая часть легендарной серии Hitman и третий сезон HITMAN™, завершающий трилогию «World of Assassinations». Релиз игры состоялся 20 января 2021 года. Это первая часть во всей серии Hitman, которую IO Interactive издала самостоятельно.  восьмая часть легендарной серии Hitman и третий сезон HITMAN™, завершающий трилогию «World of Assassinations». Релиз игры состоялся 20 января 2021 года. </p>
                      <img class="g-new-product__video" src="/images/new-product-video.svg" alt="">
                    </div>
                  </template>
                </g-drop-content>
              </div>
            </section>

            <!--  Gallery  adapted = true -->
            <section class="g-new-product__section g-new-product__section_no-pt">
              <div class="g-new-product__block">
                <g-drop-content title="Галерея">
                  <template v-slot:dropContent>
                    <div class="g-new-product__line">
                      <div class="g-new-product__subblock g-new-product__subblock_img">
                        <img src="/images/new-product-2.svg" alt="">
                      </div>
                      <div class="g-new-product__subblock g-new-product__subblock_img">
                        <img src="/images/new-product-2.svg" alt="">
                      </div>
                      <div class="g-new-product__subblock g-new-product__subblock_img">
                        <img src="/images/new-product-2.svg" alt="">
                      </div>
                      <div class="g-new-product__subblock g-new-product__subblock_img">
                        <img src="/images/new-product-2.svg" alt="">
                      </div>
                    </div>
                  </template>
                </g-drop-content>
              </div>
            </section>
            
          </div>
        </b-col>
        
      </b-row>
    </b-container>
  </div>
</template>

<script>
import GDashboardNavigation from '~/components/dashboard/Navigation'
import ShowAll from '~/components/buttons/MainLink'
import GInput from '~/components/form-elements/Input'
import MainButton from '~/components/buttons/MainButton'
import GDropMenu from '~/components/DropMenu'
import GDropContent from '~/components/DropContent'
import icons from '~/mixins/icons'
export default {
  components: {GDropContent, GDropMenu, MainButton, GInput, ShowAll, GDashboardNavigation },
  mixins: [icons],
  mounted () {
  }
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'  
.g-product-search
  padding: 20px 24px
  background: #282439
  border-radius: 12px
  display: flex
  align-items: center
  justify-content: space-between
  +md
    flex-direction: column
    padding: 20px 16px
  &__btn
    +md
      width: 100%
      .button
        width: 100%
  &__input
    margin-right: 20px
    width: 100%
    +md
      margin-right: 0
      margin-bottom: 24px
.g-new-product
  &__video
    width: 100%
    margin-top: 24px
    +md
      margin-top: 16px
  &__desc
    padding-bottom: 32px
  &__sale
    margin-top: 8px
    +md
      margin-top: 4px
      .button
        padding: 14px
  &__nav
    +lg
      display: none
  &__tag
    display: flex
    align-items: flex-start
    flex-direction: column
    font-size: 16px
    line-height: 24px
    width: 100%
    .caption
      color: $gray
    .value
      color: $white
  &__arrow
    margin-left: auto
    display: block
  &__added
    color: $gray
    font-size: 14px
    line-height: 24px
    span
      text-decoration: underline
      color: $white
  &__subtitle
    font-weight: 600
    color: $white
    font-size: 18px
    line-height: 24px
  &__text
    color: $gray
    font-size: 16px
    line-height: 24px
    letter-spacing: -0.4px
  &__name
    color: $white
    font-weight: 600
    font-size: 24px
    line-height: 28px
    margin-bottom: 16px
  &__img
    width: 100%
    border-radius: 8px
    +md
      display: none
  &__section
    &_no-pt
      padding-top: 0 !important
    &_no-mb
      margin-bottom: 0 !important
    &:not(:first-child)
      padding-top: 16px
      border-top: 1px solid #9A93AA
      +md
        padding-top: 24px
        margin: 0 16px
    &:not(:last-child)
      margin-bottom: 32px
  &__block
    display: flex
    align-items: flex-start
    justify-content: space-between
    +xl
      flex-direction: column
    &_row
      +xl
        flex-direction: row
      +md
        flex-direction: column
  &__line
    display: flex
    align-items: center
    justify-content: space-between
    flex-wrap: wrap
  &__subblock
    width: calc(50% - 10px)
    margin-bottom: 24px
    +md
      width: 100%
      margin-bottom: 20px
    img
      width: 100%
    &_img
      +md
        margin-bottom: 12px
  &__left
    width: 26%
    +xl
      width: 100%
      margin-bottom: 20px
    &_row
      +xl
        width: 35%
      +md
        width: 100%  
        height: 302px
        background: url("/images/new-product.jpg") no-repeat
        background-size: cover
    &_mobile-none
      +xl
        display: none
  &__right
    width: calc(74% - 24px)
    +xl
      width: 100%
    &_row
      +xl
        width: calc(65% - 24px)
      +md
        width: 100%
        padding: 0 16px
  &__product
    background: #282439
    border-radius: 12px
    margin-top: 24px
    padding: 24px 24px 8px
    overflow: hidden
    +md
      padding: 0 0 8px
  &__search
    margin-bottom: 24px
  &__title
    margin: 16px 0 24px
    font-weight: 600
    font-size: 20px
    line-height: 28px
</style>

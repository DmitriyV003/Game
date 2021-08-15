<template>
  <div>
    <!-- Legal top  adapted = true   -->
    <section class="legal__top">
      <b-container>
        <bread-crumb :links="links" />
      </b-container>
    </section>

    <!-- Legal banner  adapted = true -->
    <section class="legal__banner">
      <b-container>
        <div class="g-banner__wrapper">
          <div class="g-banner">
            <h1 class="g-banner__title">Условия использования</h1>
            <img class="g-banner__img" src="/images/legal-1.png" alt="" />
          </div>
        </div>
      </b-container>
    </section>

    <section class="legal__section">
      <b-container>
        <!-- Section 0  adapted = true -->
        <div class="legal__content">
          <div class="legal__block">
            <p class="legal__text legal__text_mb">
              <span>Коммерческие условия</span> - это условия сотрудничества
              между экономическими агентами, существенно влияющие на
              рентабельность сотрудничества для каждого из них.
            </p>
            <p class="legal__text">
              Для понимания какова рентабельность работы вашей компании с
              конкретным клиентом/клиентами, следует составлять небольшой
              финансовый план (P&L) по этому клиенту. В этом плане необходимо
              учесть доходы и все существенные затраты, вытекающие из
              предоставленных партнёру коммерческих условий.
            </p>
          </div>
        </div>

        <h6 class="legal__title">Система коммерческих условий</h6>

        <!-- Section 1  adapted = true -->
        <div class="legal__content">
          <div class="legal__block">
            <p class="legal__text legal__text_mb">
              Условно разделим все коммерческие условия на стандартные и
              нестандартные.
            </p>
            <p class="legal__text">
              <span>Стандартные коммерческие условия</span> - это основные
              параметры продажи товара на выбранном рынке.
            </p>
            <p class="legal__text">
              Обычно они - явные и прямо обсуждаются сторонами:
            </p>
          </div>

          <div>
            <div class="legal__subblock">
              <div class="legal__subtitle">
                <span class="circle">1</span>
                <span class="text">Цены и скидки</span>
              </div>
              <p class="legal__text">
                ​Товар может продаваться по фиксированной цене или при
                определённых обстоятельствах могут предоставляться скидки.
              </p>
              <p class="legal__text">
                Также могут быть зафиксированы обстоятельства, при которых товар
                будет продаваться дороже регулярной цены.
              </p>
            </div>

            <div class="legal__subblock">
              <div class="legal__subtitle">
                <span class="circle">2</span>
                <span class="text">условия оплаты</span>
              </div>
              <p class="legal__text">
                ​Продажи могут осуществляться в предоплату, или с расчётом в
                момент покупки, или с отсрочкой оплаты.
              </p>
              <p class="legal__text">
                Стороны могут использовать аккредитив. Очень часто фиксируется
                кредитный лимит, сверх которого поставки не осуществляются.
              </p>
            </div>

            <div class="legal__subblock">
              <div class="legal__subtitle">
                <span class="circle">3</span>
                <span class="text">бонусы</span>
              </div>
              <p class="legal__text">
                ​​Частью регулярных коммерческих условий являются различные
                бонусы и премии покупателям, которые могут предоставляться
                клиентам обусловленно (за объем закупок, за регулярность покупок
                и пр.), или же могут начисляться безусловно. Бонусы могут
                оплачиваться клиенту по истечении определённого периода, или же
                в момент покупки.
              </p>
            </div>

            <div class="legal__subblock">
              <div class="legal__subtitle">
                <span class="circle">4</span>
                <span class="text">условия поставки</span>
              </div>
              <p class="legal__text">
                ​Товар может отгружаться клиенту сразу либо же его необходимо
                заранее заказывать. Часто бывает зависимость сроков поставки от
                цены товара или объёма поставки. Чем быстрее покупатель хочет
                получить товар, тем выше цена. Или чем больше покупает, тем
                дольше срок поставки. У многих продавцов, особенно на рынке В2В,
                существует минимальная партия заказа. А у некоторых существует
                максимальная партия. ​Важным стандартным коммерческим условием
                является определение, чьими силами и за чей счёт доставляется
                товар до клиента. Иногда предлагается только самовывоз.
              </p>
            </div>
          </div>
        </div>

        <!-- Section 2  adapted = true -->
        <div class="legal__content">
          <div class="legal__block">
            <p class="legal__text">
              <span>неСтандартные коммерческие условия</span> - это
              дополнительные параметры сотрудничества, которые не очевидно, но
              существенно влияют на экономику продаж конкретному клиенту. К ним
              же отнесём «скрытые» условия, когда особые требования
              предъявляются к различным «второстепенным» аспектам будущего
              сотрудничества, но это требует дополнительных усилий и затрат
              сверх стандартной технологии обслуживания клиентов.
            </p>
          </div>

          <div>
            <div class="legal__subblock">
              <div class="legal__subtitle">
                <span class="circle">1</span>
                <span class="text">Дополнительные условия по доставке</span>
              </div>
              <p class="legal__text">
                ​Могут быть прописаны особые требования к транспорту, на котором
                доставляется товар.
              </p>
              <p class="legal__text legal__text_mb">
                Часто крупные клиенты заявляют нестандартные требования к
                упаковке этого груза, что может его сильно удорожить.
              </p>
              <p class="legal__text">
                Бывают требования по доставке в определённые дни или часы,
                иногда исключительно в ночное время.
              </p>
              <p class="legal__text">
                Интересный нюанс для доставки в крупных городах, особенно в
                Москве - доставка в Центр города, куда требуется специальное
                разрешение, стоящее дополнительных денег.
              </p>
            </div>

            <div class="legal__subblock">
              <div class="legal__subtitle">
                <span class="circle">2</span>
                <span class="text">Различные обеспечения</span>
              </div>
              <p class="legal__text">
                ​В случае продаж товара в рамках госзакупок, да и по тендерам
                ряда крупных покупателей требуется предварительно внести
                финансовое обеспечение. Которое возвращается только при
                определённых условиях.
              </p>
            </div>

            <div class="legal__subblock">
              <div class="legal__subtitle">
                <span class="circle">3</span>
                <span class="text">гарантии</span>
              </div>
              <p class="legal__text">
                Тема гарантий – это целый пласт отношений продавца и клиента.
                Гарантии качества продукции – это норма и не является скрытым
                коммерческим условием. Но часто требуется предоставить
                расширенные гарантии, сверх средне-рыночных, либо же
                предъявляются нестандартные требования к процессу рассмотрения
                рекламаций – вот это уже следует учитывать как дополнительные
                коммерческие условия.
              </p>
            </div>

            <div class="legal__subblock">
              <div class="legal__subtitle">
                <span class="circle">4</span>
                <span class="text">требования к документообороту</span>
              </div>
              <p class="legal__text">
                Многие крупные партнёры требуют оформления специальных
                документов или требуют оформлять стандартные документы по их
                особой форме. А часть клиентов требует вести документооборот с
                ними, используя системы ЭДО.
              </p>
            </div>

            <div class="legal__subblock">
              <div class="legal__subtitle">
                <span class="circle">5</span>
                <span class="text">Предоставление дополнительных услуг</span>
              </div>
              <p class="legal__text">
                На различных рынках и в различных сегментах крупные клиенты
                требуют оказания им специальных услуг, которые также необходимо
                считать коммерческими условиями.​
              </p>
              <p class="legal__text">
                Например, торговые сети могут ожидать от поставщика
                предоставления мерчендайзеров. Дистрибьюторы - рекламные
                материалы и оплату промо-кампаний. Государственные организации -
                согласие на оплату частями. Какие-то клиенты запрашивают
                бесплатные образцы продукции и торговое оборудование. И многое
                другое - что может радикально повлиять на экономику
                сотрудничества.
              </p>
            </div>

            <div class="legal__subblock">
              <div class="legal__subtitle">
                <span class="circle">6</span>
                <span class="text">Штрафы</span>
              </div>
              <p class="legal__text">
                Мы не могли обойти стороной штрафы. На рынке применяется
                множество видов штрафов, как к поставщику, так и к покупателю.
              </p>
              <p class="legal__text">
                Многие из них направлены на стимулирование контрагента точно
                выполнять условия договора. ​
              </p>
              <p class="legal__text">
                ​Но многие навязываются более сильными игроками более слабым с
                целью извлечения дополнительного дохода.
              </p>
              <p class="legal__text">
                В такой ситуации штраф можно рассматривать как дополнительную
                плату за сотрудничество.
              </p>
            </div>
          </div>
        </div>
      </b-container>
    </section>
  </div>
</template>

<script>
import BreadCrumb from '~/components/BreadCrumb'
export default {
  name: 'LegalPage',
  components: { BreadCrumb },
  layout: 'default',
  data: () => {
    return {
      links: [
        { to: '/', label: 'Главная' },
        { to: '/legal', label: 'Юридическая информация' },
      ],
    }
  },
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.g-banner
  padding: 42px
  background: linear-gradient(95.48deg, #120F28 -4.94%, #691E66 116.71%)
  border-radius: 12px
  position: relative
  max-height: 160px
  +md
    padding: 40px 0 32px 16px
  &__wrapper
    overflow: hidden
    padding-top: 40px
  &__img
    height: 200px
    position: absolute
    bottom: 0
    right: 0
    +lg
      position: absolute
      bottom: 0
      right: -308px
      margin: 0
    +md
      bottom: -20px
    +sm
      height: 150px
      right: -235px
      bottom: 0
  &__title
    max-width: 40%
.legal
  &__section
    padding-bottom: 46px
    +md
      padding-bottom: 28px
  &__subtitle
    display: flex
    align-items: center
    margin-bottom: 16px
    .circle
      width: 36px
      height: 36px
      border-radius: 50%
      display: flex
      align-items: center
      justify-content: center
      margin-right: 16px
      flex-shrink: 0
      color: $white
      background: #643EFF
    .text
      font-weight: 600
      color: $white
      text-transform: uppercase
      font-size: 16px
      line-height: 20px
  &__subblock
    &:not(:last-child)
      padding-bottom: 16px
      border-bottom: 1px solid rgba(154, 147, 170, 0.3)
    &:not(:first-child)
      padding-top: 24px
  &__block
    margin-bottom: 24px
  &__content
    background: #282439
    border-radius: 12px
    padding: 20px
    +md
      padding: 20px 16px
    &:not(:last-child)
      margin-bottom: 24px
      +md
        margin-bottom: 40px
  &__title
    margin-bottom: 24px
    margin-top: 40px
  &__text
    font-size: 16px
    color: white(0.8)
    line-height: 24px
    &_mb
      margin-bottom: 16px
    span
      color: $white
      text-transform: uppercase
      font-weight: 600
  &__banner
    padding-bottom: 24px
  &__top
    padding: 40px 0 0
    +md
      padding-top: 27px
</style>

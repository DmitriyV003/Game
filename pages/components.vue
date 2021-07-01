<template>
  <b-container class="pt-4 pb-4">
    <section class="section">
      <section-header title="import GPromoBanner from '~/components/banners/PromoBanner'" />
      <g-promo-banner class="mb-4" />
    </section>

    <section class="section">
      <section-header title="import CommentCard from '~/components/cards/CommentCard'" />
      <comment-card />
    </section>

    <section class="section">
      <section-header title="import GameCard from '~/components/cards/GameCard'" />
      <game-card style="width: 270px" />
    </section>

    <section class="section">
      <section-header title="import GenreCard from '~/components/cards/GenreCard'" />
      <genre-card name="sdfd" image="sdfgd" style="width: 270px" />
    </section>

    <section class="section">
      <section-header title="import GNewsCard from '~/components/cards/NewsCard'" />
      <g-news-card /> 
    </section>

    <section class="section">
      <section-header title="import GProposalCard from '~/components/cards/ProposalCard'" />
      <g-proposal-card />
    </section>

    <section class="section">
      <section-header title="import Rating from '~/components/cards/Rating'" />
      <rating :value="4.9" />
    </section>

    <section class="section">
      <section-header title="import ReviewCard from '~/components/cards/ReviewCard'" />
      <review-card />
    </section>

    <section class="section">
      <section-header title="import GReviewPageCard from '~/components/cards/ReviewPageCard'" />
      <g-review-page-card />
    </section>

    <section class="section">
      <section-header title="import GCartItem from '~/components/cart/Item'" />
      <g-cart-item />
    </section>

    <section class="section">
      <section-header title="import GKeyItem from '~/components/cart/KeyItem'" />
      <g-key-item />
    </section>

    <section class="section">
      <section-header title="import GLikeDislike from '~/components/cart/LikeDislike'" />
      <g-like-dislike />
    </section>

    <section class="section">
      <section-header title="'import GPaymentMethod from '~/components/cart/PaymetMethod'" />
      <g-payment-method image="" name="asdfs" :id="1" bg="" />
    </section>

    <section class="section">
      <section-header title="import GReceiveCartItem from '~/components/cart/ReceiveItem'" />
      <g-receive-cart-item />
    </section>

    <section class="section">
      <section-header title="import GBecomeSeller from '~/components/dashboard/BecomeSeller'" />
      <g-become-seller />
    </section>

    <section class="section">
      <section-header title="import GPurchased from '~/components/dashboard/GPurchased'" />
      <g-purchased />
    </section>

    <section class="section">
      <section-header title="import GUserAvatar from '~/components/dashboard/GUserAvatar'" />
      <g-user-avatar />
    </section>

    <section class="section">
      <section-header title="import GUserData from '~/components/dashboard/GUserData'" />
      <g-user-data />
    </section>

    <section class="section">
      <section-header title="import GPromo from '~/components/dashboard/PromoCode'" />
      <g-promo />
    </section>

    <section class="section">
      <section-header title="import GPurchaseItem from '~/components/dashboard/PurchaseItem'" />
      <g-purchase-item style="width: 270px" />
    </section>

    <section class="section">
      <section-header title="import GSaleItem from '~/components/dashboard/SaleItem'" />
      <g-sale-item style="width: 270px;" />
    </section>

    <section class="section">
      <section-header title="import GSortButton from '~/components/dashboard/SortButton'" />
      <div style="display: flex;">
        <g-sort-button label="szdf" />
      </div>
    </section>

    <section class="section">
      <section-header title="import GCheckBox from '~/components/form-elements/GCheckbox'" />
      <g-check-box value="opt1" val="opt1" count="5"  label="sfd" />
      <g-check-box value="opt2" val="opt2" count="5"  label="sfd" />
    </section>

    <section class="section">
      <section-header title="import GInput from '~/components/form-elements/Input'" />
      <g-input />
    </section>

    <section class="section">
      <section-header title="import GSellerComment from '~/components/items/CommentItem'" />
      <g-seller-comment style="width: 270px" />
    </section>

    <section class="section">
      <section-header title="import GInfoItem from '~/components/items/InfoItem'" />
      <g-info-item />
    </section>

    <section class="section">
      <section-header title="import GTypeItem from '~/components/items/TypeItem'" />
      <g-type-item style="width: 50%" />
    </section>

    <section class="section">
      <section-header title="import Balance from '~/components/menu/Balance'" />
      <balance :balance="25156" style="width: 270px" />
    </section>

    <section class="section">
      <section-header title="import Profile from '~/components/menu/Profile'" />
      <profile style="width: 270px;" />
    </section>

    <section class="section">
      <section-header title="import Search from '~/components/menu/Search'" />
      <search style="width: 270px" />
    </section>

    <section class="section">
      <section-header title="import TopMenu from '~/components/menu/TopMenu'" />
      <top-menu />
    </section>

    <section class="section">
      <section-header title="import GCommentSlider from '~/components/slider/CommentSlider'" />
      <g-comment-slider />
    </section>

    <section class="section" style="position: relative">
      <section-header title="import GGameNewsSlider from '~/components/slider/GameNews'" />
      <g-game-news-slider />
    </section>

    <section class="section" style="position: relative">
      <section-header title="import GProposalSlider from '~/components/slider/ProposalSlider'" />
      <g-proposal-slider />
    </section>

    <section class="section" style="position: relative">
      <section-header title="import GReviewSlider from '~/components/slider/ReviewSlider'" />
      <g-review-slider />
    </section>

    <section class="section" style="position: relative">
      <section-header title="import GReviewsPageSlider from '~/components/slider/ReviewsPageSlider'" />
      <g-reviews-page-slider />
    </section>

    <section class="section" style="position: relative">
      <section-header title="import GInfoBlock from '~/components/GInfoBlock'" />
      <g-info-block title="dsfgd" text="sdfg" />
    </section>

    <section class="section" style="position: relative">
      <section-header title="import Avatar from '~/components/Avatar'" />
      <avatar name="sdfg" caption="sdfdg" size="xl" />
    </section>

    <section class="section" style="position: relative">
      <section-header title="import Banner from '~/components/Banner'" />
      <banner title="sdgfdg" text="gfhjhdgr dfh dfhdf hfdh " image="sdvdfg" button-label="rg" />
    </section>

    <section class="section" style="position: relative">
      <section-header title="import Chip from '~/components/Chip'" />
      <chip label="dfghjk" />
    </section>

    <section class="section" style="position: relative">
      <section-header title="import CustomIcon from '~/components/CustomIcon'" />
      <custom-icon />
    </section>

    <section class="section" style="position: relative">
      <section-header title="import GCase from '~/components/cards/CaseCard'" />
      <g-case style="width: 270px" />
    </section>

    <section class="section" style="position: relative">
      <section-header title="import GCommentForm from '~/components/GCommentForm'" />
      <g-comment-form />
    </section>

    <section class="section" style="position: relative">
      <section-header title="import GPrice from '~/components/GPrice'" />
      <g-price />
    </section>

    <section class="section" style="position: relative">
      <section-header title="import GKey from '~/components/Key'" />
      <g-key value="2" />
    </section>

    <section class="section" style="position: relative">
      <section-header title="import GMessage from '~/components/Message'" />
      <g-message />
    </section>

    <section class="section" style="position: relative">
      <section-header title="import GPagination from '~/components/Pagination'" />
      <g-pagination />
    </section>
    
  </b-container>
</template>
<script>
  import GPromoBanner from '~/components/banners/PromoBanner'
  import SectionHeader from '~/components/SectionHeader'
  import CommentCard from '~/components/cards/CommentCard'
  import GameCard from '~/components/cards/GameCard'
  import GenreCard from '~/components/cards/GenreCard'
  import GNewsCard from '~/components/cards/NewsCard'
  import GProposalCard from '~/components/cards/ProposalCard'
  import Rating from '~/components/cards/Rating'
  import ReviewCard from '~/components/cards/ReviewCard'
  import GReviewPageCard from '~/components/cards/ReviewPageCard'
  import GCartItem from '~/components/cart/Item'
  import GKeyItem from '~/components/cart/KeyItem'
  import GLikeDislike from '~/components/cart/LikeDislike'
  import GPaymentMethod from '~/components/cart/PaymetMethod'
  import GReceiveCartItem from '~/components/cart/ReceiveItem'
  import GBecomeSeller from '~/components/dashboard/BecomeSeller'
  import GPurchased from '~/components/dashboard/GPurchased'
  import GUserAvatar from '~/components/dashboard/GUserAvatar'
  import GUserData from '~/components/dashboard/GUserData'
  import GPromo from '~/components/dashboard/PromoCode'
  import GPurchaseItem from '~/components/dashboard/PurchaseItem'
  import GSaleItem from '~/components/dashboard/SaleItem'
  import GSortButton from '~/components/dashboard/SortButton'
  import GCheckBox from '~/components/form-elements/GCheckbox'
  import GInput from '~/components/form-elements/Input'
  import GSellerComment from '~/components/items/CommentItem'
  import GInfoItem from '~/components/items/InfoItem'
  import GTypeItem from '~/components/items/TypeItem'
  import Balance from '~/components/menu/Balance'
  import Profile from '~/components/menu/Profile'
  import Search from '~/components/menu/Search'
  import TopMenu from '~/components/menu/TopMenu'
  import GCommentSlider from '~/components/slider/CommentSlider'
  import GGameNewsSlider from '~/components/slider/GameNews'
  import GProposalSlider from '~/components/slider/ProposalSlider'
  import GReviewSlider from '~/components/slider/ReviewSlider'
  import GReviewsPageSlider from '~/components/slider/ReviewsPageSlider'
  import GInfoBlock from '~/components/GInfoBlock'
  import Avatar from '~/components/Avatar'
  import Banner from '~/components/Banner'
  import Chip from '~/components/Chip'
  import CustomIcon from '~/components/CustomIcon'
  import GCase from '~/components/cards/CaseCard'
  import GCommentForm from '~/components/GCommentForm'
  import GPrice from '~/components/GPrice'
  import GKey from '~/components/Key'
  import GMessage from '~/components/Message'
  import GPagination from '~/components/Pagination'
  export default {
    components: {
      GPagination,
      GMessage,
      GKey,
      GPrice,
      GCommentForm,
      GCase,
      CustomIcon,
      Chip,
      Banner,
      Avatar,
      GInfoBlock,
      GReviewsPageSlider,
      GReviewSlider,
      GProposalSlider,
      GGameNewsSlider,
      GCommentSlider,
      TopMenu,
      Search,
      Profile,
      Balance,
      GTypeItem,
      GInfoItem,
      GSellerComment,
      GInput,
      GCheckBox,
      GSortButton,
      GSaleItem,
      GPurchaseItem,
      GPromo,
      GUserData,
      GUserAvatar,
      GPurchased,
      GBecomeSeller,
      GReceiveCartItem,
      GPaymentMethod,
      GLikeDislike,
      GKeyItem,
      GCartItem,
      GReviewPageCard,
      ReviewCard,
      Rating, GProposalCard, GNewsCard, GenreCard, GameCard, CommentCard, SectionHeader, GPromoBanner}
  }
</script>

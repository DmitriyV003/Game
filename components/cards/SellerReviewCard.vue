<template>
    <div>
        <div class="g-seller-review-card">
            <div class="g-seller-review-card__wrapper">
                <rating
                    class="g-seller-game-card__rating"
                    :value="rating"
                    v-if="rating !== null && rating !== 0"
                />

                <img 
                    :src="image" 
                    alt=""
                    class="g-seller-review-card__img"
                >
                
                <div class="g-seller-review-card__name">{{ name }}</div>

                <div class="g-seller-review-card__caption">{{ caption }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import Rating from '~/components/cards/Rating'
export default {
    name: 'GSellerReviewCard',
    components: { Rating },
    props: {
        name: {
            type: String,
            default: () => 'Name'
        },
        image: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            default: () => null
        },
        caption: {
            type: String,
            default: () => 'caption'
        },
    }
}  
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'   
.g-seller-review-card
    width: 380px !important
    display: flex
    align-items: center
    justify-content: center
    background: rgba(100, 62, 255, 0.15)
    padding: 28px
    border-radius: 12px
    &__caption
        font-size: 14px
        line-height: 20px
        color: $gray
        letter-spacing: -0.4px
    &__name
        font-weight: 600
        color: $white
        margin-bottom: 4px
        font-size: 16px
        line-height: 20px
    &__img
        margin-bottom: 12px
        width: 80%
    &__wrapper
        position: relative
        display: flex
        align-items: center
        justify-content: center
        flex-direction: column
</style>

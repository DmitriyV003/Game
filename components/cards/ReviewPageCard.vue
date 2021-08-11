<template>
    <div>
        <nuxt-link :to="`/product/${id}`">
            <div class="g-review-page-card__wrapper">
                <div class="g-review-page-card">
                    <img class="g-review-page-card__image" :src="image" alt="">
                </div>
            </div>
        </nuxt-link>
    </div>
    
</template>

<script>
    export default {
        name: 'GReviewPageCard',
        props: {
            image: {
                type: String,
                required: true
            },
            id: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="sass">
    .g-review-page-card
        width: 173px
        border-radius: 12px
        &__wrapper
            margin-right: 16px
        &__image
            width: 100%
            border-radius: 12px
</style>

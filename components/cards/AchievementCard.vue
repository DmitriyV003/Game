<template>
    <div class="g-achievement-card">
        <div class="g-achievement-card__img">
            <img :src="image" alt="">
        </div>
        <div class="g-achievement-card__title">{{ name }}</div>
        <div class="g-achievement-card__desc">{{ desc }}</div>
        <div class="g-achievement-card__date">{{ date }}</div>
    </div>
</template>

<script>
    export default {
        name: 'GAchievementCard',
        props: {
            name: {
                type: String,
                default: () => 'Name'
            },
            desc: {
                type: String,
                default: () => 'За покупку первой игры'
            },
            date: {
                type: String,
                default: () => 'Получено 20.10.2020 г.'
            },
            image: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="sass">
    @import 'theme/_vars'
    @import 'theme/_mix'
    .g-achievement-card
        padding: 20px 12px 22px 12px
        background: #282439
        border-radius: 12px
        width: 270px !important
        &__date
            color: $gray
            font-size: 12px
            line-height: 18px
            margin-top: 20px
            text-align: center
        &__desc
            margin-top: 12px
            font-weight: 600
            font-size: 12px
            line-height: 16px
            text-align: center
            color: rgba(255, 153, 0, 1)
        &__title
            font-weight: 600
            text-transform: capitalize
            text-align: center
            font-size: 16px
            line-height: 20px
            color: white(1)
        &__img
            width: 149px
            height: 149px
            border-radius: 50%
            border: 5px solid dark-blue(0.3)
            margin-bottom: 16px
            margin-left: auto
            margin-right: auto
            img
                width: 100%
                height: 100%
                border-radius: 50%
</style>

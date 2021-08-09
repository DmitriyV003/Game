<template>
    <div>
        <nuxt-link :to="`/comments/${id}`">
            <div 
                class="comment-card" 
                :class="'comment-card_' + adaptiveSize"
            >
                <div
                    class="comment-card__game"
                    :class="'comment-card__game_' + adaptiveSize"
                >
                    <div
                        class="comment-card__img"
                        :class="'comment-card__img_' + adaptiveSize"
                    >
                        <rating
                            size="sm"
                            class="comment-card__rating"
                            :class="'comment-card__rating_' + adaptiveSize"
                            v-if="rating !== 0"
                            :value="rating"
                        />
                        <img
                            :src="image" alt=""
                            :class="'comment-card__picture_' + adaptiveSize"
                            class="comment-card__picture">
                    </div>
                    <span
                        class="comment-card__game-name"
                        :class="'comment-card__game-name_' + adaptiveSize"
                    >{{ name }}</span>
                </div>

                <div
                    class="comment-card__content"
                    :class="'comment-card__content_' + adaptiveSize"
                >
                    <div
                        class="comment-card__header"
                        :class="'comment-card__header_' + adaptiveSize"
                    >
                        <avatar
                            :nickname="nickname"
                            :image="avatar"
                        />
                        <span
                            class="comment-card__date text-14 text-gray"
                            :class="'comment-card__date_' + adaptiveSize"
                        >{{ (new Date(date)).toDateString() }}</span>
                    </div>

                    <p
                        class="comment-card__text text-normal"
                        :class="'comment-card__text_' + adaptiveSize"
                    >{{ text }}</p>

                    <nuxt-link
                        tag="button"
                        to="/comments" class="button-reboot comment-card__link text-weight-500"
                        :class="'comment-card__link_' + adaptiveSize"
                    >
                        <span>Смотреть все</span>
                        <chevron-right-icon/>
                    </nuxt-link>

                    <div
                        class="comment-card__footer"
                        :class="'comment-card__footer_' + adaptiveSize"
                    >
                        <span class="text-14 text-gray">{{ new Date(date).toDateString() }}</span>
                    </div>
                </div>

            </div>
        </nuxt-link>
    </div>
</template>

<script>
    import Rating from '~/components/cards/Rating'
    import Avatar from '~/components/Avatar'
    import icons  from '~/mixins/icons'

    export default {
        components: { Avatar, Rating },
        mixins: [icons],
        props: {
            id: {
                type: String,
                required: true
            },
            name: {
                type: String,
                default: () => 'name'
            },
            image: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                default: () => 0
            },
            avatar: {
                type: String,
                default: () => null
            },
            nickname: {
                type: String,
                required: true
            },
            text: {
                type: String,
                required: true
            },
            date: {
                type: String,
                default: () => new Date().toDateString()
            },
            adaptiveSize: {
                type: String,
                default: () => 'xl'
            }
        }
    }
</script>

<style lang="sass">
    @import 'theme/_vars'
    @import 'theme/_mix'
    .comment-card
        display: flex
        background: rgba(40, 36, 57, 1)
        border-radius: 12px

        &_xl
            +xl
                flex-direction: column
                align-items: center
                width: 270px

        &_md
            +md
                flex-direction: column
                align-items: center
                width: 270px

        &__date
            margin-left: auto
            &_xl
                +xl
                    display: none

            &_md
                +md
                    display: none

        &__footer
            display: none

            &_xl
                +xl
                    display: block
                    padding-top: 16px
                    border-top: 1px solid rgba(154, 147, 170, 0.5)

            &_md
                +md
                    display: block
                    padding-top: 16px
                    border-top: 1px solid rgba(154, 147, 170, 0.5)

            span
                color: $gray

        &__text
            color: white(1)
            font-size: 15px

            &_xl
                +xl
                    font-size: 12px
                    line-height: 18px
                    color: white(0.8)

            &_md
                +md
                    font-size: 12px
                    line-height: 18px
                    color: white(0.8)

        &__link
            display: flex
            align-items: center
            font-size: 14px
            line-height: 24px
            color: dark-blue(1)
            margin-top: 35px

            &_xl
                +xl
                    margin: 4px 0 16px

            &_md
                +md
                    margin: 4px 0 16px

        &__header
            display: flex
            align-items: center
            justify-content: space-between
            margin-bottom: 20px
            width: 100%

            &_xl
                +xl
                    margin-bottom: 12px

            &_md
                +md
                    margin-bottom: 12px

        &__content
            padding: 24px 20px
            border-radius: 0 12px 12px 0
            display: flex
            flex-direction: column
            justify-content: space-between
            width: 100%

            &_xl
                +xl
                    padding: 16px

            &_md
                +md
                    padding: 16px

        &__rating
            position: absolute
            left: 0
            top: 20px

            &_xl
                +xl
                    left: -20px
                    top: 0

            &_md
                +md
                    left: -20px
                    top: 0

        &__game-name
            font-weight: normal
            letter-spacing: -0.4px
            font-size: 14px
            line-height: 20px
            color: white(1)
            text-align: center
            position: relative
            z-index: 5

            &_xl
                +xl
                    text-align: left
                    margin-top: auto
                    font-weight: 600
                    text-transform: uppercase
                    font-size: 16px
                    line-height: 20px

            &_md
                +md
                    text-align: left
                    margin-top: auto
                    font-weight: 600
                    text-transform: uppercase
                    font-size: 16px
                    line-height: 20px

        &__img
            position: relative
            margin-bottom: 12px

        &__picture
            width: 100%

            &_xl
                +xl
                    display: none

            &_md
                +md
                    display: none

        &__game
            border-radius: 12px 0 0 12px
            background: dark-blue(0.15)
            padding: 30px 33px 39px 32px
            display: flex
            flex-direction: column
            align-items: center
            flex-shrink: 0
            max-width: 173px
            justify-content: space-between

            &_xl
                +xl
                    padding: 16px 20px
                    max-width: initial
                    position: relative
                    width: 100%
                    min-height: 168px
                    border-radius: 12px 12px 0 0
                    background: url("/images/comment-1-1.svg")
                    background-size: cover
                    align-items: flex-start
                    &::before
                        content: ''
                        width: 100%
                        height: 100%
                        border-radius: 12px 12px 0 0
                        position: absolute
                        top: 0
                        left: 0
                        background-size: cover
                        background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)

            &_md
                +md
                    padding: 16px 20px
                    max-width: initial
                    position: relative
                    width: 100%
                    min-height: 168px
                    border-radius: 12px 12px 0 0
                    background: url("/images/comment-1-1.svg")
                    background-size: cover
                    align-items: flex-start
                    &::before
                        content: ''
                        width: 100%
                        height: 100%
                        border-radius: 12px 12px 0 0
                        position: absolute
                        top: 0
                        left: 0
                        background-size: cover
                        background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%)
</style>

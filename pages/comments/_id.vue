<template>
    <div>
        <!-- News top  adapted = true   -->
        <section>
            <b-container>
                <div class="news-card__top">
                    <bread-crumb :links="links"/>
                </div>
            </b-container>
        </section>

        <!-- News card  adapted =  true  -->
        <section v-if="comment !== null">
            <b-container>
                <h1 class="news-card__h1">{{ comment.itemName }}</h1>
                <div class="news-card__content">
                    <div class="news-card__image">
                        <img 
                            class="news-card__img"
                            src="/images/news-4.png" 
                            alt=""
                        >
                        <h1 class="news-card__title">{{ comment.itemName }}</h1>
                        <p class="news-card__text">O Interactive</p>

                        <rating
                            size="sm"
                            class="news-card__rating"
                            :value="Number(comment.itemRate)"/>
                    </div>

                    <div class="news-card__block">
                        <div class="news-card__views">
                            <avatar
                                :nickname="comment.userNickname"
                                :image="comment.userAvatar"
                            />

                            <div class="news-card__stats">
                                <div class="news-card__stat">
                                    <eye-icon class="icon"/>
                                    <span class="text">8</span>
                                </div>
                                <div class="news-card__stat">
                                    <message-icon class="icon"/>
                                    <span class="text">24</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p class="news-card__text">{{ comment.userFeedbackText }}</p>
                        </div>

                    </div>
                </div>
            </b-container>
        </section>

        <!-- Genres  adapted = true // integrate = true -->
        <section 
            class="section news-card__section"
            v-if="additionalComments !== null && comment !== null"
        >
            <b-container>
                <section-header
                    :title="`Другие отзывы автора - ${comment.userNickname}`"
                />
                
                <g-additional-comments-slider
                    :data="additionalComments"
                />
            </b-container>
        </section>
    </div>
</template>

<script>
    import BreadCrumb                from '~/components/BreadCrumb'
    import icons                     from '~/mixins/icons'
    import GMessage                  from '~/components/Message'
    import Avatar                    from '~/components/Avatar'
    import GInput                    from '~/components/form-elements/Input'
    import MainButton                from '~/components/buttons/MainButton'
    import Rating                    from '~/components/cards/Rating'
    import { mapState }              from 'vuex'
    import SectionHeader             from '~/components/SectionHeader'
    import GAdditionalCommentsSlider from '~/components/slider/AdditionalCommentsSlider'

    export default {
        name: 'GCommentPage',
        mixins: [icons],
        components: { GAdditionalCommentsSlider, SectionHeader, Rating, MainButton, GInput, Avatar, GMessage, BreadCrumb },
        async mounted() {
            try {
                await this.$store.dispatch ('comments/getCommentById', this.$route.params.id)
                await this.$store.dispatch ('comments/getAdditionalComments', this.$route.params.id)

                this.links.push({ to: `/comments/${this.$route.params.id}`, label: this.comment.itemName })
            } catch (e) {
                this.$bvToast.toast('Ошибка загрузки страницы!', {
                    title: 'Что-то пошло не так(',
                    variant: 'danger',
                    solid: true,
                    appendToast: true
                })
            }
        },
        computed: {
            ...mapState ({
                comment: state => state.comments.comment,
                additionalComments: state => state.comments.additionalComments
            })
        },
        data: () => {
            return {
                links: [
                    { to: '/', label: 'Главная' },
                    { to: '/comments', label: 'Отзывы' }
                ]
            }
        }
    }
</script>

<style lang="sass">
    @import 'theme/_vars'
    @import 'theme/_mix'
    .news-card
        &__section
            margin-top: 32px
            padding-bottom: 48px
            +lg
                padding-bottom: 28px
        &__h1
            padding-bottom: 16px
            border-bottom: 1px solid rgba(154, 147, 170, 0.5)
            margin-bottom: 24px
        &__rating
            left: 0
            top: 28px
            position: absolute

        &__image
            align-items: flex-start
            justify-content: center
            flex-direction: column
</style>

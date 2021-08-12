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
                                    <vk-icon/>
                                </span>

                                <span class="news-card__social">
                                    <fb-icon/>
                                </span>
                            </div>

                            <span class="news-card__caption">Опубликовано {{ new Date(news.newsUpdatedAt).toUTCString() }}</span>
                        </div>

                        <div 
                            class="news-card__messages"
                            v-if="news.newsComments.length > 0"
                        >
                            <g-message-tree :data="news.newsComments" />
                        </div>

                        <form @submit.prevent="postCreateNewsComment" class="news-card__bottom">
                            <avatar 
                                :image="user === null ? null : user.avatar"
                            />

                            <g-input 
                                class="news-card__input" 
                                placeholder="Оставьте комментарий"
                                v-model="$v.form.text.$model"
                            />

                            <button 
                                class="button-reboot news-card__btn button_primary"
                                type="submit"
                                :disabled="disabled || $v.$invalid"
                                :class="{ 'button_disabled': disabled || $v.$invalid }"
                            >
                                <span class="text">отправить</span>
                                <img class="icon" src="/images/icons/arrow-up.svg" alt="">
                            </button>
                        </form>

                    </div>
                </div>
            </b-container>
        </section>
    </div>
</template>

<script>
    import BreadCrumb               from '~/components/BreadCrumb'
    import icons                    from '~/mixins/icons'
    import GMessage                 from '~/components/Message'
    import Avatar                   from '~/components/Avatar'
    import GInput                   from '~/components/form-elements/Input'
    import MainButton               from '~/components/buttons/MainButton'
    import { mapGetters, mapState } from 'vuex'
    import GMessageTree             from '~/components/messages/MessageTree'
    import { eventBus }                   from '~/plugins/event-bus'
    import { email, maxLength, required } from 'vuelidate/lib/validators'

    export default {
        name: 'NewsPage',
        mixins: [icons],
        components: { GMessageTree, MainButton, GInput, Avatar, GMessage, BreadCrumb },
        data: () => {
            return {
                links: [
                    { to: '/', label: 'Главная' },
                    { to: '/news', label: 'Новости' }
                ],
                form: {
                    text: null,
                    parentId: null
                },
                disabled: false,
                eventBus
            }
        },
        validations: {
            form: {
                text: {
                    required,
                    maxLength: maxLength(255)
                }
                
            }
        },
        methods: {
            async postCreateNewsComment() {
                this.disabled = true
                try {
                    const data = {
                        text: this.form.text,
                        newsId: this.$route.params.id,
                    }
                    
                    if (this.form.parentId !== null) {
                        data.parentId = this.form.parentId
                    }
                    await this.$store.dispatch ('news/postCreateNewsComment', data)
                    
                    this.form.text = null
                    this.form.parentId = null
                } catch (e) {
                    // TODO notification
                } finally {
                    this.disabled = false
                }
            }
        },
        computed: {
            ...mapState ({
                news: state => state.news.news,
                user: state => state.user.user
            })
        },
        async mounted() {
            this.eventBus.$on('onAnswer', (id) => {
                this.form.parentId = id
            })
            
            try {
                await this.$store.dispatch ('news/getNewsById', this.$route.params.id)
                this.links.push ({
                    to: '/news/' + this.news.newsId,
                    label: this.news.newsName
                })
            } catch (e) {
                this.$bvToast.toast('Ошибка загрузки страницы!', {
                    title: 'Что-то пошло не так(',
                    variant: 'danger',
                    solid: true,
                    appendToast: true
                })
            }
        }
    }
</script>

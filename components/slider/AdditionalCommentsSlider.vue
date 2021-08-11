<template>
    <div class="g-slider">
        <vue-slick
            ref="additionalCommentsSlider"
            :variable-width="settings.variableWidth"
            :slides-to-show="settings.slidesToShow"
            :slides-to-scroll="settings.slidesToScroll"
            :arrows="settings.arrows"
            :dots="settings.dots"
        >
            <g-another-comment-card
                v-for="item in data"
                :key="item.itemName"
                :id="item.itemName"
                :item-name="item.itemName"
                :user-nickname="item.userNickname"
                :text="item.userFeedbackText"
                :image="item.itemHeaderImage"
            />
        </vue-slick>
        <div class="g-slider__controls">
            <arrow-button 
                @click.native="prev($refs.additionalCommentsSlider)"
                class="g-slider__button g-slider__button_left"
                left
            />
            <arrow-button 
                @click.native="next($refs.additionalCommentsSlider)"
                class="g-slider__button g-slider__button_right"
                right 
            />
        </div>
    </div>
</template>

<script>
    import ArrowButton         from '~/components/slider/ArrowButton'
    import GAnotherCommentCard from '~/components/cards/AnotherCommentCard'
    export default {
        name: 'GAdditionalCommentsSlider',
        components: { GAnotherCommentCard, ArrowButton },
        data: () => {
            return {
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                    arrows: false,
                    dots: false
                }
            }
        },
        props: {
            data: {
                type: Array,
                default: () => null
            }
        },
        methods: {
            next (slider) {
                slider.next()
            },
            prev (slider) {
                slider.prev()
            }
        }
    }
</script>

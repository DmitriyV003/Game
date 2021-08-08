<template>
    <div class="g-slider genre-slider">
        <vue-slick
            ref="achievementSlider"
            :variable-width="settings.variableWidth"
            :slides-to-show="settings.slidesToShow"
            :slides-to-scroll="settings.slidesToScroll"
            :arrows="settings.arrows"
            :dots="settings.dots"
        >
            <g-achievement-card
                v-for="item in data"
                class="genres__card"
                :name="item.name"
                :key="item.name"
                :image="item.background"
                :desc="item.desc"
                :date="item.date"
            />
        </vue-slick>
        <div class="g-slider__controls">
            <arrow-button @click.native="prev($refs.achievementSlider)" class="g-slider__button g-slider__button_left" left />
            <arrow-button @click.native="next($refs.achievementSlider)" class="g-slider__button g-slider__button_right" right />
        </div>
    </div>
</template>

<script>
    import ArrowButton      from '~/components/slider/ArrowButton'
    import GAchievementCard from '~/components/cards/AchievementCard'
    export default {
        name: 'GAchievementSlider',
        components: { GAchievementCard, ArrowButton },
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
                required: true
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

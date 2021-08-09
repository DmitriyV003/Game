<template>
    <nuxt-link
        :to="to"
        tag="a"
        class="button-reboot button button_rounded"
    >
        {{ label }}
    </nuxt-link>
</template>

<script>
    export default {
        name: 'RoundedButton',
        props: {
            label: {
                type: String,
                required: true
            },
            to: {
                type: String,
                required: true
            }
        }
    }
</script>

<style lang="sass">
    @import 'theme/_vars'
    @import 'theme/_mix'
    .button
        &_rounded
            font-weight: 400
            font-size: 20px
            line-height: 27px
            border: 1px solid #643EFF !important
            border-radius: 100px !important
            padding: 14px 32px 13.4px 32px !important
            &:hover
                color: $white
                background: rgba(255, 255, 255, 0.04)
            +md
                padding: 12px 32px !important
                font-size: 16px
                line-height: 24px
</style>

<template>
    <b-container>
        <form action="" @submit.prevent="signInByEmail">
            <div class="g-window auth-structure">
                <nuxt-link tag="div" to="/sign-in" class="auth-structure__back">
                    <chevron-left-icon class="icon"/>
                    <span class="text-weight-500">Назад</span>
                </nuxt-link>

                <p class="auth-structure__title text-color-white text-uppercase">Вход по E-mail</p>

                <div class="auth-structure__inputs">
                    <g-input
                        v-model.trim="$v.form.email.$model"
                        class="auth-structure__input"
                        placeholder="E-mail *"
                        :error="$v.form.email.$error || 'email' in apiErrors"
                    >
                        <template v-slot:error>
                            <span v-if="!$v.form.email.required && $v.form.email.$error">Email обязателен</span>
                            <span v-if="!$v.form.email.email && $v.form.email.$error">Email должен быть валидным</span>
                            <span v-if="!$v.form.email.maxLength && $v.form.email.$error">Максимальная длина Email {{ $v.form.email.$params.maxLength.max }} символов</span>
                        </template>
                    </g-input>
                    <g-input
                        v-model.trim="$v.form.password.$model"
                        class="auth-structure__input"
                        placeholder="Пароль *"
                        :error="$v.form.password.$error || 'password' in apiErrors"
                        type="password"
                    >
                        <template v-slot:error>
                            <span v-if="!$v.form.password.required && $v.form.password.$error">Пароль обязателен</span>
                            <span v-if="!$v.form.password.maxLength && $v.form.password.$error">Максимальная длина пароля {{ $v.form.password.$params.maxLength.max }} символов</span>
                        </template>
                    </g-input>
                </div>

                <show-all class="auth-structure__forget" to="/auth/password-reset" label="Забыли пароль?"
                          :icon="false"/>

                <main-button :disabled="disabled || $v.$invalid" tag="button" type="submit" full-width size="xl"
                             color="primary" label="войти"/>
            </div>
        </form>
    </b-container>
</template>


<script>
    import icons                          from '~/mixins/icons'
    import GInput                         from '~/components/form-elements/Input'
    import ShowAll                        from '~/components/buttons/MainLink'
    import MainButton                     from '~/components/buttons/MainButton'
    import { email, maxLength, required } from 'vuelidate/lib/validators'

    export default {
        name: 'EmailSignIn',
        components: { MainButton, ShowAll, GInput },
        layout: 'sign-in',
        mixins: [icons],
        data: () => {
            return {
                form: {
                    email: null,
                    password: null
                },
                disabled: false,
                apiErrors: {},
                error: false
            }
        },
        validations: {
            form: {
                email: {
                    required,
                    email,
                    maxLength: maxLength (255)
                },
                password: {
                    required,
                    maxLength: maxLength (255)
                }
            }
        },
        methods: {
            async signInByEmail() {
                try {
                    this.disabled = true
                    await this.$store.dispatch ('auth/signInByEmail', this.form)
                    await this.$router.push ('/')
                } catch (e) {
                    if (e.response.status === 422) {
                        this.apiErrors = e.response.data.errors

                        this.$bvToast.toast ('Проверьте введенные данные еще раз', {
                            title: 'Ошибка в заполнении данных!',
                            variant: 'danger',
                            solid: true,
                            appendToast: true
                        })
                    }
                } finally {
                    this.disabled = false
                }
            }
        }
    }
</script>

<template>
  <b-container>
    <div class="sign-up g-window">
      <h6 class="sign-up__title">Выберите способ регистрации на сайте</h6>

      <div class="sign-up__socials">
        <social-btn target="_self" to="/sign-up/email" class="sign-up__social" icon-color="#643EFF" icon="/images/gameInComeBtn.svg" label="Через E-mail и пароль" />
        <social-btn to="/auth/email" class="sign-up__social" icon-color="#3F619E" icon="/images/fb.svg" label="Facebook" />
        <social-btn :href="$axios.defaults.baseURL + vkRoute" class="sign-up__social" icon-color="#5580BD" icon="/images/vk.svg" label="Вконтакте" />
        <social-btn to="/auth/email" class="sign-up__social" icon-color="#FFFFFF" icon="/images/google.svg" label="Google" />
        <social-btn to="/auth/email" class="sign-up__social" icon-color="#FFFFFF" icon="/images/apple.svg" label="Apple id" />
        <social-btn to="/auth/email" class="sign-up__social" icon-color="#8C46F7" icon="/images/twitch.svg" label="Twitch" />
        <social-btn to="/auth/email" class="sign-up__social" icon-color="#0C9CED" icon="/images/twitter.svg" label="Twitter" />
      </div>
    </div>
  </b-container>
</template>

<script>
  import SocialBtn from '~/components/buttons/SocialBtn'
  import apiRoutes from '~/plugins/apiRoutes'
  export default {
    name: 'SignUpPage',
    components: { SocialBtn },
    layout: 'sign-up',
    data: () => {
      return {
        vkRoute: apiRoutes.signInByVk
      }
    }
  }
</script>

<style lang="sass">
  @import 'theme/_mix'
  .sign-up
    &__social
      &:not(:last-child)
        margin-bottom: 12px
    &__title
      margin-bottom: 32px
      +lg
        margin-bottom: 24px
</style>

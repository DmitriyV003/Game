<template>
  <b-container>
    <div class="sign-up">
      <h6 class="sign-up__title">Выберите способ регистрации на сайте</h6>

      <div class="sign-up__socials">
        <social-btn to="/auth/email" class="sign-up__social" icon-color="#643EFF" icon="/images/gameInComeBtn.svg" label="Через E-mail и пароль" />
        <social-btn to="/auth/email" class="sign-up__social" icon-color="#3F619E" icon="/images/fb.svg" label="Facebook" />
        <social-btn to="/auth/email" class="sign-up__social" icon-color="#5580BD" icon="/images/vk.svg" label="Вконтакте" />
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
  export default {
    name: 'SignUpPage',
    components: { SocialBtn },
    layout: 'sign-up'
  }
</script>

<style lang="sass">
  @import 'theme/_mix'
  .sign-up
    background: rgba(40, 36, 57, 1)
    padding: 48px 56px
    border-radius: 12px
    max-width: 472px
    margin: 88px auto 96px
    +lg
      margin: 60px auto 80px
      padding: 24px 16px
    &__social
      &:not(:last-child)
        margin-bottom: 12px
    &__title
      margin-bottom: 32px
      +lg
        margin-bottom: 24px
</style>

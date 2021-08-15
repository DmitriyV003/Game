<template>
  <div v-if="show" class="g-toast" :class="[`g-toast_${type}`]">{{ text }}</div>
</template>

<style lang="sass">
.g-toast
    position: fixed
    top: 20px
    right: 20px
    padding: 16px
    z-index: 999
    background: black
</style>

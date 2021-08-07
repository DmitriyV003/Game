<template>
  <div
    class="g-product-search"
  >
    <div class="g-product-search__wrapper">
      <g-input
        class="g-product-search__input"
        color="white"
        v-model="form.search"
        @input="getSearchItems"
      />
      
      <div 
        class="g-product-search__drop"
        v-if="items.length > 0 && isDropShow"
      >
        <div 
          class="g-product-search__line"
          v-for="item in items"
          :key="item.id"
          @click="setSaleItem({ id: item.id, name: item.name })"
        >
          {{ item.name }}
        </div>
      </div>
    </div>

    <main-button
      class="g-product-search__btn"
      size="xl"
      color="primary"
      label="выбрать"
      @click.native="getSaleItem"
    />
  </div>
</template>

<script>
import MainButton from '~/components/buttons/MainButton'
import GInput from '~/components/form-elements/Input'
import { mapState } from 'vuex'

export default {
  name: 'GSearchGamesForSell',
  components: {
    MainButton, 
    GInput 
  },
  data () {
    return {
      form: {
        search: null,
        id: null
      },
      isDropShow: false
    }
  },
  computed: {
    ...mapState({
      items: state => state.sales.searchItems
    })
  },
  methods: {
    setSaleItem ({ id, name }) {
      this.form.search = name
      this.form.id = id
      this.isDropShow = false
    },
    async getSaleItem () {
      try {
        await this.$store.dispatch('sales/getSaleItem', this.form.id)
        
        await this.$router.push({ path: '/dashboard/sales/add-new', query: { itemId: this.form.id }})
      } catch (e) {
        console.log(e)
      }
    },
    async getSearchItems () {
      this.isDropShow = true
      try {
        await this.$store.dispatch('sales/getSearchItems', this.form.search)
      } catch (e) {
        console.log(e.response)
      }
    }
  }
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.g-product-search
  padding: 20px 24px
  background: #282439
  border-radius: 12px
  display: flex
  align-items: center
  justify-content: space-between
  +md
    flex-direction: column
    padding: 20px 16px
  &__line
    padding: 12px 16px
    color: #1F1C2B
    font-weight: 500
    font-size: 16px
    line-height: 24px
    &:hover
      cursor: pointer
      background: rgba(136, 117, 255, 0.1)
      color: rgba(100, 62, 255, 1)
  &__drop
    border-radius: 6px
    background: $white
    position: absolute
    left: 0
    bottom: 0
    width: 100%
    transform: translateY(calc(100% + 8px))
    max-height: 240px
    overflow-y: auto
  &__wrapper
    margin-right: 20px
    width: 100%
    position: relative
    +md
      margin-bottom: 24px
  &__btn
    +md
      width: 100%
      .button
        width: 100%
  &__input
    width: 100%
</style>

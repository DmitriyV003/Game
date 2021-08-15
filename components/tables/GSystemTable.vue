<template>
  <div class="g-system-table">
    <div class="g-system-table__top">
      <p class="text-size-24 text-color-white text-weight-600">Windows</p>
    </div>

    <div class="g-system-table__body">
      <div class="g-system-table__line">
        <g-info-block
          class="g-system-table__cell g-system-table__cell_emp"
          title="Минимальные:"
        />
        <g-info-block
          class="g-system-table__cell g-system-table__cell_emp"
          title="Рекомендуемые:"
        />
      </div>

      <div class="g-system-table__line">
        <g-info-block
          class="g-system-table__cell"
          title="ОС Windows"
          text="ОС Windows 10 (64-разрядная)"
        />
        <g-info-block
          class="g-system-table__cell"
          title="ОС Windows"
          text="ОС Windows 10 (64-разрядная)"
        />
      </div>

      <div class="g-system-table__line">
        <g-info-block
          class="g-system-table__cell"
          title="Процессор Windows"
          text="Intel Core i5-2500K с частотой 3,3 ГГц / AMD CPU Phenom II X4 940"
        />
        <g-info-block
          class="g-system-table__cell"
          title="Процессор Windows"
          text="Intel Core i7 4790 с частотой 4 ГГц"
        />
      </div>

      <div class="g-system-table__line">
        <g-info-block
          class="g-system-table__cell"
          title="Память Windows"
          text="8 Gb"
        />
        <g-info-block
          class="g-system-table__cell"
          title="Память Windows"
          text="16 Gb"
        />
      </div>
    </div>
  </div>
</template>

<script>
import GInfoBlock from '~/components/GInfoBlock'
export default {
  name: 'GSystemTable',
  components: { GInfoBlock },
}
</script>

<style lang="sass">
@import 'theme/_vars'
@import 'theme/_mix'
.g-system-table
  background: #282439
  border-radius: 10px
  overflow: hidden
  &__cell
    width: calc(50% - 19px)
    +md
      width: calc(50% - 8px)
    &_emp
      .g-info__title
        +md
          font-size: 16px
          line-height: 24px
  &__line
    display: flex
    justify-content: space-between
    &:not(:last-child)
      margin-bottom: 24px
      +md
        margin-bottom: 12px
      .g-system-table__cell
        .g-info__text
          +md
            margin-bottom: 16px
        &::after
          +md
            content: ''
            height: 1px
            background: rgba(154, 147, 170, 0.2)
            width: 100%
            margin-top: auto
  &__body
    padding: 32px
    +md
      padding: 20px 16px
  &__top
    padding: 20px 32px 24px 32px
    background: rgba(100, 62, 255, 0.2)
    +md
      padding: 16px
</style>
